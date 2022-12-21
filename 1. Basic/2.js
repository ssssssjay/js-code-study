/**
 *
 * 길이가 서로 다른 A, B, C 세 개의 막대 길이가 주어지면 이 세 막대로 삼각형을 만들 수 있 으면 “YES"를 출력하고, 만들 수 없으면 ”NO"를 출력한다.
 */
function solution(a, b, c) {
  Math.max(a, b, c); // how about this?
  const arr = [a, b, c];
  arr.sort((a, b) => a - b);
  console.log(arr);
  if (arr[2] < arr[1] + arr[0]) return 'YES';
  else return 'NO';
}

function solution2(a, b, c) {
  let answer = 'YES',
    max;
  let tot = a + b + c;
  if (a > b) max = a;
  else max = b;
  if (c > max) max = c;
  if (tot - max <= max) answer = 'NO';
  return answer;
}

console.log(solution(6, 7, 11));
console.log(solution(13, 33, 17));
