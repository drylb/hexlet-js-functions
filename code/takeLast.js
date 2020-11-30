// @ts-check

// VERSION #1
const run = (text) => {
  // BEGIN (write your solution here)

  const takeLast = (str, num) => (str.length < 3 ? null : str.split('').reverse().slice(0, num).join(''));
  // END

  return takeLast(text, 4);
};

export default run;

// VERSION #2

const run1 = (text) => {
  // BEGIN (write your solution here)
  const takeLast = (str, num) => {
    if (str.length < 3) {
      return null;
    }
    const result = [];
    for (let i = str.length - 1; i > 0; i -= 1) {
      result.push(str[i]);
    }
    return result.slice(0, num).join('');
  };
  // END

  return takeLast(text, 4);
};

export { run1 };
/* strings.js
Реализуйте внутреннюю функцию takeLast(), которая возвращает последние n символов строки в
обратном порядке. Количество символов передаётся в takeLast() вторым параметром.
Если передаётся пустая строка или строка меньше необходимой длины, функция должна вернуть null.

Примеры
run('');       // null
run('cb');     // null
run('power');  // rewo
run('hexlet'); // telx */
