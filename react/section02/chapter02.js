//단락 평가 - and, or 연산시 하나에 의해 확정이 되면뒤연산을 하지않음.
// and - 첫번째 피연산자가 falsy한 값 인 경우
// or - 첫번째 피연산자가 truthy한 값 인 경우

function returnFalse() {
  console.log("False 함수");
  return false;
}

function returnTrue() {
  console.log("True 함수");
  return true;
}

console.log(returnFalse() && returnTrue());
console.log("=================");
console.log(returnTrue() || returnFalse());

console.log("=================");
console.log("=================");
console.log("=================");

//단락 평가 활용 사례
function printName(person) {
  const name = person && person.name;
  console.log(name || "person의 값이 없음");
}
printName();
printName({ name: "이정환" });
