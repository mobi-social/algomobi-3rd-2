// 문자열 s는 한 개 이상의 단어로 구성되어 있습니다.
// 각 단어는 하나 이상의 공백문자로 구분되어 있습니다.
// 각 단어의 짝수번째 알파벳은 대문자로, 홀수번째 알파벳은 소문자로 바꾼 문자열을 리턴하는 함수,
// solution을 완성하세요.

const solution = (s) => {
    const strArr = s.split(" ");
    let resultArr = [];

    for (let i = 0; i < strArr.length; i++) {
        const word = strArr[i];
        let result = "";
        for (let j = 0; j < word.length; j++) {
            if (j % 2 === 0) {
                result += word[j].toUpperCase();
            } else {
                result += word[j].toLowerCase();
            }
        }
        resultArr.push(result);
    }

    return resultArr.join(" ");
};

const solution1 = (s) => {
    const stemp = s.match(/(s+|S+)/g).map((part) => {
        // 공백 문자열과 비공백 문자열을 매치한다
        if (/\s/.test(part)) {
            // part가 공백 문자열인지 검사한다
            return part;
        }
        return part.split("").reduce((acc, cur, i) => {
            return acc + (i % 2 === 0 ? cur.toUpperCase() : cur.toLowerCase());
        }, "");
    });
    return stemp.join("");
};

console.log(solution1("try hello world"));

// return s.split(" ").reduce((acc, word) => {
//     const temp = word.split("").reduce((r, c, i) => {
//         return r + (i % 2 === 0 ? c.toUpperCase() : c.toLowerCase());
//     }, "");
//     return acc + (acc.length > 0 ? " " : "") + temp;
// }, "");
