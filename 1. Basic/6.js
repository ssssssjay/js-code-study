/**
 *
 * @param {number[]} arr
 */

function solution(arr) {
  const odd = arr.filter((el) => el % 2 === 1);
  const sum = odd.reduce((acc, cur) => acc + cur, 0);
  const min = Math.min(...odd);
  return [sum, min];
}

console.log(solution([12, 77, 38, 41, 53, 92, 85]));
// let answer = [];
// let sum = 0,
//   min = 1000;
// for (let x of arr) {
//   if (x % 2 === 1) {
//     sum += x;
//     if (x < min) min = x;
//   }
// }
// answer.push(sum);
// answer.push(min);
// return answer;
