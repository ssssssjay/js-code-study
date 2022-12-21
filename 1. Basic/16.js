/**
 *
 * @param {string} str
 */

function solution(str) {
  let answer = '';
  for (const i of str) {
    if (!answer.includes(i)) answer += i;
  }
  return answer;
}

console.log(solution('aaaabhdjaaeksk'));

function solution2(s) {
  let answer = '';
  //console.log(s.indexOf("K"));
  for (let i = 0; i < s.length; i++) {
    //console.log(s[i], i, s.indexOf(s[i]));
    // 첫번째 인덱스를 반환합니다
    if (s.indexOf(s[i]) === i) answer += s[i];
  }
  return answer;
}
console.log(solution('ksekkset'));
