/*
Unknown 타입
unknown 타입은 모든 타입의 슈퍼타입이므로 업캐스팅이 가능.
하지만 다운캐스팅은 안됨.
*/
function UnknownExam() {
  //업캐스팅 가능
  let a: unknown = 1;
  let b: unknown = "hello";
  let c: unknown = true;
  let d: unknown = null;
  let e: unknown = undefined;

  //다운캐스팅 불가능
  let unknownVar: unknown;
  //let num: number = unknownVar;
}

/*
never 타입 - 공집합. 아무것도 없는 집합
*/
function neverExam() {
  function neverFunc(): never {
    while (true) {}
  }

  //업캐스팅 가능
  let num: number = neverFunc();
  let str: string = neverFunc();
  let bool: boolean = neverFunc();

  //다운캐스팅 불가능 - 어떤 값도 저장되면 안되는 변수에 활용하기 좋음
  //let never1: never = 10;
  //let never2: never = "string";
}

/*
Void 타입
*/
function voidExam() {
  function voidFunc(): void {
    console.log("hi");
    return undefined;
  }

  //undefinde는 업캐스팅 가능 void가 undefind의 슈퍼타입이니까
  let voidVar: void = undefined;
}

/*
any 타입 - 치트키 타입
타입 강제성이 떨어지기 때문에 사용하는걸 지양해야함.
*/
function anyExam() {
  let unknownVar: unknown;
  let anyVar: any;
  let undefindVar: undefined;
  let neverVar: never;

  //자기한테 오는 한정 다운캐스팅 가능
  anyVar = unknownVar;

  //자기가 다운캐스팅 되는것도 가능
  undefindVar = anyVar;

  //다되는데 never는 안됨.
  //neverVar = anyVar;
}
