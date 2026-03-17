/*
제네릭
*/

//제네릭을 쓰면 타입을 강제할수 있음. 상황에따라 다른타입이 담길수도 있음
function func<T>(value: T): T {
  return value;
}

let num = func(10);
//num.toUpperCase(); 타입이 정해지지 않으면 에러가 날수도 안날수도 있다. 아니면 좁히기를 해야함
// if (typeof num === "number") {
//   num.toFixed();
// }

let bool = func(true);

let str = func("aaa");

//튜플할당
//let arr = func([1, 2, 3] as [number, number, number]);
//제네릭으로 튜플 할당. 어차피위에서 매개변수 타입도 제네릭해놨으므로 안해도 상관은 없지만 그래도 예시
let arr = func<[number, number, number]>([1, 2, 3]);
