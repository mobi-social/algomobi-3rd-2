// 문제 설명
// 길이가 n이고, "수박수박수박수...."와 같은 패턴을 유지하는 문자열을 리턴하는 함수, solution을 완성하세요.
// 예를들어 n이 4이면 "수박수박"을 리턴하고 3이라면 "수박수"를 리턴하면 됩니다.

// 제한 조건
// n은 길이 10,000이하인 자연수입니다.

function solution(n) {
    var answer = "수박";
    return answer.repeat(n).slice(0, n);
}

//타풀이
function waterMelon(n) {
    var result =
        "수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박";
    return result.substring(0, n);
}
