/*
keyof 연산자
*/

// interface Person {
//   name: string;
//   age: number;
// }

//typeof는 타입을 정의할때사용시 타입을 뽑아내는 용도로 쓸수도 있음
type Person = typeof person;

//function getPropertyKey(person: Person, key: "name" | "age") {
// keyof 는 해당 객체의 모든 프로퍼티의 키를 유니온 타입으로 추출 "name" | "age"
// 주의 keyof는 무조건 타입에만 쓸수 없음
//function getPropertyKey(person: Person, key: keyof Person) {
function getPropertyKey(person: Person, key: keyof typeof person) {
  return person[key];
}

//const person: Person = {
const person = {
  name: "kin",
  age: 35,
};

getPropertyKey(person, "name");
