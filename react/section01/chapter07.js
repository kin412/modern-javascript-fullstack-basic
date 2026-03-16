// 1. 대입 연산자
let var1 = 1;

// 2. 산술 연산자 - 수학과 동일하게 곱셈 나눗셈 모듈러가 덧셈 뺄셈보다 우선순위 높음.
let num1 = 3 + 2;
let num2 = 3 - 2;
let num3 = 3 * 2;
let num4 = 3 / 2;
let num5 = 3 % 2;

let num6 = (1 + 2) * 10;

// 3. 복합 대입 연산자 (산술 + 대입)
let num7 = 10;
num7 = num7 + 20;
num7 += 20; // 위와 동일
num7 -= 20;

// 4. 증감 연산자
let num8 = 10;
++num8; //전위 연산
num8++; //후위 연산

// 5. 논리 연산자
let or = true || false;
let and = true && false;
let not = !true;
console.log(or, and, not);

// 6. 비교 연산자
let comp1 = 1 === 2; // 자료형까지 비교. false
// 1 == 2 // 값만 비교 true
let comp2 = 1 !== 2;
console.log(comp1, comp2);

let comp3 = 2 > 1;
let comp4 = 2 <= 1;
