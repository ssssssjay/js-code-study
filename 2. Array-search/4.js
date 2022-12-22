function solution(arr) {
  // console.log(arr.join('').split(0));
  let stacking = 0;
  let scores = [];
  for (let i = 0; i < arr.length; i++) {
    const isWin = arr[i];
    if (isWin) {
      stacking++;
      scores.push(stacking);
    } else {
      stacking = 0;
    }
  }
  // console.log(scores);
  return scores.reduce((acc, cur) => acc + cur, 0);
}

console.log(solution([1, 0, 1, 1, 1, 0, 0, 1, 1, 0]));
