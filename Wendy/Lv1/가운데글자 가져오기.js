// 문제 설명
// 단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요.
//  단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.

// 재한사항
// s는 길이가 1 이상, 100이하인 스트링입니다.

//1점...
function solution(s) {
    const midlength = Math.floor(s.length/2);
    return s.length %2 === 1 ? s[midlength] : s[midlength-1]+s[midlength];
}

//타풀이
function solution(s) {
    return s.substr(Math.ceil(s.length / 2) - 1, s.length % 2 === 0 ? 2 : 1);
}
//substr : 문자열에서 지정된 위치에서 시작하여 지정된 수의 문자 추출(시작인덱스,갯수)
//substr(2,2) => 2번째 인덱스에서 시작하여 2개 문자 추출
//Math.ceil : 주어진 숫자를 올림하여 가장 가까운 정수 반환