import assert from 'node:assert/strict';
import { test } from 'node:test';
import {
  checklistStorageKey,
  readChecklistProgress,
  serializeChecklistProgress,
} from '../src/data/checklistStorage.ts';

const ids = ['cpu', 'ram', 'gpu'];

test('progress uses one language-independent, versioned key', () => {
  assert.equal(checklistStorageKey('hardware'), 'pc-assembly-field-guide:checklist:v1:hardware');
});

test('progress survives item reordering because it uses IDs', () => {
  const raw = serializeChecklistProgress(new Set(['cpu', 'gpu']));
  assert.deepEqual([...readChecklistProgress(raw, [...ids].reverse())].sort(), ['cpu', 'gpu']);
});

test('corrupt, outdated and removed entries are ignored', () => {
  assert.equal(readChecklistProgress('{bad', ids).size, 0);
  assert.equal(readChecklistProgress('{"version":0,"checked":["cpu"]}', ids).size, 0);
  assert.deepEqual(
    [...readChecklistProgress('{"version":1,"checked":["cpu","removed",5,"cpu"]}', ids)],
    ['cpu'],
  );
});
