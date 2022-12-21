/**
 * 연필 1 다스는 12자루입니다. 학생 1인당 연필을 1자루씩 나누어 준다고 할 때 N명의 학생수 를 입력하면 필요한 연필의 다스 수를 계산하는 프로그램을 작성하세요.
 * @param {number} n (n <= 1000)
 */
function solution(n) {
  // 미지수 * 12 >= n
  let answer = 1;
  while (answer * 12 < n) {
    answer++;
  }
  return answer;
  /**
    let answer;
    answer=Math.ceil(n/12);
    return answer;
   */
}

console.log(solution(25));
console.log(solution(178));
