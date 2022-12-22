function solution(arr) {
  const copy = [...arr];
  copy.sort((a, b) => b - a);
  console.log(copy);
}

console.log(solution([87, 89, 92, 100, 76]));

function solution2(arr) {
  let n = arr.length;
  let answer = Array.from({ length: n }, () => 1);
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (arr[j] > arr[i]) answer[i]++;
    }
  }
  return answer;
}

let arr = [87, 89, 92, 100, 76];
console.log(solution2(arr));
