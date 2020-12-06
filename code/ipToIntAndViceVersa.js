// @ts-check
import _ from 'lodash';
// BEGIN
const numToStr = (num) => num.toString(2);
const strToNum = (str) => parseInt(str, 2);

const ipToInt = (ip) => {
  const toBinary = ip.split('.').map((item) => numToStr(Number(item)))
    .map((item) => item.padStart(8, 0))
    .join('');
  return strToNum(toBinary);
};

// VERSION #1 WITH LODASH

const intToIp = (int) => {
  const toInt = numToStr(int).padStart(32, 0);
  return _.chunk(toInt, 8)
    .map((item) => strToNum(item.join('')))
    .join('.');
};

// VERSION #2 WITHOUT LODASH

const intToIp2 = (int) => {
  const toInt = numToStr(int).padStart(32, 0);
  return toInt
    .split('')
    .reduce((acc, val, idx, arr) => {
      if (idx % 8 === 0) {
        acc.push(arr.slice(idx, idx + 8));
      }
      return acc;
    }, [])
    .map((quarter) => strToNum(quarter.join('')))
    .join('.');
};

export { intToIp, intToIp2, ipToInt };

// END

/* solution.js
Реализуйте и экспортируйте функции ipToInt() и intToIp(), которые преобразовывают представление
IP-адреса из десятичного формата с точками в 32-битное число в десятичной форме и обратно.

Функция ipToInt() принимает на вход строку и должна возвращать число.
А функция intToIp() наоборот: принимает на вход число, а возвращает строку.

Примеры
ipToInt('128.32.10.1'); // 2149583361
ipToInt('0.0.0.0'); // 0
ipToInt('255.255.255.255'); // 4294967295

intToIp(2149583361); // '128.32.10.1'
intToIp(0); // '0.0.0.0'
intToIp(4294967295); // '255.255.255.255'
Подсказки
IPv4
Используйте функцию parseInt() для перевода строки в необходимую систему счисления
Изучите возможности метода toString() для числа, рассмотрите примеры
Дополнительно можно использовать метод padStart() */
