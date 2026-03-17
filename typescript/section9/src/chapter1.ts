/*
분산적인 조건부 타입
*/

//[]를 씌우면 분산적이지 않게 적용됨. 세개중에 하나만 number가 아니어도 아닌 판정
type StringNumberSwitch<T> = [T] extends [number] ? string : number;

let a: StringNumberSwitch<number>;

let b: StringNumberSwitch<string>;

let c: StringNumberSwitch<number | string>;

let d: StringNumberSwitch<boolean | number | string>;

/*
실용적인 예제
*/

type Exclude<T, U> = T extends U ? never : T;

//결과 number | never | boolean
//never는 공집합이라 사라짐-> 최종 결과 number | boolean
//특정 타입만 제거할수가 있음. string이 제거됨
type A = Exclude<number | string | boolean, string>;

//결과 string
type Extract<T, U> = T extends U ? T : never;

type B = Extract<number | string | boolean, string>;
