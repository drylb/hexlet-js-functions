const sameParity = (numbers) => {
  const [firstNum] = numbers;
  const evenOrOdd = Math.abs(firstNum % 2);
  const result = numbers.filter((num) => Math.abs(num) % 2 === evenOrOdd);
  return result;
};

export default sameParity;

/* Реализуйте и экспортируйте по умолчанию функцию,
которая принимает на вход массив и возвращает
новый,состоящий из элементов, у которых такая же чётность,
как и у первого элемента входного массива.

Примеры
sameParity([-1, 0, 1, -3, 10, -2]); // [-1, 1, -3]
sameParity([2, 0, 1, -3, 10, -2]); // [2, 0, 10, -2]
sameParity([]); // [] */
