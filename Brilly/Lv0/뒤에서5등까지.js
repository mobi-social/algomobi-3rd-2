/* 
[문제 설명]
정수로 이루어진 리스트 num_list가 주어집니다. num_list에서 가장 작은 5개의 수를 오름차순으로 담은 리스트를 return하도록 solution 함수를 완성해주세요.

[제한사항]
6 ≤ num_list의 길이 ≤ 30
1 ≤ num_list의 원소 ≤ 100
*/

// 프로그래머스 제출
function solution(num_list) {
  num_list.sort((a, b) => {
    return a - b;
  });
  var answer = num_list.slice(0, 5);
  return answer;
}

// 풀이
const j_solution = () => {
  const num_list = [12, 4, 15, 46, 38, 1, 14];
  const sort_num_list = num_list.sort((a, b) => {
    return a - b;
  });
  const asc_num = sort_num_list.slice(0, 5);
  console.log(asc_num);
};

j_solution();

// 다른 사람 풀이
function solution(num_list) {
  return num_list.sort((a, b) => a - b).slice(0, 5);
}
