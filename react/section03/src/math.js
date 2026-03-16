//math 모듈
export function add(a, b) {
  return a + b;
}

export function sub(a, b) {
  return a - b;
}

//cjs에 의해 두개의 값이 내보내지게됨. - 구버전의 프로젝트들에서 많이 보임.
// module.exports = {
//   add, //add: add, 어떤이름으로 내보낼지와, 변수의 이름이 같다면 하나로만 선언가능
//   sub, //sub: sub,
// };

//esm 방식 - 현재 자바스크립트에서 표준으로 채택하는 방식. 신규 프로젝트시에도 esm방식을 쓰는것을 권장함.
//이렇게 해도 되고 내보낼 함수 앞에 export를 붙여도됨
//export { add, sub };

//default로 export하면 받는쪽에서 개별적으로 받아야함.
export default function multiply(a, b) {
  return a * b;
}
