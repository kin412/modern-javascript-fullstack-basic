/*
 기본 타입 간의 호환성
*/

let num1: number = 10;
let num2: 10 = 10;
//업캐스팅은 가능
num1 = num2;

/*
객체 타입간의 호환성
=> 어떤 객체 타입을 다른 객체 타입으로 취급해도 괜찮은가?
프로퍼티를 기준으로 슈퍼타입과 서브타입의 관계를 설정함
*/

type Animal = {
  name: string;
  color: string;
};

type Dog = {
  name: string;
  color: string;
  breed: string;
};

let animal: Animal = {
  name: "기린",
  color: "yellow",
};

let dog: Dog = {
  name: "돌돌이",
  color: "brown",
  breed: "진도",
};

//업캐스팅은 가능
animal = dog;

//다운캐스팅은 불가능
//dog = animal;

type Book = {
  name: string;
  price: number;
};

type ProgrammingBook = {
  name: string;
  price: number;
  skill: string;
};

let book: Book;
let programmingBook: ProgrammingBook = {
  name: "리액트",
  price: 33000,
  skill: "react.js",
};

//업캐스팅은 가능
book = programmingBook;

//다움캐스팅은 불가능
//programmingBook = book;

/*
초과 프로퍼티 검사
객체 초기화시 객체 리터럴을 사용하면 초과한 프로퍼티가 있으면 막는 검사
업캐스팅은 가능하지만 초기화는 안됨.
*/
let book2: Book = {
  name: "리액트",
  price: 33000,
  //skill: "react.js",
};

// 위와 동일
function func(book: Book) {}
func({
  name: "리액트",
  price: 33000,
  //skill: "react.js",
});
