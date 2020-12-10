// @ts-check

import chunk from 'lodash/chunk';

// BEGIN (write your solution here)
const toDecimal = (num) => Number(parseInt(num, 16));
const toHex = (num) => num.toString(16);

// VERSION #1

const hexToRgb = (hexColor) => {
  const withOutHash = hexColor.slice(1);
  const chunked = chunk(withOutHash, 2);
  const toRgb = chunked.reduce((acc, curr, idx) => {
    const keys = Object.keys(acc);
    acc[keys[idx]] = toDecimal(curr.join(''));
    return acc;
  }, {
    r: null,
    g: null,
    b: null,
  });
  return toRgb;
};

// VERSION #1

const rgbToHex = (r, g, b) => {
  const args = [r, g, b];
  const hex = args.reduce((acc, curr) => {
    const temp = toHex(curr).length === 1 ? `0${toHex(curr)}` : toHex(curr);
    return [...acc, temp];
  }, []);
  return `#${hex.join('')}`;
};

// VERSION #2

const rgbToHex1 = (...channels) => {
  const hex = channels
    .map((chanel) => toHex(chanel).padStart(2, '0')).join('');
  return `#${hex}`;
};

// VERSION #2

const hexToRgb1 = (hex) => {
  const [r, g, b] = chunk(hex.slice(1), 2)
    .map((chanel) => toDecimal(chanel.join('')));
  return { r, g, b };
};

export {
  hexToRgb,
  rgbToHex,
  hexToRgb1,
  rgbToHex1,
};

// END

/* Для задания цветов в HTML и CSS используются числа в шестнадцатеричной системе счисления.
Чтобы не возникало путаницы в определении системы счисления, перед шестнадцатеричным числом
ставят символ решетки #, например, #135278. Обозначение цвета (rrggbb) разбивается на
три составляющие, где первые два символа обозначают красную компоненту цвета,
два средних — зеленую, а два последних — синюю. Таким образом каждый из трех цветов — красный,
зеленый и синий — может принимать значения от 00 до FF в шестнадцатеричной системе исчисления.

solution.js
При работе с цветами часто нужно получить отдельные значения красного,
зеленого и синего (RGB) компонентов цвета в десятичной системе исчисления и наоборот.
Реализуйте и экспортируйте функции rgbToHex() и hexToRgb(), которые возвращают
соответствующие представление цвета.

Примеры:
hexToRgb('#24ab00'); // { r: 36, g: 171, b: 0 }

rgbToHex(36, 171, 0); // '#24ab00'
 */
