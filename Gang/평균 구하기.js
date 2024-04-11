// 정수를 담고 있는 배열 arr의 평균값을 return하는 함수, solution을 완성해보세요.

// 제한사항
// arr은 길이 1 이상, 100 이하인 배열입니다.
// arr의 원소는 -10,000 이상 10,000 이하인 정수입니다.

const solution = (arr) => {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        result += arr[i];
    }
    return result / arr.length;
};

console.log(solution([1, 2, 3, 4]));

// 다른 사람 풀이
function average(array) {
    return array.reduce((a, b) => a + b) / array.length;
}
