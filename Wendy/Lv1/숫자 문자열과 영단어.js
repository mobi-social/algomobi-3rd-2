// 네오와 프로도가 숫자놀이를 하고 있습니다. 
// 네오가 프로도에게 숫자를 건넬 때 일부 자릿수를 영단어로 바꾼 카드를 건네주면
//  프로도는 원래 숫자를 찾는 게임입니다.

// 다음은 숫자의 일부 자릿수를 영단어로 바꾸는 예시입니다.

// 1478 → "one4seveneight"
// 234567 → "23four5six7"
// 10203 → "1zerotwozero3"
// 이렇게 숫자의 일부 자릿수가 영단어로 바뀌어졌거나, 
// 혹은 바뀌지 않고 그대로인 문자열 s가 매개변수로 주어집니다. 
// s가 의미하는 원래 숫자를 return 하도록 solution 함수를 완성해주세요.

//모르겠어서 해설 봤음
function solution(s) {
    let numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    let answer = s; // answer 변수를 루프 외부에서 초기화
    for (let i = 0; i < numbers.length; i++) { // i < numbers.length로 변경
        answer = answer.split(numbers[i]).join(i); // answer를 계속 갱신
    }
    return Number(answer);
}
//타풀이
function solution(s) {
    s = s.replace(/zero/gi, 0)
    .replace(/one/gi, 1)
    .replace(/two/gi, 2)
    .replace(/three/gi, 3)
    .replace(/four/gi, 4)
    .replace(/five/gi, 5)
    .replace(/six/gi, 6)
    .replace(/seven/gi, 7)
    .replace(/eight/gi, 8)
    .replace(/nine/gi, 9)
    return parseInt(s);
}

