// 1. 함수 표현식 -> 익명함수라 보면됨. 익명함수는 호이스팅의 대상이 되지 않음.

function funcA() {
  console.log("funcA");
}

//자바스크립트에서는 함수 그자체를 담을수 있음.
let varA = funcA;
console.log(varA);

//익명함수
let varB = function () {
  console.log("funcB");
};

varB();

// 2. 화살표 함수
let varC = () => {
  return 1;
};
//단순하게 값만 반환한다면
let varD = (value) => value + 1;

console.log(varD(10));
