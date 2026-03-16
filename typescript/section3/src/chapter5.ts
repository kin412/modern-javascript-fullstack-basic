/*
타입 추론
*/

//추론 가능 상황.
//변수의 초기값으로 추론
let a = 10;
let b = "hello";
let c = {
  id: 1,
  name: "kin",
  profile: {
    nickname: "naver",
  },
  urls: ["https://google.com"],
};

let { id, name, profile } = c;

let [one, two, three] = [1, "hello", true];

function func(message = "hello") {
  return "hello";
}

//any 타입의 진화. 초기값을 주지 않으면 암묵적 any타입이 됨
// let d:any 이와같이 명시적으로 any를 주면 추론을 통한 진화를 못하는 차이가 있음.
//암묵적 any타입은 코드읽기가 불편 하므로 추천하지 않음.
let d;
d = 10; // 이 시점에 d는 number로 추론해 number로 진화함
d.toFixed();

d = "hello"; // 이렇게 그냥 바꿀수도 있음. 이 이후론 string으로 진화함
d.toUpperCase();

//const는 원시타입은 상수기 때문에 바뀔수 없지만
//객체 내부의 값을 바꾸는 것은 객체의 주소가 바뀌는것이 아니기 때문에 가능
const num = 10;

//여러 값이 가능한 경우 union 공통타입으로 추론해줌
let arr = [1, "asdasd"];

//타입 추론 시 타입 넓히기

//추론 불가
//function func(param) {}
