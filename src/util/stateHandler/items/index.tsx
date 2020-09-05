/**
 * Add a new value in the end of the array
 * T[] items
 * T item
 */
export function append<T>(items: T[], item: T): T[] {
  return [...items, item];
}

/**
 * Add a new value in the start of the array
 * T[] items
 * T item
 */
export function prepend<T>(items: T[], item: T): T[] {
  return [item, ...items];
}

/**
 * Add an array in the end of the array
 * T[] items
 * T[] itemsToAppend
 */
export function appendArray<T>(items: T[], itemsToAppend: T[]): T[] {
  return [...items, ...itemsToAppend];
}

/**
 * Add an array in the start of the array
 * T[] items
 * T[] itemsToAppend
 */
export function prependArray<T>(items: T[], itemsToAppend: T[]): T[] {
  return [...itemsToAppend, ...items];
}

/**
 * To remove an item by the position in the array
 * T items
 * number index
 */
export function remove<T>(items: T[], index: number): T[] {
  return items.filter((item, i) => i !== index);
}

/**
 * To remove an item by the position in the array
 * items
 * column
 * value
 */
export function removeByColumn<T>(items: T[], column: keyof T, value: string | number): T[] {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return items.filter((item: any) => item[column] !== value);
}

/**
 * To set an element by the id (assuming that the value is an object)
 * T[] items
 * T newItem
 * number index
 */
export function set<T>(items: T[], newItem: T, index: number): T[] {
  return items.map((item, i) => ((i === index) ? newItem : item));
}

/**
 * Swap the values of the array
 * T[] items
 * number firstIndex
 * number secondIndex
 */
export function swap<T>(items: T[], firstIndex: number, secondIndex: number): T[] {
  const results = [...items];
  const firstItem = items[firstIndex];
  results[firstIndex] = items[secondIndex];
  results[secondIndex] = firstItem;
  return results;
}

/**
 * Insert a new item in a index position
 * T[] items
 * number index
 * T item
 */
export function insert<T>(items: T[], index: number, item: T): T[] {
  return items.splice(index, 0, item);
}

/**
 * Sort array by key.
 * T items
 *  key
 */
export function sortByKey<T>(items: T[], key: keyof T): T[] {
  return items.sort((a, b) => ((a[key] > b[key]) ? 1 : -1));
}

/**
 * Set the value for other value.
 * T[] items
 * T column
 * number value
 * T newItem
 */
export function setByKey<T>(items: T[], key: keyof T, value: number, newItem: T): T[] {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return items.map((item: any) => ((item[key] === value) ? newItem : item));
}
