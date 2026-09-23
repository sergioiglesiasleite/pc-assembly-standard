import { useEffect, useState } from 'react';
import type { GuideTranslation } from '../data/translations';
import {
  checklistStorageKey,
  readChecklistProgress,
  serializeChecklistProgress,
} from '../data/checklistStorage';

interface ChecklistProps {
  items: readonly string[];
  ids: readonly string[];
  sectionId: string;
  labels: Pick<
    GuideTranslation['ui'],
    'checklistTitle' | 'progressLabel' | 'resetLabel' | 'resetConfirm'
  >;
}

export default function Checklist({ items, ids, sectionId, labels }: ChecklistProps) {
  const storageKey = checklistStorageKey(sectionId);
  const [checked, setChecked] = useState<Set<string>>(new Set());
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      setChecked(readChecklistProgress(localStorage.getItem(storageKey), ids));
    } catch {
      setChecked(new Set());
    }
    setLoaded(true);
  }, [storageKey, ids]);

  useEffect(() => {
    if (!loaded) return;
    try {
      localStorage.setItem(storageKey, serializeChecklistProgress(checked));
    } catch {
      // The checklist remains usable during this visit if storage is disabled.
    }
  }, [checked, loaded, storageKey]);

  const toggle = (id: string) => {
    setChecked((previous) => {
      const next = new Set(previous);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const reset = () => {
    if (window.confirm(labels.resetConfirm)) setChecked(new Set());
  };

  const completed = ids.filter((id) => checked.has(id)).length;

  return (
    <section className="my-6 rounded-lg border border-gray-200 bg-white p-5 sm:p-6" aria-labelledby={`checklist-${sectionId}`}>
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
        <h3 id={`checklist-${sectionId}`} className="text-lg font-semibold text-brand-dark">
          {labels.checklistTitle}
        </h3>
        <span className="text-sm text-gray-700">{completed}/{items.length}</span>
      </div>
      <div
        role="progressbar"
        aria-label={labels.progressLabel}
        aria-valuemin={0}
        aria-valuemax={items.length}
        aria-valuenow={completed}
        className="mb-5 h-2 overflow-hidden rounded-full bg-gray-200"
      >
        <div className="h-full bg-brand-primary" style={{ width: `${items.length ? (completed / items.length) * 100 : 0}%` }} />
      </div>
      <ul className="space-y-2">
        {items.map((item, index) => {
          const id = ids[index];
          if (!id) return null;
          return (
            <li key={id}>
              <label className="flex min-h-11 cursor-pointer items-start gap-3 rounded-lg p-2 hover:bg-gray-50 focus-within:outline-2 focus-within:outline-brand-primary">
                <input
                  type="checkbox"
                  checked={checked.has(id)}
                  onChange={() => toggle(id)}
                  className="mt-1 h-5 w-5 shrink-0 accent-brand-primary"
                />
                <span className={checked.has(id) ? 'text-gray-600 line-through' : 'text-brand-dark'}>{item}</span>
              </label>
            </li>
          );
        })}
      </ul>
      {completed > 0 && (
        <button type="button" onClick={reset} className="mt-5 min-h-11 rounded-lg px-3 text-sm font-medium text-brand-primary underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-brand-primary">
          {labels.resetLabel}
        </button>
      )}
    </section>
  );
}
