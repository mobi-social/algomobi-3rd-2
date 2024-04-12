/* 
문제 설명
정수를 담고 있는 배열 arr의 평균값을 return하는 함수, solution을 완성해보세요.

제한사항
arr은 길이 1 이상, 100 이하인 배열입니다.
arr의 원소는 -10,000 이상 10,000 이하인 정수입니다.
*/

// 프로그래머스 제출
function solution(arr) {
  const sum = arr.reduce((acc, cur) => acc + cur, 0);
  const average = sum / arr.length;
  return average;
}

// 풀이
const j_solution = () => {
  const arr = [1, 2, 3, 4, 5];
  const sum = arr.reduce((acc, cur) => acc + cur, 0);
  const average = sum / arr.length;
  console.log(average);
  return average;
};
j_solution();
