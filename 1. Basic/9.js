/**
 *
 * @param {string} str
 * @returns
 */
function solution(str) {
  return str.replace(/A/g, '#');
}
console.log(solution('BANANANA'));

function solution2(s) {
  let answer = '';
  for (let x of s) {
    if (x == 'A') answer += '#';
    else answer += x;
  }
  return answer;
}

let str = 'BANANA';
