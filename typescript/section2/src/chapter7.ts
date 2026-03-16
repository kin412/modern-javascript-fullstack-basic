//void
//void -> 공허 -> 아무것도 없다.

//문자열 반환
function func1(): string {
  return "hello";
}

//return 이 없을때 void. return문을 쓰기 싫을때.
function func2(): void {
  console.log("hello");
}

//void 타입 변수에는 아무것도 담을수 없음. undefined만 가능
//tsconfig.json의 strictNullChecks 을 false로 주면 넣을수있음.
let a: void;
// a = 1;
// a = "hello";
// a = {};
a = undefined;

//never - 존재하지 않는, 불가능한 타입
//정상적으로 return될수 없는 경우
function func3(): never {
  while (true) {}
}
//예외도 return할수 없으니
function func4(): never {
  throw new Error();
}
