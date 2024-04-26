// 문제 설명
// 문자열 s가 주어졌을 때, s의 각 위치마다 자신보다 앞에 나왔으면서, 
// 자신과 가장 가까운 곳에 있는 같은 글자가 어디 있는지 알고 싶습니다.
// 예를 들어, s="banana"라고 할 때,  각 글자들을 왼쪽부터 오른쪽으로 읽어 나가면서 
// 다음과 같이 진행할 수 있습니다.

// b는 처음 나왔기 때문에 자신의 앞에 같은 글자가 없습니다. 이는 -1로 표현합니다.
// a는 처음 나왔기 때문에 자신의 앞에 같은 글자가 없습니다. 이는 -1로 표현합니다.
// n은 처음 나왔기 때문에 자신의 앞에 같은 글자가 없습니다. 이는 -1로 표현합니다.
// a는 자신보다 두 칸 앞에 a가 있습니다. 이는 2로 표현합니다.
// n도 자신보다 두 칸 앞에 n이 있습니다. 이는 2로 표현합니다.
// a는 자신보다 두 칸, 네 칸 앞에 a가 있습니다. 이 중 가까운 것은 두 칸 앞이고, 이는 2로 표현합니다.
// 따라서 최종 결과물은 [-1, -1, -1, 2, 2, 2]가 됩니다.

// 문자열 s이 주어질 때, 위와 같이 정의된 연산을 수행하는 함수 solution을 완성해주세요.

// 제한사항
// 1 ≤ s의 길이 ≤ 10,000
// s은 영어 소문자로만 이루어져 있습니다.

//몰랑 몰랑 map으로 풀다가 실패해서 답지 봤음
//이게 5점이래..
function solution(s) {
    let arr = [];
    let ans = [];
    
    for(let i = 0; i < s.length; i++){
        if(!arr.includes(s[i])){
            ans.push(-1);
            arr.push(s[i]);
            continue;
        }
        
        if(arr.includes(s[i])){
            ans.push(arr.length - arr.lastIndexOf(s[i]));
            arr.push(s[i]);
            continue;
        }
    }
    
    return ans;
}

//타풀이
function solution(s) {
    const answer = [];
    const map = new Map();
  
    [...s].map((v, i) => {
      if (!map.has(v)) answer.push(-1);
      else answer.push(i - map.get(v));
      map.set(v, i);
    });
  
    return answer;
  }
  //

const solution = (s) =>
  [...s].map((char, i) => {
    const count = s.slice(0, i).lastIndexOf(char);
    return count < 0 ? count : i - count;
  });

  //
  
function solution(s) {
    const hash={};

    return [...s].map((v,i)=>{
        let result = hash[v] !== undefined ? i - hash[v] : -1;
        hash[v] = i;
        return result;
    });
}