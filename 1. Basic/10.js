function solution(str, target) {
  let answer = 0;
  for (const i of str) {
    if (i === target) answer++;
  }
  return answer;
}

function solution2(str, target) {
  const temp = str.split(target);
  return temp.length - 1;
}

console.log(solution('abcabcabcghgh', 'a'));
console.log(solution2('abcabcabcghgh', 'a'));
