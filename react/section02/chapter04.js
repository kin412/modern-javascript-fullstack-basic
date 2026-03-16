// 1. spread 연산자
// -> spread : 흩뿌리다, 펼치다
// -> 객체나 배열에 저장된 여러개의 값을 개별로 흩뿌려주는 역할

let arr1 = [1, 2, 3];
//let arr2 = [4, arr1[0], arr1[1], arr1[2], 5, 6];
let arr2 = [4, ...arr1, 5, 6]; // ... 이 spread

console.log(arr2);

let obj1 = {
  a: 1,
  b: 2,
};

let obj2 = {
  ...obj1,
  c: 3,
  d: 4,
};

console.log(obj2);

function funcA() {}
funcA(...arr1); // 3개의 매개변수가 들어가는 것

// 2. Rest 매개변수
// -> 나머지 매개변수

//첫번째 변수는 one으로 저장하고 나머지는 rest로 빠짐.
//rest는 나머지 전부이기 때문에, 뒤에 다른 변수를 선언하면 에러임.
function funcB(one, ...rest) {
  console.log("rest 매개변수");
  console.log(rest);
}

funcB(...arr1);
