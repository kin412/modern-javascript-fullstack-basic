/*
대수 타입
-> 여러개의 타입을 합성해서 새롭게 만들어낸 타입
-> 합집합 타입과 교집합 타입이 존재
*/

/*
1. 합집합 - Union타입
*/
//a는 string, number 둘다 넣을 수 있음
let a: string | number | boolean;
a = 1;
a = "hello";
a = true;

let arr: (number | string | boolean)[] = [1, "hello", true];

type Dog = {
  name: string;
  color: string;
};

type Person = {
  name: string;
  language: string;
};

type Union1 = Dog | Person;

let union1: Union1 = {
  name: "",
  color: "",
};

let union2: Union1 = {
  name: "",
  language: "",
};

let union3: Union1 = {
  name: "",
  color: "",
  language: "",
};

//{name,color}는 union1에 포함되고 {name,language}는 union2에 포함되고
//{name,color,language}는 둘의 교집합에 위치하니까 되지만
//{name}은 아무곳에도 속하지 못하므로 단독으로 union은 안됨
// let union4: Union1 = {
//   name: "",
// };

/*
2. 교집합 타입 - intersection 타입
교집합 타입은 원시타입은 겹치는게 없으므로 그냥 never타입이 나와서 잘쓰지 않음
주로 객체에서 씀
*/
let variable: number & string;

type Dog2 = {
  name: string;
  color: string;
};

type Person2 = {
  name: string;
  language: string;
};

type Intersection = Dog2 & Person2;

// 다 포함 한것만이 교집합임. 하나라도 빠지면 에러
let intersactional: Intersection = {
  name: "",
  color: "",
  language: "",
};
