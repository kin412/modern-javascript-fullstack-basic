// console.log("hello typescript");
// const a: number = 1;

//compilerOptions target 옵션을 es5로 설정하면
// 화살표 함수는 es6 문법이므로 컴파일된 js파일은
// function이 생성된다.
// const func = () => {
//   console.log("hello");
// };

// import { hello } from "./hello";

// hello();

//타입 스크립트는 기본적으로 모든 타입스크립트 파일을
//전역 모듈로 본다. => 같은이름의 변수를 사용할수 없음.
//전역 스코프라서
//1. export를 최소 한번 이상만 선언해두면 독립된 모듈로 인식함.
//tsconfig.json에서 moduleDetection 옵션 사용
const a = 1;

//export {};

const func = () => {
  console.log("hello");
};

export default func;
