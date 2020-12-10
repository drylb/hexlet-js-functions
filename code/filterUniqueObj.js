// @ts-check

// BEGIN

const uniqPoints = (arr) => {
  const uniq = arr.reduce((acc, point) => {
    const checkIfExists = acc.some((val) => val.x === point.x && val.y === point.y)
      ? acc : [...acc, point];
    return checkIfExists;
  }, []);
  return uniq;
};

export default uniqPoints;

// END

/* Filter array with unique points to the new array:

const arr = [
  { x: 5, y: 10 },
  { x: 1, y: 15 },
  { x: 7, y: -5 },
  { x: 16, y: 33 },
  { x: 1, y: 15 },
  { x: 7, y: -5 },
  { x: 4, y: 12 },
];

uniqPoints(arr);
[
  { x: 5, y: 10 },
  { x: 1, y: 15 },
  { x: 7, y: -5 },
  { x: 16, y: 33 },
  { x: 4, y: 12 }
] */
