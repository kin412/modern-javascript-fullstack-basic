//배열
let numArr: number[] = [1, 2, 3];

let strArr: string[] = ["hello", "im", "kin"];

//제네릭
let boolArr: Array<boolean> = [true, false, true];

//배열에 들어가는 요소들의 타입이 다양할 경우
let multiArr: (number | string)[] = [1, "hello"];

//다차원 배열의 타입을 정의하는 방법
let doubleArr: number[][] = [
  [1, 2, 3],
  [4, 5],
];

// 튜플 - js엔 없고 타입스크립트에만 있음
// 길이와 타입이 고정된 배열
let tup1: [number, number] = [1, 2];
//불가능
//tup1 = [1,2,3];
//tup1 = ["aaa", "dddd"];

let tup2: [number, string, boolean] = [1, "2", true];

//배열메서드 사용 시, 튜플의 길이 제한이 발동하지 않음.
//tup1.push(1);
//tup1.pop();
//tup1.pop();
//tup1.pop();

//튜플이 유용한 경우. 5번을 다른사람이 저장할때 타입을 강제할수 있음.
const users: [string, number][] = [
  ["kin", 1],
  ["park", 2],
  ["lee", 3],
  ["sin", 4],
  //[5, "song"],
];
