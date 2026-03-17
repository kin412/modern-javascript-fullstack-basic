/*
infer
inference -> 추론하다
*/

type FuncA = () => string;

type FuncB = () => number;

type ReturnType<T> = T extends () => infer R ? R : never;

//string
type A = ReturnType<FuncA>;

//never
type B = ReturnType<FuncB>;

type C = ReturnType<number>;

/*
예제
*/

// 1. T는 프로미스 타입 이어야한다.
// 2. 프로미스타입의 결과값 타입을 반환해야한다.
type PromiseUnpack<T> = T extends Promise<infer R> ? R : never;

type PromiseA = PromiseUnpack<Promise<number>>;

type PromiseB = PromiseUnpack<Promise<string>>;
