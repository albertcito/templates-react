export interface StructFormat<T> {
  [key: string ]: T;
}

export function set<T>(struct: StructFormat<T>, key: string | number, item: T): StructFormat<T> {
  return {
    ...struct,
    [key]: item,
  };
}

export function appendStructFormat<T>(struct: StructFormat<T>, structToAppend: StructFormat<T>): StructFormat<T> {
  return { ...struct, ...structToAppend };
}

export function remove<T>(struct: StructFormat<T>, key: string | number): StructFormat<T> {
  const { [key]: foo, ...rest } = struct;
  return rest;
}

/**
 * Remove many keys from a struct
 *
 * @param struct
 * @param keys
 */
export function removeKeys<T>(struct: StructFormat<T>, keys: (string | number)[]): StructFormat<T> {
  return Object.fromEntries(
    Object.entries(struct).filter(([key]) => !keys.includes(key)),
  );
}

/**
 * Remove undefined or null elements from a struct
 *
 * @param struct
 */
export function removeEmpty<T>(struct: StructFormat<T>): StructFormat<T> {
  return Object.fromEntries(
    Object.entries(struct).filter(([key]) => (struct[key] !== undefined && struct[key] !== null)),
  );
}
