# JavaScript LINQ Extension Methods

This repository provides a collection of LINQ-style extension methods implemented in JavaScript. These methods allow you to perform common LINQ operations on arrays.

## Usage

To use the LINQ extension methods, you can include the provided `linq.js` file in your JavaScript project. The file contains the implementation of the extension methods as arrow functions.

You can import the extension methods as follows:

```javascript
// Import the LINQ extension methods
import './linq.js';
````

After importing the extension methods, you can use them on arrays as if they were built-in methods.

Extension Methods
The following LINQ extension methods are available:

# where(condition) - Filters elements in an array based on a condition.
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

Examples

```javascript
// Original array
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Example usage of each LINQ extension method
const filteredNumbers = numbers.where(num => num % 2 === 0);
console.log(filteredNumbers); // Output: [2, 4, 6, 8, 10]

const squaredNumbers = numbers.select(num => num * num);
console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

const sortedNumbers = numbers.orderBy(num => num);
console.log(sortedNumbers); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const descendingNumbers = numbers.orderByDescending(num => num);
console.log(descendingNumbers); // Output: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

const firstNumber = numbers.first();
console.log(firstNumber); // Output: 1

const lastNumber = numbers.last();
console.log(lastNumber); // Output: 10

const count = numbers.count();
console.log(count); // Output: 10

const hasEvenNumbers = numbers.any(num => num % 2 === 0);
console.log(hasEvenNumbers); // Output: true

const skippedNumbers = numbers.skip(5);
console.log(skippedNumbers); // Output: [6, 7, 8, 9, 10]

const takenNumbers = numbers.take(3);
console.log(takenNumbers); // Output: [1, 2, 3]

const distinctNumbers = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4].distinct();
console.log(distinctNumbers); // Output: [1, 2, 3, 4]

const sum = numbers.aggregate((accumulator, num) => accumulator + num, 0);
console.log(sum); // Output: 55

const allEven = numbers.all(num => num % 2 === 0);
console.log(allEven); // Output: false

const concatenatedArray = numbers.concat([11, 12, 13]);
console.log(concatenatedArray); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

const emptyArray = [].defaultIfEmpty('No elements found');
console.log(emptyArray); // Output: ['No elements found']

const groupedNumbers = numbers.groupBy(num => num % 2 === 0 ? 'Even' : 'Odd');
console.log(groupedNumbers);
// Output: Map {
//   'Even' => [2, 4, 6, 8, 10],
//   'Odd' => [1, 3, 5, 7, 9]
// }

const users = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Jane' },
  { id: 3, name: 'Alice' }
];

const userNames = users.select(user => user.name);
console.log(userNames); // Output: ['John', 'Jane', 'Alice']

const maxNumber = numbers.max(num => num);
console.log(maxNumber); // Output: 10

const minNumber = numbers.min(num => num);
console.log(minNumber); // Output: 1

const filteredUsers = users.ofType(Object);
console.log(filteredUsers); // Output: [{ id: 1, name: 'John' }, { id: 2, name: 'Jane' }, { id: 3, name: 'Alice' }]

const reversedArray = numbers.reverse();
console.log(reversedArray); // Output: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
````

Contributing
Contributions are welcome! If you have any improvements or additional LINQ extension methods that you would like to add, feel free to open an issue or submit a pull request.

License
This project is licensed under the MIT License. See the LICENSE file for more details.

