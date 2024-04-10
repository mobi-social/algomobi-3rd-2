/* 
[문제 설명]
자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴해주세요. 예를들어 n이 12345이면 [5,4,3,2,1]을 리턴합니다.

[제한사항]
n은 10,000,000,000이하인 자연수입니다.
*/

// 프로그래머스 제출
function solution(n) {
  const stringN = n.toString();
  const splitArrN = stringN.split("").reverse();
  const arrN = splitArrN.map((a) => Number(a));
  return arrN;
}

// 풀이
const j_solution = () => {
  const n = 1234567;

  const stringN = n.toString();
  const splitArrN = stringN.split("").reverse();
  const arrN = splitArrN.map((a) => Number(a));
  console.log(arrN);
};
j_solution();

// 다른 사람 풀이
function solution(n) {
  return (n + "")
    .split("")
    .reverse()
    .map((n) => parseInt(n));
}
