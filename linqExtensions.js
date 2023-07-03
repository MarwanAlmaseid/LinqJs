/**
 * Filters elements in an array based on a condition.
 * @param {Function} condition - The condition to filter elements.
 * @returns {Array} - The filtered array.
 */
Array.prototype.where = function (condition) {
    return this.filter(condition);
};

/**
 * Transforms elements in an array using a projection function.
 * @param {Function} projection - The projection function to apply to each element.
 * @returns {Array} - The array with transformed elements.
 */
Array.prototype.select = function (projection) {
    return this.map(projection);
};

/**
 * Sorts elements in an array in ascending order based on a key.
 * @param {Function} keySelector - The key selection function.
 * @returns {Array} - The sorted array.
 */
Array.prototype.orderBy = function (keySelector) {
    return this.slice().sort((a, b) => {
        const keyA = keySelector(a);
        const keyB = keySelector(b);
        if (keyA < keyB) return -1;
        if (keyA > keyB) return 1;
        return 0;
    });
};

/**
 * Sorts elements in an array in descending order based on a key.
 * @param {Function} keySelector - The key selection function.
 * @returns {Array} - The sorted array in descending order.
 */
Array.prototype.orderByDescending = function (keySelector) {
    return this.slice().sort((a, b) => {
        const keyA = keySelector(a);
        const keyB = keySelector(b);
        if (keyA > keyB) return -1;
        if (keyA < keyB) return 1;
        return 0;
    });
};

/**
 * Returns the first element in an array that satisfies a condition.
 * @param {Function} condition - The condition to check.
 * @returns {*} - The first element that satisfies the condition.
 */
Array.prototype.first = function (condition) {
    return condition ? this.find(condition) : this[0];
};

/**
 * Returns the first element in an array that satisfies a condition, or a default value if no element is found.
 * @param {Function} condition - The condition to check.
 * @param {*} defaultValue - The default value to return if no element is found.
 * @returns {*} - The first element that satisfies the condition, or the default value if no element is found.
 */
Array.prototype.firstOrDefault = function (condition, defaultValue) {
    return condition ? this.find(condition) || defaultValue : this[0] || defaultValue;
};

/**
 * Returns the last element in an array that satisfies a condition.
 * @param {Function} condition - The condition to check.
 * @returns {*} - The last element that satisfies the condition.
 */
Array.prototype.last = function (condition) {
    if (condition) {
        const reversed = this.slice().reverse();
        return reversed.find(condition);
    }
    return this[this.length - 1];
};

/**
 * Returns the last element in an array that satisfies a condition, or a default value if no element is found.
 * @param {Function} condition - The condition to check.
 * @param {*} defaultValue - The default value to return if no element is found.
 * @returns {*} - The last element that satisfies the condition, or the default value if no element is found.
 */
Array.prototype.lastOrDefault = function (condition, defaultValue) {
    if (condition) {
        const reversed = this.slice().reverse();
        return reversed.find(condition) || defaultValue;
    }
    return this[this.length - 1] || defaultValue;
};

/**
 * Returns the single element in an array that satisfies a condition.
 * @param {Function} condition - The condition to check.
 * @returns {*} - The single element that satisfies the condition.
 */
Array.prototype.single = function (condition) {
    return condition ? this.find(condition) : this[0];
};

/**
 * Returns the single element in an array that satisfies a condition, or a default value if no element is found or multiple elements are found.
 * @param {Function} condition - The condition to check.
 * @param {*} defaultValue - The default value to return if no element is found or multiple elements are found.
 * @returns {*} - The single element that satisfies the condition, or the default value if no element is found or multiple elements are found.
 */
Array.prototype.singleOrDefault = function (condition, defaultValue) {
    return condition ? this.find(condition) || defaultValue : this[0] || defaultValue;
};

/**
 * Counts the number of elements in an array that satisfy a condition.
 * @param {Function} condition - The condition to check.
 * @returns {number} - The number of elements that satisfy the condition.
 */
Array.prototype.count = function (condition) {
    return condition ? this.filter(condition).length : this.length;
};

/**
 * Checks if any element in an array satisfies a condition.
 * @param {Function} condition - The condition to check.
 * @returns {boolean} - True if any element satisfies the condition, otherwise false.
 */
Array.prototype.any = function (condition) {
    return condition ? this.some(condition) : this.length > 0;
};

