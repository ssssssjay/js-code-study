/**
 * 한 개의 문자열을 입력받아 해당 문자열에 알파벳 대문자가 몇 개 있는지 알아내는 프로그램 을 작성하세요.
 * @param {string} str
 * @returns {number}
 */
function solution(str) {
  let answer = 0;
  for (let i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) answer++;
  }
  return answer;
}

// console.log('a'.charCodeAt(0));
// console.log('z'.charCodeAt(0));
// console.log('A'.charCodeAt(0));
// console.log('Z'.charCodeAt(0));
console.log(solution('KoreaTimeGood'));
