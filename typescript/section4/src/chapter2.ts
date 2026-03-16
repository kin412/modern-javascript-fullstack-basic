/*
함수 타입의 호환성
특정 함수 타입을 다른 함수 타입으로 취급해도 괜찮은가를 판단하는 것
1. 반환 값의 타입이 호환 되는가?
2. 매개변수의 타입이 호환 되는가?
*/

//기준 1. 반환값이 호환되는가
type A = () => number;
type B = () => 10;

let a: A = () => 10;
let b: B = () => 10;

a = b;
//b = a; // 반환값이 다운캐스팅이라 안됨

//기준2. 매개변수가 호환되는가
//2-1. 매개변수의 개수가 같을 때
type C = (value: number) => void;
type D = (value: 10) => void;

let c: C = (value) => {};
let d: D = (value) => {};

//c = d; // 매개변수 시에는 또 업캐스팅이 안됨. 뭐이런 ㅋㅋ
d = c;

type Animal = {
  name: string;
};

type Dog = {
  name: string;
  color: string;
};

let animalFunc = (animal: Animal) => {
  console.log(animal.name);
};
let dogFunc = (dog: Dog) => {
  console.log(dog.name);
  console.log(dog.color);
};

//이렇게 하면 함수자체는 업캐스팅이라 안된다.
//animalFunc = dogFunc;
dogFunc = animalFunc;

let testFunc = (animal: Animal) => {
  console.log(animal.name);
  //console.log(animal.color);
};

let testFunc2 = (dog: Dog) => {
  console.log(dog.name);
};

//2-2. 매개변수의 개수가 다를 때 - 매개변수의 타입은 맞아야함.
type Func1 = (a: number, b: number) => void;
type Func2 = (a: number) => void;

let func1: Func1 = (a, b) => {};
let func2: Func2 = (a) => {};

func1 = func2;
//func2 = func1; //매개변수의 갯수가 줄어드니까 안됨.
