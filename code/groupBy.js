// @ts-check
/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */

const groupBy1 = (students, key) => {
  const result = {};
  for (const item of students) {
    const groupName = item[key];
    if (!result[groupName]) {
      result[groupName] = [];
    }
    result[groupName].push(item);
  }
  return result;
};

const groupBy2 = (students, key) => students.reduce((acc, obj) => {
  const groupName = obj[key];
  const group = acc[groupName] ?? [];
  return { ...acc, [groupName]: group.concat(obj) };
}, {});

const groupBy3 = (students, key) => students.reduce((acc, curr) => {
  const value = curr[key];
  acc[value] = [...acc[value] ?? [], curr];
  console.log(acc);
  return acc;
}, {});

export { groupBy1, groupBy2, groupBy3 };

/* groupBy.js
Реализуйте и экспортируйте по умолчанию функцию для группировки объектов по заданному свойству.
Функция принимает аргументами массив объектов и название свойству для группировки.
Она должна возвращать объект, где ключ - это значение по заданному свойству,
а значение - массивс данными, подходящими для группы.

import groupBy from './groupBy.js';

const students = [
  { name: 'Tirion', class: 'B', mark: 3 },
  { name: 'Keit', class: 'A', mark: 3 },
  { name: 'Ramsey', class: 'A', mark: 4 },
];

groupBy([], ''); // {}
groupBy(students, 'mark');
// {
//   3: [
//     { name: "Tirion", class: "B", mark: 3 },
//     { name: "Keit", class: "A", mark: 3 },
//   ],
//   4: [
//     { name: "Ramsey", class: "A", mark: 4 },
//   ],
// } */
