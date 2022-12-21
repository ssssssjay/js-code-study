/**
 * N개의 문자열이 입력되면 중복된 문자열은 제거하고 출력하는 프로그램을 작성하세요. 출력하는 문자열은 원래의 입력순서를 유지합니다.
 * @param {string[]} arr
 */
function solution(arr) {
  const result = [];
  for (const i of arr) {
    if (!result.includes(i)) result.push(i);
  }
  return result;
}

console.log(solution(['a', 'a', 'b']));

function solution2(s) {
  let answer;
  //console.log(s.indexOf("time"));
  answer = s.filter(function (v, i) {
    return s.indexOf(v) === i;
  });
  return answer;
}
