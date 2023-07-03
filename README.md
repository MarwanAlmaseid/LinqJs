# JavaScript LINQ Extension Methods

This repository provides a collection of LINQ-style extension methods implemented in JavaScript. These methods allow you to perform common LINQ operations on arrays.

## Usage

To use the LINQ extension methods, you can include the provided `linq.js` file in your JavaScript project. The file contains the implementation of the extension methods as arrow functions.

You can import the extension methods as follows:

```javascript
// Import the LINQ extension methods
import './linq.js';
After importing the extension methods, you can use them on arrays as if they were built-in methods.

Extension Methods
The following LINQ extension methods are available:

where(condition) - Filters elements in an array based on a condition.
select(projection) - Transforms elements in an array using a projection function.
orderBy(keySelector) - Sorts elements in an array in ascending order based on a key.
orderByDescending(keySelector) - Sorts elements in an array in descending order based on a key.
first(condition) - Returns the first element in an array that satisfies a condition.
firstOrDefault(condition, defaultValue) - Returns the first element in an array that satisfies a condition, or a default value if no element is found.
last(condition) - Returns the last element in an array that satisfies a condition.
lastOrDefault(condition, defaultValue) - Returns the last element in an array that satisfies a condition, or a default value if no element is found.
single(condition) - Returns the single element in an array that satisfies a condition.
singleOrDefault(condition, defaultValue) - Returns the single element in an array that satisfies a condition, or a default value if no element is found or multiple elements are found.
count(condition) - Counts the number of elements in an array that satisfy a condition.
any(condition) - Checks if any element in an array satisfies a condition.
skip(count) - Skips a specified number of elements in an array and returns the remaining elements.
take(count) - Returns a specified number of contiguous elements from the start of an array.
distinct() - Returns a new array with distinct elements from the original array.
aggregate(accumulator, initialValue) - Applies an accumulator function over an array and returns the accumulated result.
all(condition) - Checks if all elements in an array satisfy a condition.
concat(collection) - Concatenates two arrays.
defaultIfEmpty(defaultValue) - Returns an array with a default value if the original array is empty.
groupBy(keySelector) - Groups elements in an array based on a key.
join(inner, outerKeySelector, innerKeySelector, resultSelector) - Joins two arrays based on a common key and projects the result.
max(keySelector) - Returns the maximum value in an array based on a key.
min(keySelector) - Returns the minimum value in an array based on a key.
ofType(type) - Filters elements in an array based on their type.
reverse() - Reverses the order of elements in an array.
Contributing
Contributions are welcome! If you have any improvements or additional LINQ extension methods that you would like to add, feel free to open an issue or submit a pull request.

License
This project is licensed under the MIT License. See the LICENSE file for more details.

