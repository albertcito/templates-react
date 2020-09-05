/**
 * TO use with await and retur the `value` in the Promise.
 * number time
 * T value
 */
function delay<T>(time: number, value: T): Promise<T> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(value), time);
  });
}

export default delay;
