/**
 * Filters elements in an array based on a condition.
 * @param array - The array to filter.
 * @param condition - The condition to filter elements.
 * @returns The filtered array.
 */
export function where<T>(array: T[], condition: (value: T, index: number, array: T[]) => boolean): T[] {
    if (!Array.isArray(array)) throw new TypeError('Expected an array');
    return array.filter(condition);
}

/**
 * Transforms elements in an array using a projection function.
 * @param array - The array to transform.
 * @param projection - The projection function to apply to each element.
 * @returns The array with transformed elements.
 */
export function select<T, U>(array: T[], projection: (value: T, index: number, array: T[]) => U): U[] {
    if (!Array.isArray(array)) throw new TypeError('Expected an array');
    return array.map(projection);
}

/**
 * Sorts elements in an array in ascending order based on a key.
 * @param array - The array to sort.
 * @param keySelector - The key selection function.
 * @returns The sorted array.
 */
export function orderBy<T>(array: T[], keySelector: (value: T) => any): T[] {
    if (!Array.isArray(array)) throw new TypeError('Expected an array');
    return array.slice().sort((a, b) => {
        const keyA = keySelector(a);
        const keyB = keySelector(b);
        return keyA < keyB ? -1 : keyA > keyB ? 1 : 0;
    });
}

/**
 * Sorts elements in an array in descending order based on a key.
 * @param array - The array to sort.
 * @param keySelector - The key selection function.
 * @returns The sorted array in descending order.
 */
export function orderByDescending<T>(array: T[], keySelector: (value: T) => any): T[] {
    if (!Array.isArray(array)) throw new TypeError('Expected an array');
    return array.slice().sort((a, b) => {
        const keyA = keySelector(a);
        const keyB = keySelector(b);
        return keyA > keyB ? -1 : keyA < keyB ? 1 : 0;
    });
}

/**
 * Returns the first element in an array that satisfies a condition.
 * @param array - The array to search.
 * @param condition - The condition to check.
 * @returns The first element that satisfies the condition, or undefined if no such element is found.
 */
export function first<T>(array: T[], condition?: (value: T, index: number, array: T[]) => boolean): T | undefined {
    if (!Array.isArray(array)) throw new TypeError('Expected an array');
    return condition ? array.find(condition) : array[0];
}

/**
 * Returns the first element in an array that satisfies a condition, or a default value if no element is found.
 * @param array - The array to search.
 * @param condition - The condition to check.
 * @param defaultValue - The default value to return if no element is found.
 * @returns The first element that satisfies the condition, or the default value if no element is found.
 */
export function firstOrDefault<T>(array: T[], condition: (value: T, index: number, array: T[]) => boolean, defaultValue: T): T {
    if (!Array.isArray(array)) throw new TypeError('Expected an array');
    return condition ? array.find(condition) || defaultValue : array[0] || defaultValue;
}

/**
 * Returns the last element in an array that satisfies a condition.
 * @param array - The array to search.
 * @param condition - The condition to check.
 * @returns The last element that satisfies the condition, or undefined if no such element is found.
 */
export function last<T>(array: T[], condition?: (value: T, index: number, array: T[]) => boolean): T | undefined {
    if (!Array.isArray(array)) throw new TypeError('Expected an array');
    if (condition) {
        const reversed = array.slice().reverse();
        return reversed.find(condition);
    }
    return array[array.length - 1];
}

/**
 * Returns the last element in an array that satisfies a condition, or a default value if no element is found.
 * @param array - The array to search.
 * @param condition - The condition to check.
 * @param defaultValue - The default value to return if no element is found.
 * @returns The last element that satisfies the condition, or the default value if no element is found.
 */
export function lastOrDefault<T>(array: T[], condition: (value: T, index: number, array: T[]) => boolean, defaultValue: T): T {
    if (!Array.isArray(array)) throw new TypeError('Expected an array');
    if (condition) {
        const reversed = array.slice().reverse();
        return reversed.find(condition) || defaultValue;
    }
    return array[array.length - 1] || defaultValue;
}

/**
 * Returns the single element in an array that satisfies a condition.
 * Throws an error if more than one element satisfies the condition.
 * @param array - The array to search.
 * @param condition - The condition to check.
 * @returns The single element that satisfies the condition, or undefined if no such element is found.
 */
export function single<T>(array: T[], condition: (value: T, index: number, array: T[]) => boolean): T | undefined {
    if (!Array.isArray(array)) throw new TypeError('Expected an array');
    const result = array.filter(condition);
    if (result.length > 1) throw new Error('More than one element satisfies the condition');
    return result[0];
}