/**
 * Skips a specified number of elements in an array and returns the remaining elements.
 * @param {number} count - The number of elements to skip.
 * @returns {Array} - The array with the remaining elements.
 */
Array.prototype.skip = function (count) {
    return this.slice(count);
};

/**
 * Returns a specified number of contiguous elements from the start of an array.
 * @param {number} count - The number of elements to take.
 * @returns {Array} - The array with the taken elements.
 */
Array.prototype.take = function (count) {
    return this.slice(0, count);
};

/**
 * Returns a new array with distinct elements from the original array.
 * @returns {Array} - The array with distinct elements.
 */
Array.prototype.distinct = function () {
    return [...new Set(this)];
};

/**
 * Applies an accumulator function over an array and returns the accumulated result.
 * @param {Function} accumulator - The accumulator function.
 * @param {*} initialValue - The initial value for the accumulator.
 * @returns {*} - The accumulated result.
 */
Array.prototype.aggregate = function (accumulator, initialValue) {
    return this.reduce(accumulator, initialValue);
};

/**
 * Checks if all elements in an array satisfy a condition.
 * @param {Function} condition - The condition to check.
 * @returns {boolean} - True if all elements satisfy the condition, otherwise false.
 */
Array.prototype.all = function (condition) {
    return this.every(condition);
};

/**
 * Concatenates two arrays.
 * @param {Array} collection - The array to concatenate.
 * @returns {Array} - The concatenated array.
 */
Array.prototype.concat = function (collection) {
    return this.concat(collection);
};

/**
 * Returns an array with a default value if the original array is empty.
 * @param {*} defaultValue - The default value to return if the original array is empty.
 * @returns {Array} - The original array or an array with the default value.
 */
Array.prototype.defaultIfEmpty = function (defaultValue) {
    return this.length > 0 ? this : [defaultValue];
};

/**
 * Groups elements in an array based on a key.
 * @param {Function} keySelector - The key selection function.
 * @returns {Map} - The map of groups.
 */
Array.prototype.groupBy = function (keySelector) {
    const groups = new Map();
    this.forEach(item => {
        const key = keySelector(item);
        if (!groups.has(key)) {
            groups.set(key, []);
        }
        groups.get(key).push(item);
    });
    return groups;
};

/**
 * Joins two arrays based on a common key and projects the result.
 * @param {Array} inner - The inner array to join.
 * @param {Function} outerKeySelector - The key selection function for the outer array.
 * @param {Function} innerKeySelector - The key selection function for the inner array.
 * @param {Function} resultSelector - The result projection function.
 * @returns {Array} - The joined and projected array.
 */
Array.prototype.join = function (inner, outerKeySelector, innerKeySelector, resultSelector) {
    return this.flatMap(outerElement =>
        inner
            .filter(innerElement => outerKeySelector(outerElement) === innerKeySelector(innerElement))
            .map(innerElement => resultSelector(outerElement, innerElement))
    );
};

/**
 * Returns the maximum value in an array based on a key.
 * @param {Function} keySelector - The key selection function.
 * @returns {*} - The maximum value.
 */
Array.prototype.max = function (keySelector) {
    return Math.max(...this.map(keySelector));
};

/**
 * Returns the minimum value in an array based on a key.
 * @param {Function} keySelector - The key selection function.
 * @returns {*} - The minimum value.
 */
Array.prototype.min = function (keySelector) {
    return Math.min(...this.map(keySelector));
};

/**
 * Filters elements in an array based on their type.
 * @param {Function} type - The type to filter.
 * @returns {Array} - The filtered array.
 */
Array.prototype.ofType = function (type) {
    return this.filter(item => item instanceof type);
};

/**
 * Generates a sequence of numbers within a specified range.
 * @param {number} start - The starting number of the sequence.
 * @param {number} count - The number of elements in the sequence.
 * @returns {Array} - The generated sequence.
 */
Array.range = function (start, count) {
    return Array.from({ length: count }, (_, index) => start + index);
};

/**
 * Generates a sequence that contains a repeated value.
 * @param {*} element - The value to repeat.
 * @param {number} count - The number of times to repeat the value.
 * @returns {Array} - The generated sequence.
 */
Array.repeat = function (element, count) {
    return Array.from({ length: count }, () => element);
};

/**
 * Reverses the order of elements in an array.
 * @returns {Array} - The reversed array.
 */
Array.prototype.reverse = function () {
    return [...this].reverse();
};