/*
인터페이스
*/

interface IPerson {
  readonly name: string;
  age?: number;
  //sayHi: () => void;
  sayHi(): void;
  sayHi(a: number, b: number): void;
}

// type Func = {
//   (): void;
// };

// const func: Func = () => {};

//인터페이스는 이와같은 유니온이나 인터섹션이 안됨.
type Type1 = number | string | IPerson;
type Type2 = number & string & IPerson;

const person: IPerson = {
  name: "kin",
  //age: 30,
  sayHi: function () {
    console.log("Hi");
  },
};

//person.name = "hong";

person.sayHi();
person.sayHi(1, 2);
