function solution(n, arr) {
  let answer = 0;
  for (const i of arr) {
    const temp = i % 10;
    if (temp === n) answer++;
  }
  return answer;
}
const arr = [13, 23, 33, 45, 44, 46, 67];
console.log(solution(3, arr));

function solution2(day, arr) {
  let answer = 0;
  for (let x of arr) {
    if (x % 10 == day) answer++;
  }

  return answer;
}

arr2 = [25, 23, 11, 47, 53, 17, 33];
console.log(solution2(3, arr));
