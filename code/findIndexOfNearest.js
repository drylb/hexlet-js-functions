// @ts-check

// BEGIN (write your solution here)

// VERSION #1

const findIndexOfNearest = (arr, val) => {
  const diffs = arr.map((num) => Math.abs(num - val));
  const result = diffs.reduce((index, curr, currentIndex) => {
    if (curr < diffs[index]) {
      return currentIndex;
    }
    return index;
  }, 0);
  return result;
};

// VERSION #2

const findIndexOfNearest1 = (arr, val) => {
  if (arr.length === 0) {
    return null;
  }
  const diffs = arr.map((num) => Math.abs(num - val));
  const result = diffs.indexOf(Math.min(...diffs));
  return result;
};

// END

export { findIndexOfNearest, findIndexOfNearest1 };

/* findIndexOfNearest.js
Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход массив чисел и
искомое число.Задача функции — найти в массиве ближайшее число к
искомому и вернуть его индекс в массиве.

Если в массиве содержится несколько чисел, одновременно являющихся ближайшими к
искомому числу, то возвращается наименьший из индексов ближайших чисел.

Примеры
findIndexOfNearest([], 2);              // null
findIndexOfNearest([15, 10, 3, 4], 0);  // 2
findIndexOfNearest([7, 5, 3, 2], 4);    // 1
findIndexOfNearest([7, 5, 4, 4, 3], 4); // 2 */
