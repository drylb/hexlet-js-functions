// @ts-check

// BEGIN (write your solution here)
const merge = (...objects) => {
  const result = objects.reduce((acc, curr) => {
    Object.keys(curr).forEach((key) => {
      const value = curr[key];
      if (!Object.prototype.hasOwnProperty.call(acc, key)) {
        acc[key] = [];
      }
      if (!acc[key].includes(value)) {
        acc[key].push(value);
      }
    });
    return acc;
  }, {});
  return result;
};

export default merge;

// END

/* dictionary.js
Реализуйте и экспортируйте по умолчанию функцию, которая объединяет несколько словарей
(объектов) в один общий словарь. Функция принимает любое количество аргументов и
возвращает результат в виде объекта, в котором каждый ключ содержит массив уникальных значений.
Элементы в массиве располагаются в том порядке, в котором они появляются во входящих словарях.

Примеры
merge({}, {}, {});
// {}

merge({ a: 1, b: 2 }, { a: 3 });
// { a: [1, 3], b: [2] }

merge(
    { a: 1, b: 2, c: 3 },
    {},
    { a: 3, b: 2, d: 5 },
    { a: 6 },
    { b: 4, c: 3, d: 2 },
    { e: 9 },
  );
// { a: [1, 3, 6], b: [2, 4], c: [3], d: [5, 2], e: [9] }
 */
