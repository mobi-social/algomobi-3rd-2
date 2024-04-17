// 두 정수 left와 right가 매개변수로 주어집니다.
// left부터 right까지의 모든 수들 중에서,
// 약수의 개수가 짝수인 수는 더하고,
// 약수의 개수가 홀수인 수는 뺀 수를 return 하도록 solution 함수를 완성해주세요.

// 제곱근이 정수면 약수의 개수가 홀수이다.
const solution = (left, right) => {
    let result = 0;

    for (let i = left; i <= right; i++) {
        const sqrt = Math.sqrt(i);

        if (sqrt === Math.floor(sqrt)) {
            result -= i;
        } else {
            result += i;
        }
    }
    return result;
};

// 다른 풀이
const solution1 = (left, right) => {
    return Array.from(
        // 새로운 배열 생성
        { length: right - left + 1 }, // 17 - 13 + 1
        (_, idx) => left + idx // 13부터 +idx만큼의 수
    ).reduce((acc, cur) => {
        const sqrt = Math.sqrt(cur); // 제곱근이 정수면 약수의 개수가 홀수이다
        return acc + (sqrt === Math.floor(sqrt) ? -cur : cur); // 제곱근이 정수면 결과에서 해당 숫자 빼기 아니면 더하기
    });
};

console.log(solution(13, 17));
console.log(solution1(13, 17));
