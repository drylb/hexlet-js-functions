const getGirlsFriends = (users) => {
  const freindsMap = users.map(({ friends }) => friends).flat();
  const girlsFriend = freindsMap.filter(({ gender }) => gender === 'female');
  return girlsFriend;
};

export default getGirlsFriends;

/* users.js
Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход список пользователей и
возвращает плоский список подруг всех пользователей (без сохранения ключей).
Друзья каждого пользователя хранятся в виде массива в ключе friends. Пол доступен по
ключу gender и может принимать значения male или female.

import getGirlFriends from './users.js';

const users = [
  {
    name: 'Tirion',
    friends: [
      { name: 'Mira', gender: 'female' },
      { name: 'Ramsey', gender: 'male' },
    ],
  },
  { name: 'Bronn', friends: [] },
  {
    name: 'Sam',
    friends: [
      { name: 'Aria', gender: 'female' },
      { name: 'Keit', gender: 'female' },
    ],
  },
  {
    name: 'Rob',
    friends: [
      { name: 'Taywin', gender: 'male' },
    ],
  },
];

getGirlFriends(users);
// [
//   { name: 'Mira', gender: 'female' },
//   { name: 'Aria', gender: 'female' },
//   { name: 'Keit', gender: 'female' },
// ]; */
