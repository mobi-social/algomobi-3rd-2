// 단어 s의 가운데 글자를 반환하는 함수,
// solution을 만들어 보세요.
// 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.

const solution = (s) => {
    const length = s.length;
    const midStr = Math.floor(length / 2);

    if (length % 2 === 0) {
        return s.slice(midStr - 1, midStr + 1);
    } else {
        return s[midStr];
    }
};