/**
 * Returns the single element in an array that satisfies a condition, or a default value if no element is found or multiple elements are found.
 * @param array - The array to search.
 * @param condition - The condition to check.
 * @param defaultValue - The default value to return if no element is found or multiple elements are found.
 * @returns The single element that satisfies the condition, or the default value if no element is found or multiple elements are found.
 */
export function singleOrDefault<T>(array: T[], condition: (value: T, index: number, array: T[]) => boolean, defaultValue: T): T {
    if (!Array.isArray(array)) throw new TypeError('Expected an array');
    const result = array.filter(condition);
    return result.length === 1 ? result[0] : defaultValue;
}

/**
 * Counts the number of elements in an array that satisfy a condition.
 * @param array - The array to search.
 * @param condition - The condition to check.
 * @returns The number of elements that satisfy the condition.
 */
export function count<T>(array: T[], condition?: (value: T, index: number, array: T[]) => boolean): number {
    if (!Array.isArray(array)) throw new TypeError('Expected an array');
    return condition ? array.filter(condition).length : array.length;
}

/**
 * Checks if any element in an array satisfies a condition.
 * @param array - The array to search.
 * @param condition - The condition to check.
 * @returns True if any element satisfies the condition, otherwise false.
 */
export function any<T>(array: T[], condition?: (value: T, index: number, array: T[]) => boolean): boolean {
    if (!Array.isArray(array)) throw new TypeError('Expected an array');
    return condition ? array.some(condition) : array.length > 0;
}

/**
 * Skips a specified number of elements in an array and returns the remaining elements.
 * @param array - The array to skip elements from.
 * @param count - The number of elements to skip.
 * @returns The array with the remaining elements.
 */
export function skip<T>(array: T[], count: number): T[] {
    if (!Array.isArray(array)) throw new TypeError('Expected an array');
    if (count < 0) throw new RangeError('Count cannot be negative');
    return array.slice(count);
}

/**
 * Returns a specified number of contiguous elements from the start of an array.
 * @param array - The array to take elements from.
 * @param count - The number of elements to take.
 * @returns The array with the taken elements.
 */
export function take<T>(array: T[], count: number): T[] {
    if (!Array.isArray(array)) throw new TypeError('Expected an array');
    if (count < 0) throw new RangeError('Count cannot be negative');
    return array.slice(0, count);
}

/**
 * Returns a new array with distinct elements from the original array.
 * @param array - The array to remove duplicates from.
 * @returns The array with distinct elements.
 */
export function distinct<T>(array: T[]): T[] {
    if (!Array.isArray(array)) throw new TypeError('Expected an array');
    return [...new Set(array)];
}

/**
 * Applies an accumulator function over an array and returns the accumulated result.
 * @param array - The array to accumulate.
 * @param accumulator - The accumulator function.
 * @param initialValue - The initial value for the accumulator.
 * @returns The accumulated result.
 */
export function aggregate<T, U>(array: T[], accumulator: (acc: U, value: T, index: number, array: T[]) => U, initialValue: U): U {
    if (!Array.isArray(array)) throw new TypeError('Expected an array');
    return array.reduce(accumulator, initialValue);
}

/**
 * Checks if all elements in an array satisfy a condition.
 * @param array - The array to check.
 * @param condition - The condition to check.
 * @returns True if all elements satisfy the condition, otherwise false.
 */
export function all<T>(array: T[], condition: (value: T, index: number, array: T[]) => boolean): boolean {
    if (!Array.isArray(array)) throw new TypeError('Expected an array');
    return array.every(condition);
}

/**
 * Concatenates two arrays.
 * @param array - The first array.
 * @param collection - The array to concatenate.
 * @returns The concatenated array.
 */
export function concatenate<T>(array: T[], collection: T[]): T[] {
    if (!Array.isArray(array) || !Array.isArray(collection)) throw new TypeError('Expected arrays');
    return array.concat(collection);
}

/**
 * Returns an array with a default value if the original array is empty.
 * @param array - The original array.
 * @param defaultValue - The default value to return if the original array is empty.
 * @returns The original array or an array with the default value.
 */
export function defaultIfEmpty<T>(array: T[], defaultValue: T): T[] {
    if (!Array.isArray(array)) throw new TypeError('Expected an array');
    return array.length > 0 ? array : [defaultValue];
}

