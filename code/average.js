// @ts-check
/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */
import _ from 'lodash';
// BEGIN (write your solution here)

// VERSION 1

const average = (numbers) => {
  if (!numbers.length) {
    return null;
  }
  let result = 0;
  for (const num of numbers) {
    result += num;
  }
  return (result / numbers.length);
};

// # VERSION WITH LODASH

const average1 = (...numbers) => {
  if (!numbers.length) {
    return null;
  }
  const result = _.sum(numbers);
  return (result / numbers.length);
};

export { average, average1 };

// END

/* math.js
Реализуйте и экспортируйте по умолчанию функцию, которая возвращает среднее арифметическое
всех переданных аргументов. Если функции не передать ни одного аргумента,
то она должна вернуть null.

Примеры
average(0); // 0
average(0, 10); // 5
average(-3, 4, 2, 10); // 3.25
average(); // null
Подсказки
Используйте функцию sum из библиотеки lodash. */
