//any
//특정 변수의 타입을 확실히 모를때 사용
let anyVar: any = 10;
anyVar = "hello";

anyVar = true;
anyVar = {};
anyVar = () => {};

//치트키긴 하지만 이럴때 검사가 안되서 런타임 에러가 발생함.
//타입스크립트 사용 이점이 사라짐. 최대한 안쓰는게 좋음.
anyVar.toUpperCate();

let num: number = 10;
num = anyVar;

//unknown
let unknownVar: unknown;
unknownVar = "";
unknownVar = 1;
unknownVar = () => {};

// unknown 타입의 값은 모든타입의 값에 넣을수 없고, 함수호출도 안됨.
//num = unknownVar;
//unknownVar.toUpperCate();

//활용하는 경우 - 타입 정제후에 가능
if (typeof unknownVar === "number") {
  num = unknownVar;
}
