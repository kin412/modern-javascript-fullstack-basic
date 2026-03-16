//1.객체 생성
let obj1 = new Object(); //객체 생성자
let obj2 = {}; //객체 리터럴(대부분이 이방식)

//2.객체 안에있는 것들 - 객체 프로퍼티(객체 속성 key:value)
//key는 특수문자는 안됨.
let person = {
  name: "이정환",
  age: 27,
  hobby: "테니스",
  job: "fe developer",
  extra: true,
  obj: {},
  "like cat": true, // 공백 포함시에는 꼭 "" 해줘야함.
};

//3.객체 프로퍼티를 다루는 범위
//3.1 특정 프로퍼티에 접근(점 표기법, 괄호 표기법)
let name = person.name;
console.log(name);

let age = person["age"];
console.log(age);

let property = "hobby";
let hobby = person[property];
console.log(hobby);

// 3.1 새로운 프로퍼티를 추가하는 방법
person.job = "fe developer";
person["favoriteFood"] = "떡볶이";
console.log(person.job);
console.log(person.favoriteFood);

// 3.3 프로퍼티를 수정하는 방법
person.job = "educator";
person["favoriteFood"] = "초콜릿";
console.log(person.job);

//3.4 프로퍼티를 삭제하는 방법
delete person.job;
console.log(person.job);

//3.5 프로퍼티의 존재 유무를 확인하는 방법(in 연산자)
let result1 = "name" in person;
console.log(result1);
