// console.log('a'.charCodeAt(0));
// console.log('z'.charCodeAt(0));
// console.log('A'.charCodeAt(0));
// console.log('Z'.charCodeAt(0));
// console.log(String.fromCharCode(65));

/**
 *
 * @param {string} str
 * @returns {string}
 */
function solution(str) {
  let answer = '';
  for (const i of str) {
    const code = i.charCodeAt(0);
    if (code >= 97) {
      answer += String.fromCharCode(code - 32);
    } else {
      answer += String.fromCharCode(code + 32);
    }
  }
  return answer;
}

console.log(solution('aBcDe'));
