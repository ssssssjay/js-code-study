// 합에 집중하지말고 (총합 - 특정값들의 합)이라는 방안도 고려
function solution(arr) {
  const total = arr.reduce((acc, cur) => acc + cur, 0); // 총 합
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      const sumOfTwo = arr[i] + arr[j];
      if (total - sumOfTwo === 100) {
        arr.splice(j, 1);
        arr.splice(i, 1);
      }
    }
  }
  return arr;
}

const arr = [20, 7, 23, 19, 10, 15, 25, 8, 13];
console.log(solution(arr));
