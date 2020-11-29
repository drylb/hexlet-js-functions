// @ts-check
/* eslint-disable no-console */

// BEGIN (write your solution here)

// VERSION 1

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i < Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const sayPrimeOrNot = (num) => {
  const text = isPrime(num) ? 'yes' : 'no';
  console.log(text);
};

export default sayPrimeOrNot;

// END

/* prime.js
Реализуйте и экспортируйте по умолчанию функцию, которая проверяет переданное число на простоту
и печатает на экран yes или no.

Примеры
sayPrimeOrNot(5); // 'yes'
sayPrimeOrNot(4); // 'no'
Подсказки
Цель этой задачи — научиться отделять чистый код от кода с побочными эффектами.

Для этого выделите процесс определения того, является ли число простым, в отдельную функцию,
возвращающую логическое значение. Это функция, с помощью которой мы отделяем чистый код от кода,
интерпретирующего логическое значение (как 'yes' или 'no')
и делающего побочный эффект (печать на экран). */
