'use strict';
/*The input is object, which `keys` are student's names and `values` are `array` of their scores. Find the student with the best average score.
 */

const average = arr => {
  let res = 0;
  return (res = arr.reduce((acc, el) => acc + el) / arr.length);
};

function getBestStudent(obj) {
  for (let key in obj) {
    obj[key] = average(obj[key]);
  }
  let arrOfObjValues = Object.values(obj);
  let res = Math.max(...arrOfObjValues);
  for (let key in obj) {
    if (obj[key] === res) {
      return `${key}`;
    }
  }
}

console.log(
  getBestStudent({
    John: [100, 90, 80],
    Bob: [100, 70, 80],
  })
);
