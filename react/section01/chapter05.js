//원시 타입
// 1.number type
let num1 = 27;
let num2 = 1.5;
let num3 = -20;

let inf = Infinity;
let mInf = -Infinity;

let nan = NaN; //수치 연산이 실패했을때의 결과값.
console.log(1 * "hello");

// 2.String type
let myName = "이정환";
let myLocation = "목동";
let introduce = myName + myLocation;

//백틱은 변수의 값을 동적으로 적용가능. = template literal
let introduceText = `${myName}은 ${myLocation}에 거주합니다.`;
console.log(introduceText);

// 3. boolean type
let isSwitchOn = true;
let isEmpty = false;

// 4. null type (아무것도 없다.). 빈칸
let empty = null;

// 5.undefined type - 초기화를 하지않으면 아무것도 할당되지 않음. 진짜 그냥 '무'
let none;
console.log(none);
