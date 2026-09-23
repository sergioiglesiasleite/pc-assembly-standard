import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import { test } from 'node:test';
import { checklistIds } from '../src/data/checklistIds.ts';
import { translations, supportedLanguages } from '../src/data/translations.ts';

const sectionNames = Object.keys(checklistIds);

function compareShape(reference, candidate, path = '') {
  assert.deepEqual(Object.keys(candidate).sort(), Object.keys(reference).sort(), `Missing or extra key at ${path}`);
  for (const key of Object.keys(reference)) {
    const nextPath = path ? `${path}.${key}` : key;
    if (Array.isArray(reference[key])) {
      assert.ok(Array.isArray(candidate[key]), `Expected an array at ${nextPath}`);
      assert.equal(candidate[key].length, reference[key].length, `Translation item count differs at ${nextPath}`);
    } else if (reference[key] && typeof reference[key] === 'object') {
      compareShape(reference[key], candidate[key], nextPath);
    } else {
      assert.equal(typeof candidate[key], 'string', `Missing text at ${nextPath}`);
      assert.ok(candidate[key].trim(), `Empty text at ${nextPath}`);
    }
  }
}

test('EN, ES and DE contain the same sections, fields and item counts', () => {
  for (const lang of supportedLanguages) {
    compareShape(translations.en, translations[lang], lang);
  }
});

test('checklist IDs are stable, unique and match every translated list', () => {
  for (const section of sectionNames) {
    const ids = checklistIds[section];
    assert.equal(ids.length, new Set(ids).size, `Duplicate ID in ${section}`);
    for (const lang of supportedLanguages) {
      assert.equal(ids.length, translations[lang].sections[section].checklist.length, `${lang}/${section}`);
    }
  }
});

test('every guide image resolves to an existing local asset', () => {
  function findImages(value) {
    if (!value || typeof value !== 'object') return [];
    const found = [];
    if (typeof value.src === 'string' && value.src.startsWith('/images/')) found.push(value.src);
    for (const item of Object.values(value)) found.push(...findImages(item));
    return found;
  }
  for (const src of findImages(translations.en)) {
    assert.ok(existsSync(new URL(`../public${src}`, import.meta.url)), `Missing asset: ${src}`);
  }
});
