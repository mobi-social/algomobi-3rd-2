/* 
문제 설명
단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.

제한사항
s는 길이가 1 이상, 100이하인 스트링입니다.
*/

// 프로그래머스 제출
function solution(s) {
  return s.length % 2 !== 0
    ? s.substring(s.length / 2, s.length / 2 + 1)
    : s.substring(s.length / 2 - 1, s.length / 2 + 1);
}

// 풀이
const j_solution = () => {
  const s = "abcd";
  if (s.length % 2 !== 0) {
    console.log(s.substring(s.length / 2, s.length / 2 + 1));
  } else {
    console.log(s.substring(s.length / 2 - 1, s.length / 2 + 1));
  }
};
j_solution();

// 다른 사람 풀이
function solution(s) {
  return s.substr(Math.ceil(s.length / 2) - 1, s.length % 2 === 0 ? 2 : 1);
}
