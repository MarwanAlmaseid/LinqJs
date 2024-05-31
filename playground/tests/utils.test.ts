// tests/utils.test.ts
import {
  where,
  select,
  orderBy,
  orderByDescending,
  first,
  firstOrDefault,
  last,
  lastOrDefault,
  single,
  singleOrDefault,
  count,
  any,
  skip,
  take,
  distinct,
  aggregate,
  all,
  concatenate,
  defaultIfEmpty,
  groupBy,
  join,
  max,
  min,
  ofType,
  range,
  repeat,
  reverse,
} from '../src/utils';

describe('Utility Functions', () => {

  it('where should filter elements based on the condition', () => {
    const array = [1, 2, 3, 4, 5];
    const condition = (value: number) => value > 3;
    const result = where(array, condition);
    expect(result).toEqual([4, 5]);
  });

  it('select should transform elements using a projection function', () => {
    const array = [1, 2, 3];
    const projection = (value: number) => value * 2;
    const result = select(array, projection);
    expect(result).toEqual([2, 4, 6]);
  });

  it('orderBy should sort elements in ascending order based on a key', () => {
    const array = [{ age: 30 }, { age: 20 }, { age: 40 }];
    const keySelector = (value: { age: number }) => value.age;
    const result = orderBy(array, keySelector);
    expect(result).toEqual([{ age: 20 }, { age: 30 }, { age: 40 }]);
  });

  it('orderByDescending should sort elements in descending order based on a key', () => {
    const array = [{ age: 30 }, { age: 20 }, { age: 40 }];
    const keySelector = (value: { age: number }) => value.age;
    const result = orderByDescending(array, keySelector);
    expect(result).toEqual([{ age: 40 }, { age: 30 }, { age: 20 }]);
  });

  it('first should return the first element that satisfies a condition', () => {
    const array = [1, 2, 3, 4];
    const condition = (value: number) => value > 2;
    const result = first(array, condition);
    expect(result).toBe(3);
  });

  it('firstOrDefault should return the first element that satisfies a condition or a default value', () => {
    const array = [1, 2, 3, 4];
    const condition = (value: number) => value > 4;
    const defaultValue = 10;
    const result = firstOrDefault(array, condition, defaultValue);
    expect(result).toBe(defaultValue);
  });

  it('last should return the last element that satisfies a condition', () => {
    const array = [1, 2, 3, 4];
    const condition = (value: number) => value > 2;
    const result = last(array, condition);
    expect(result).toBe(4);
  });

  it('lastOrDefault should return the last element that satisfies a condition or a default value', () => {
    const array = [1, 2, 3, 4];
    const condition = (value: number) => value > 4;
    const defaultValue = 10;
    const result = lastOrDefault(array, condition, defaultValue);
    expect(result).toBe(defaultValue);
  });

  it('single should return the single element that satisfies a condition', () => {
    const array = [1, 2, 3];
    const condition = (value: number) => value === 2;
    const result = single(array, condition);
    expect(result).toBe(2);
  });

  it('singleOrDefault should return the single element that satisfies a condition or a default value', () => {
    const array = [1, 2, 3];
    const condition = (value: number) => value === 4;
    const defaultValue = 10;
    const result = singleOrDefault(array, condition, defaultValue);
    expect(result).toBe(defaultValue);
  });

  it('count should return the number of elements that satisfy a condition', () => {
    const array = [1, 2, 3, 4];
    const condition = (value: number) => value > 2;
    const result = count(array, condition);
    expect(result).toBe(2);
  });

  it('any should check if any element satisfies a condition', () => {
    const array = [1, 2, 3, 4];
    const condition = (value: number) => value > 3;
    const result = any(array, condition);
    expect(result).toBe(true);
  });

  it('skip should skip a specified number of elements and return the remaining elements', () => {
    const array = [1, 2, 3, 4, 5];
    const result = skip(array, 2);
    expect(result).toEqual([3, 4, 5]);
  });

  it('take should return a specified number of contiguous elements from the start', () => {
    const array = [1, 2, 3, 4, 5];
    const result = take(array, 2);
    expect(result).toEqual([1, 2]);
  });

  it('distinct should return an array with distinct elements', () => {
    const array = [1, 2, 2, 3, 3, 3, 4];
    const result = distinct(array);
    expect(result).toEqual([1, 2, 3, 4]);
  });

  it('aggregate should apply an accumulator function and return the result', () => {
    const array = [1, 2, 3, 4];
    const accumulator = (acc: number, value: number) => acc + value;
    const initialValue = 0;
    const result = aggregate(array, accumulator, initialValue);
    expect(result).toBe(10);
  });

  it('all should check if all elements satisfy a condition', () => {
    const array = [1, 2, 3, 4];
    const condition = (value: number) => value > 0;
    const result = all(array, condition);
    expect(result).toBe(true);
  });

  it('concatenate should concatenate two arrays', () => {
    const array1 = [1, 2];
    const array2 = [3, 4];
    const result = concatenate(array1, array2);
    expect(result).toEqual([1, 2, 3, 4]);
  });

  it('defaultIfEmpty should return the original array or a default value if empty', () => {
    const array: number[] = [];
    const defaultValue = 10;
    const result = defaultIfEmpty(array, defaultValue);
    expect(result).toEqual([defaultValue]);
  });

  it('groupBy should group elements based on a key', () => {
    const array = [{ age: 30 }, { age: 20 }, { age: 30 }];
    const keySelector = (value: { age: number }) => value.age;
    const result = groupBy(array, keySelector);
    expect(result.get(30)).toEqual([{ age: 30 }, { age: 30 }]);
    expect(result.get(20)).toEqual([{ age: 20 }]);
  });

  it('join should join two arrays based on matching keys', () => {
    const array1 = [{ id: 1, name: 'John' }, { id: 2, name: 'Jane' }];
    const array2 = [{ id: 1, value: 100 }, { id: 2, value: 200 }];
    const result = join(
      array1,
      array2,
      item => item.id,
      item => item.id,
      (a, b) => ({ name: a.name, value: b.value })
    );
    expect(result).toEqual([{ name: 'John', value: 100 }, { name: 'Jane', value: 200 }]);
  });

  it('max should return the maximum value based on a key', () => {
    const array = [{ value: 1 }, { value: 2 }, { value: 3 }];
    const keySelector = (item: { value: number }) => item.value;
    const result = max(array, keySelector);
    expect(result).toBe(3);
  });

  it('min should return the minimum value based on a key', () => {
    const array = [{ value: 1 }, { value: 2 }, { value: 3 }];
    const keySelector = (item: { value: number }) => item.value;
    const result = min(array, keySelector);
    expect(result).toBe(1);
  });

  it('ofType should filter elements by a specified type', () => {
    class A {}
    class B extends A {}
    const array: A[] = [new A(), new B(), new A()];
    const result = ofType(array, B);
    expect(result).toHaveLength(1);
    expect(result[0]).toBeInstanceOf(B);
  });

  it('range should generate a sequence of numbers within a specified range', () => {
    const result = range(1, 3);
    expect(result).toEqual([1, 2, 3]);
  });

  it('repeat should generate a sequence with repeated values', () => {
    const result = repeat('a', 3);
    expect(result).toEqual(['a', 'a', 'a']);
  });

  it('reverse should return an array with elements in reverse order', () => {
    const array = [1, 2, 3, 4];
    const result = reverse(array);
    expect(result).toEqual([4, 3, 2, 1]);
  });
});
