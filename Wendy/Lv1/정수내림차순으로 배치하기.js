// 문제 설명
// 함수 solution은 정수 n을 매개변수로 입력받습니다.
// n의 각 자릿수를 큰것부터 작은 순으로 정렬한 새로운 정수를 리턴해주세요.
// 예를들어 n이 118372면 873211을 리턴하면 됩니다.

// 제한 조건
// n은 1이상 8000000000 이하인 자연수입니다.

//내풀이
function solution(n) {
    const arr = n
        .toString()
        .split("")
        .sort((a, b) => b - a)
        .join("");
    const answer = parseInt(arr);
    return answer;
}

//다른사람 풀이
function solution(n) {
    let nString = n.toString().split("").map(Number);
    return parseInt(nString.sort((a, b) => b - a).join(""));
}

function solution(n) {
    return parseInt((n + "").split("").sort().reverse().join(""));
}
