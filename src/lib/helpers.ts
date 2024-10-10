/**
 * Finds the first element in an array that satisfies the provided testing function.
 *
 * @param {Array<T>} arr The array to search.
 * @param {fn} callback The function to call on each element of the array.
 * @param {Array<any>} args Additional arguments to pass to the callback function.
 * @returns {T} The first element in the array that passes the testing function, or undefined if no element passes the test.
 */
export function findInArray<T>(
  arr: Array<T>,
  callback: (element: T, index: number, array: T[]) => boolean,
  ...args: Array<any>
): T | undefined {
  if (typeof callback !== 'function') {
    throw new TypeError('callback must be a function')
  }

  const list = Object(arr)
  // Makes sure it always has a positive integer as length.
  const length = list.length >>> 0
  const thisArg = args[2]

  for (let i = 0; i < length; i++) {
    const element = list[i]
    if (callback.call(thisArg, element, i, list)) {
      return element
    }
  }

  return undefined
}
