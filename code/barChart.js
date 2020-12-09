// @ts-check
import _ from 'lodash';
// BEGIN (write your solution here)
const barChart = (numbers) => {
  const bottom = Math.min(0, ...numbers);
  const top = Math.max(0, ...numbers);

  const lines = numbers.map((number) => {
    const bar = number > 0 ? '*'.repeat(number) : '#'.repeat(Math.abs(number));
    const bottomSpace = ' '.repeat(Math.min(0, number) - bottom);
    const topSpace = ' '.repeat(top - Math.max(0, number));

    return [...topSpace, ...bar, ...bottomSpace];
  });

  const chart = _.zip(...lines)
    .map((line) => line.join(''))
    .join('\n');

  return chart;
};

const barChart1 = (numbers) => {
  const max = Math.max(...numbers);
  const min = Math.abs(Math.min(...numbers));
  const height = max + min;

  const lines = [];

  for (let i = height; i > 0; i -= 1) {
    const row = numbers.map((number) => {
      if (i > min) {
        return number >= i - min ? '*' : ' ';
      }
      return number < i - min ? '#' : ' ';
    });
    lines.push(row.join(''));
  }
  const emptyLine = ' '.repeat(numbers.length);
  const chart = lines.filter((line) => line !== emptyLine).join('\n');

  return chart;
};

export { barChart, barChart1 };
// END

/* Реализуйте и экспортируйте по умолчанию функцию, которая выводит на экран столбчатую диаграмму.
Функция принимает в качестве параметра последовательность чисел, длина которой равна количеству
столбцов диаграммы. Размер диаграммы по вертикали должен определяться входными данными.

Примеры
import barChart from '../solution.js';

barChart([5, 10, -5, -3, 7]);
// =>  *
//     *
//     *
//     *  *
//     *  *
//    **  *
//    **  *
//    **  *
//    **  *
//    **  *
//      ##
//      ##
//      ##
//      #
//      #
barChart([5, 10, -5, -3, 7]);
const exemple = [
10  [  , *,  ,  ,  ],
 9  [  , *,  ,  ,  ],
 8  [  , *,  ,  ,  ],
 7  [  , *,  ,  , *],
 6  [  , *,  ,  , *],
 5  [ *, *,  ,  , *],
 4  [ *, *,  ,  , *],
 3  [ *, *,  ,  , *],
 2  [ *, *,  ,  , *],
 1  [ *, *,  ,  , *],
-1  [  ,  , #, #,  ],
-2  [  ,  , #, #,  ],
-3  [  ,  , #, #,  ],
-4  [  ,  , #,  ,  ],
-5  [  ,  , #,  ,  ],
]
barChart([5, -2, 10, 6, 1, 2, 6, 4, 8, 1, -1, 7, 3, -5, 5]);
// =>   *
//      *
//      *     *
//      *     *  *
//      **  * *  *
//    * **  * *  *  *
//    * **  ***  *  *
//    * **  ***  ** *
//    * ** ****  ** *
//    * ******** ** *
//     #        #  #
//     #           #
//                 #
//                 #
//                 #  */
