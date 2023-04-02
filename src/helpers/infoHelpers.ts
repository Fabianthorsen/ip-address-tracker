type ObjectWithKeys<T> = { [K in keyof T]: { key: K; value: T[K] } };

export function createObjectsFromObject<T extends Record<string, unknown>>(
  obj: T,
  ignoreKeys?: Array<keyof T>
): ObjectWithKeys<T>[] {
  const keysToIgnore = new Set(ignoreKeys);
  const keys = Object.keys(obj) as Array<keyof T>;
  return keys
    .filter((key) => !keysToIgnore.has(key))
    .map((key) => ({ key, value: obj[key] })) as ObjectWithKeys<T>[];
}