// 1. 상수 객체
// 새로운 변수를 재할당하는게 안된다는 것뿐, 프로퍼티를 수정하는 것은 문제가 없음.
const animal = {
  type: "고양이",
  name: "나비",
  color: "black",
};

//animal = { a: 1 }; //에러
animal.age = 2;
animal.name = "까망이";
delete animal.color;

console.log(animal);

// 2. 메서드
// -> 값이 함수인 프로퍼티를 말함

const person = {
  name: "이정환",
  sayHi: function () {
    console.log("안녕!");
  },
};

person.sayHi();
