/*
타입 단언 - as. 타입을 바꾸는건 아님. 조심해서 확실할때만 사용해야함
*/
type Person = {
  name: string;
  age: number;
};

let person = {} as Person;
person.name = "kin";
person.age = 27;

type Dog = {
  name: string;
  color: string;
};

let dog: Dog = {
  name: "돌돌이",
  color: "brown",
  breed: "진도",
} as Dog;

/*
타입 단언의 규칙
값 as 단언 <-단언식
A as B 
A가 B의 슈퍼타입이거나
A가 B의 서브 타입이어야함
*/

let num1 = 10 as never;
let num2 = 10 as unknown;

//이건 슈퍼 서브 타입 관계가 아니기 때문에 안됨
//let num3 = 10 as string;

//이런 식으로 우회가 가능하나 매우 위험하므로 알아두기만 할것
let num3 = 10 as unknown as string;

/*
const 단언
const로 선언했을때와 동일한 효과를 가짐.
객체와 썼을때 효과가 있음. -> 프로퍼티들에 readonly 부여
*/

let num4 = 10 as const;

let cat = {
  name: "야옹이",
  color: "yellow",
} as const;
//readonly 이므로 불가능
//cat.color = "blue";

/*
non null 단언
*/

//익명인 경우 author를 안쓸수도 있음
type Post = {
  title: string;
  author?: string; //선택적 프로퍼티
};

let post: Post = {
  title: "게시글1",
  author: "kin",
};

//옵셔널 체이닝
const len: number = post.author!.length; // ! -> non null 단언 author는 무조건 있어!!
