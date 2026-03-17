/*
맵드 타입- 실무에서 많이쓰임 잘알고 있어야함
*/

interface User {
  id: number;
  name: string;
  age: number;
}

//한명의 유저 정보를 불러오는 기능
function fetchUser(): User {
  //...기능
  return {
    id: 1,
    name: "kin",
    age: 35,
  };
}

//맵드 타입은 인터페이스에선 만들수 없음.
// interface PartialUser {
//   id?: number;
//   name?: string;
//   age?: number;
// }

type PartialUser = {
  [key in "id" | "name" | "age"]?: User[key]; // 맵드타입은 ?를 추가함으로써 다 선택적 프로퍼티가 됨
};

type BooleanUser = {
  [key in keyof User]: boolean;
};

type ReadOnlyUser = {
  readonly [key in keyof User]: User[key];
};

//한명의 유저 정보를 수정하는 기능
function updateUser(user: PartialUser) {
  //..수정하는 기능
}

updateUser({
  //   id: 1,
  //   name: "kin",
  age: 35,
});
