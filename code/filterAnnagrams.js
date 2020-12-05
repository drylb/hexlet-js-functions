// @ts-check

// BEGIN (write your solution here)

// VERSION #1

const filterAnagrams = (word, anagrams) => {
  const pattern = word.split('').sort().join();
  const result = anagrams.filter((w) => {
    const sortedWord = w.split('').sort().join();
    return sortedWord === pattern;
  });
  return result;
};

// VERSION #2

const filterAnagrams1 = (word, anagrams) => {
  const normalze = (str) => str.split('').sort().join();
  const pattern = normalze(word);

  return anagrams.filter((item) => normalze(item) === pattern);
};

export default { filterAnagrams, filterAnagrams1 };

// END

/* Анаграммы — это слова, которые состоят из одинаковых букв. Например:

спаниель — апельсин
карат — карта — катар
топор — ропот — отпор
filterAnagrams.js
Реализуйте и экспортируйте по умолчанию функцию, которая находит все анаграммы слова.
Функция принимает исходное слово и список для проверки (массив), а возвращает массив всех анаграмм.
Если в списке слов отсутствуют анаграммы, то возвращается пустой массив.

Примеры
filterAnagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']);
// ['aabb', 'bbaa']

filterAnagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']);
// ['carer', 'racer']

filterAnagrams('laser', ['lazing', 'lazy',  'lacer']);
// [] */
