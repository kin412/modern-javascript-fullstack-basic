//구조적 타입 시스템 property based type system
//객체 object
//object로 쓰면 user.id 이런식의 점표기법을 못씀
//object는 그냥 값이 객체다 라고만 알려주는거지 객체의 특성을 부여하지 못함
// let user: object = {
//   id: 1,
//   name: "kin",
// };

//그래서 쓰는게 객체 리터럴
let user: {
  id?: number; //?는 선택적 property. 있어도 되고, 없어도 되는 경우
  name: string;
} = {
  id: 1,
  name: "kin",
};

let dog: {
  name: string;
  color: string;
} = {
  name: "돌돌이",
  color: "brown",
};

user.id;

user = {
  name: "홍길동",
};

//readonly - 프로퍼티의 값을 읽기전용으로. 수정불가
let config: {
  readonly apiKey: string;
} = {
  apiKey: "MY API KEY",
};

//config.apiKey = "asdasd";
