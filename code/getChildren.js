// @ts-check
/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */
// VERSION #1

const flatArr = (arr) => {
  const stack = [...arr];
  const result = [];
  while (stack.length) {
    const next = stack.pop();
    if (Array.isArray(next)) {
      result.push(...next);
    } else {
      result.push(next);
    }
  }
  return result;
};

const getChildren = (users) => {
  const childrenMap = users.map(({ children }) => children);
  return flatArr(childrenMap); // or just use .flat() method;
};

// VERSION #2

console.log(getChildren(testUsers));

/* users.js
Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход список пользователей и
возвращает плоский список их детей. Дети каждого пользователя хранятся
в виде массива в ключе children.

import getChildren from './users.js';

const users = [
  {
    name: 'Tirion',
    children: [
      { name: 'Mira', birthday: '1983-03-23' },
    ],
  },
  { name: 'Bronn', children: [] },
  {
    name: 'Sam',
    children: [
      { name: 'Aria', birthday: '2012-11-03' },
      { name: 'Keit', birthday: '1933-05-14' },
    ],
  },
  {
    name: 'Rob',
    children: [
      { name: 'Tisha', birthday: '2012-11-03' },
    ],
  },
];

getChildren(users);
// [
//   { name: 'Mira', birthday: '1983-03-23' },
//   { name: 'Aria', birthday: '2012-11-03' },
//   { name: 'Keit', birthday: '1933-05-14' },
//   { name: 'Tisha', birthday: '2012-11-03' },
// ];
 */
