/*
타입 좁히기 - 타입 가드
조건문 등을 이용해 넓은 타입에서 좁은 타입으로
타입을 상황에 따라 좁히는 방법
*/

type Person = {
  name: string;
  age: number;
};

//value => number : toFixed
//value => string : toUpperCase
//value => Date : getTime
//value => Person : name은 age살 입니다.
function func(value: number | string | Date | null | Person) {
  value;
  //value.toUpperCase(); 타입이 좁혀져 확정되지 않았으므로 해당 함수를 쓸수 없음.
  if (typeof value === "number") {
    console.log(value.toFixed());
  } else if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else if (value instanceof Date) {
    console.log(value.getTime());
    //} else if (value instanceof Person) {
    // 인스턴스 instanceof 타입 - 순서로 와야함. 뒤에는 인스턴스가 올수 없음.
  } else if (value && "age" in value) {
    // age가 value에 있을때만
    console.log(`${value.name}은 ${value.age}살 입니다.`);
  }
}
