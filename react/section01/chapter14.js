//스코프
// -> 전역(전체 영역) 스코프 / 지역스코프
// -> 전역 스코프 : 전체 영역에서 접근 가능.
// -> 지역 스코프 : 특정 영역에서만 접근 가능.

let a = 1; // 전역 스코프

function funcA() {
  let b = 2; // 지역 스코프
  console.log(a);
  function funcB() {}
}

funcA();
//console.log(b);

if (true) {
  let c = 1;
  function funcC() {}
}

//console.log(c);
funcB(); // 함수 안에 선언된 함수 선언식은 불가능하지만,
funcC(); //if나 for문들에 선언된 함수 선언식은 호출가능.
