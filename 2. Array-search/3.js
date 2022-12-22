// 1:가위, 2:바위, 3:보

/**
 *
 * @param {number[]} A
 * @param {number[]} B
 */
function solution(A, B) {
  let answer = [];
  for (let i = 0; i < A.length; i++) {
    const a = A[i];
    const b = B[i];
    if (a - b === 1 || a - b === -2) {
      answer.push('A');
    } else if (a === b) {
      answer.push('D');
    } else {
      answer.push('B');
    }
  }
  return answer;
}

console.log(solution([2, 3, 3, 1, 3], [1, 1, 2, 2, 3]));
