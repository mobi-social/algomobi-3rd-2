/* 
문제 설명
정수 n을 입력받아 n의 약수를 모두 더한 값을 리턴하는 함수, solution을 완성해주세요.

제한 사항
n은 0 이상 3000이하인 정수입니다.
*/
// 풀이 (1점)
const j_solution = (n) => {
  let result = 0;
  let divisor = [];
  let i = 1;

  while (i <= n) {
    if (n % i === 0) {
      divisor.push(i);
    }
    i++;
  }
  for (let j = 0; j < divisor.length; j++) {
    result += divisor[j];
  }
  return result;
};

// 다른 사람 풀이 => 굳이 배열을 뽑을 필요가 없다...
function solution(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) sum += i;
  }
  return sum;
}