/**
 * Groups elements in an array based on a key.
 * @param array - The array to group.
 * @param keySelector - The key selection function.
 * @returns The map of groups.
 */
export function groupBy<T, K>(array: T[], keySelector: (value: T) => K): Map<K, T[]> {
    if (!Array.isArray(array)) throw new TypeError('Expected an array');
    const groups = new Map<K, T[]>();
    array.forEach(item => {
        const key = keySelector(item);
        if (!groups.has(key)) {
            groups.set(key, []);
        }
        groups.get(key)!.push(item);
    });
    return groups;
}

/**
 * Joins two arrays based on matching keys and returns the result.
 * @param outerArray - The first array.
 * @param innerArray - The second array.
 * @param outerKeySelector - The key selection function for the first array.
 * @param innerKeySelector - The key selection function for the second array.
 * @param resultSelector - The result selection function.
 * @returns The joined array.
 */
export function join<T, U, K, R>(
    outerArray: T[],
    innerArray: U[],
    outerKeySelector: (value: T) => K,
    innerKeySelector: (value: U) => K,
    resultSelector: (outerValue: T, innerValue: U) => R
): R[] {
    if (!Array.isArray(outerArray) || !Array.isArray(innerArray)) throw new TypeError('Expected arrays');
    const results: R[] = [];
    for (const outerElement of outerArray) {
        for (const innerElement of innerArray) {
            if (outerKeySelector(outerElement) === innerKeySelector(innerElement)) {
                results.push(resultSelector(outerElement, innerElement));
            }
        }
    }
    return results;
}

/**
 * Returns the maximum value in an array based on a key.
 * @param array - The array to search.
 * @param keySelector - The key selection function.
 * @returns The maximum value.
 */
export function max<T>(array: T[], keySelector: (value: T) => number): number {
    if (!Array.isArray(array)) throw new TypeError('Expected an array');
    if (array.length === 0) throw new Error('Array is empty');
    return Math.max(...array.map(keySelector));
}

/**
 * Returns the minimum value in an array based on a key.
 * @param array - The array to search.
 * @param keySelector - The key selection function.
 * @returns The minimum value.
 */
export function min<T>(array: T[], keySelector: (value: T) => number): number {
    if (!Array.isArray(array)) throw new TypeError('Expected an array');
    if (array.length === 0) throw new Error('Array is empty');
    return Math.min(...array.map(keySelector));
}

/**
 * Filters elements in an array by a specified type.
 * @param array - The array to filter.
 * @param type - The constructor function of the type to filter by.
 * @returns The array with elements of the specified type.
 */
export function ofType<T, U extends T>(array: T[], type: { new (...args: any[]): U }): U[] {
    if (!Array.isArray(array)) throw new TypeError('Expected an array');
    return array.filter((item): item is U => item instanceof type);
}

/**
 * Generates an array containing a range of numbers.
 * @param start - The start value.
 * @param count - The number of elements.
 * @returns The array containing the range of numbers.
 */
export function range(start: number, count: number): number[] {
    if (count < 0) throw new RangeError('Count cannot be negative');
    return Array.from({ length: count }, (_, index) => start + index);
}

/**
 * Generates an array by repeating a value a specified number of times.
 * @param element - The value to repeat.
 * @param count - The number of times to repeat the value.
 * @returns The array containing the repeated values.
 */
export function repeat<T>(element: T, count: number): T[] {
    if (count < 0) throw new RangeError('Count cannot be negative');
    return Array.from({ length: count }, () => element);
}

/**
 * Reverses the order of elements in an array.
 * @param array - The array to reverse.
 * @returns The array with elements in reversed order.
 */
export function reverse<T>(array: T[]): T[] {
    if (!Array.isArray(array)) throw new TypeError('Expected an array');
    return [...array].reverse();
}

/**
 * Shuffles the elements in an array using Fisher-Yates algorithm.
 * @param array - The array to shuffle.
 * @returns The shuffled array.
 */
export function shuffle<T>(array: T[]): T[] {
    if (!Array.isArray(array)) throw new TypeError('Expected an array');
    const shuffledArray = array.slice();
    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
}

/**
 * Returns the sum of the values in an array based on a key.
 * @param array - The array to sum.
 * @param keySelector - The key selection function.
 * @returns The sum of the values.
 */
export function sum<T>(array: T[], keySelector: (value: T) => number): number {
    if (!Array.isArray(array)) throw new TypeError('Expected an array');
    return array.reduce((acc, value) => acc + keySelector(value), 0);
}
