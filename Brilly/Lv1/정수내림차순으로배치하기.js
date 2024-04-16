/* 
[문제 설명]
함수 solution은 정수 n을 매개변수로 입력받습니다.
n의 각 자릿수를 큰것부터 작은 순으로 정렬한 새로운 정수를 리턴해주세요.
예를들어 n이 118372면 873211을 리턴하면 됩니다.

[제한 조건]
n은 1이상 8000000000 이하인 자연수입니다.
*/

// 풀이
const solution = (n) => {
  const n = 11259;
  const sortN = n.toString().split("").sort().reverse().join("");
  return parseInt(sortN);
};

// 다른 사람 풀이 => 숫자에 빈문자를 더해서 string으로 변환
function solution(n) {
  return parseInt((n + "").split("").sort().reverse().join(""));
}
