// @ts-check
// BEGIN (write your solution here)

// VERSION #1

const enlargeArray = (arr) => {
  const duplicateValues = (items) => items.map((item) => [item, item]).flat();
  const vertical = duplicateValues(arr);
  const horizontallyStretched = vertical.map(duplicateValues);
  return horizontallyStretched;
};

// VERSION #2

const double = (arr) => arr.reduce((acc, curr) => [...acc, curr, curr], []);
const enlargeArray1 = (matrix) => double(matrix.map(double));

export { enlargeArray, enlargeArray1 };

// END
/*
arrays.js
Реализуйте и экспортируйте по умолчанию функцию, которая принимает изображение в
виде двумерного массиваи возвращает массив, увеличенный в два раза.

Примеры
const arr = [
  ['*', '*', '*', '*'],
  ['*', ' ', ' ', '*'],
  ['*', ' ', ' ', '*'],
  ['*', '*', '*', '*'],
];
// ****
// *  *
// *  *
// ****

enlargeArrayImage(arr);
// ********
// ********
// **    **
// **    **
// **    **
// **    **
// ********
// ******** */
