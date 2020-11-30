// @ts-check
import _ from 'lodash';
// BEGIN (write your solution here)

// VERSION #1

const takeOldest = (users, n) => {
  const result = [];
  const oldest = users.sort((a, b) => (Date.parse(a.birthday) > Date.parse(b.birthday) ? 1 : -1));
  if (n === undefined) {
    result.push(oldest[0]);
  }
  for (let i = 0; i < n; i += 1) {
    result.push(oldest[0 + i]);
  }
  return result;
};

// VERSION #2

const takeOldest1 = (users, n = 1) => {
  const oldest = users.sort((a, b) => (Date.parse(a.birthday) > Date.parse(b.birthday) ? 1 : -1));
  return oldest.slice(0, n);
};

// VERSION #3 WITH LODASH

const takeOldest2 = (users, n = 1) => {
  const oldest = _.sortBy((users), ({ birthday }) => Date.parse(birthday));
  return oldest.slice(0, n);
};
// END

export { takeOldest, takeOldest1, takeOldest2 };

/* users.js
Реализуйте функцию takeOldest(), которая принимает на вход список пользователей и возвращает
самых взрослых.Количество возвращаемых пользователей задается вторым параметром,
который по умолчанию равен единице. Экспортируйте данную функцию по умолчанию.

Пример использования
const users = [
    { name: 'Tirion', birthday: 'Nov 19, 1988' },
    { name: 'Sam', birthday: 'Nov 22, 1999' },
    { name: 'Rob', birthday: 'Jan 11, 1975' },
    { name: 'Sansa', birthday: 'Mar 20, 2001' },
    { name: 'Tisha', birthday: 'Feb 27, 1992' },
    { name: 'Chris', birthday: 'Dec 25, 1995' },
];

takeOldest(users);
// [
//   { name: 'Rob', birthday: 'Jan 11, 1975' },
// ];
Другие примеры смотрите в модуле с тестами. */
