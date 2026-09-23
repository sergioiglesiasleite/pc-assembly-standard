export const checklistStorageVersion = 1;

export function checklistStorageKey(sectionId: string): string {
  return `pc-assembly-field-guide:checklist:v${checklistStorageVersion}:${sectionId}`;
}

export function readChecklistProgress(raw: string | null, validIds: readonly string[]): Set<string> {
  if (!raw) return new Set();

  try {
    const value: unknown = JSON.parse(raw);
    if (
      typeof value !== 'object' ||
      value === null ||
      !('version' in value) ||
      value.version !== checklistStorageVersion ||
      !('checked' in value) ||
      !Array.isArray(value.checked)
    ) {
      return new Set();
    }

    const allowed = new Set(validIds);
    return new Set(value.checked.filter((id): id is string => typeof id === 'string' && allowed.has(id)));
  } catch {
    return new Set();
  }
}

export function serializeChecklistProgress(checked: Set<string>): string {
  return JSON.stringify({ version: checklistStorageVersion, checked: [...checked] });
}
