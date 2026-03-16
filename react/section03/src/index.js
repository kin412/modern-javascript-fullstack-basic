//cjs
//const moduleData = require("./math");
//구조 분해 할당으로 받기가능
//const { add, sub } = require("./math");

//console.log(moduleData);
//console.log(moduleData.add(1, 2));
//console.log(moduleData.sub(1, 2));

//esm
// import mul from "./math.js"; //이렇게 개별적으로 받아야하고, 이름도 내맘대로 정할수 있음. 혹은 객체 안에 안넣고 따로 import도 가능
import mul, { add, sub } from "./math.js"; // esm사용 시는 확장자 명시 필수

console.log(add(1, 2));
console.log(sub(1, 2));
console.log(mul(1, 2));

console.log("====================");
import randomColor from "randomcolor";

const color = randomColor();
console.log(color);
