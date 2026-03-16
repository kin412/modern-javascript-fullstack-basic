//enum 타입. 열거형 타입
//여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입.

enum Role {
  //   ADMIN = 0, // 숫자형 enum
  //   USER = 1,
  //   GUEST = 2,
  //   ADMIN, //숫자를 지정하지 않으면 0부터 차례로 증가
  //   USER,
  //   GUEST,
  //   ADMIN = 10, // 숫자를 지정하면 그숫자부터 차례로 증가
  //   USER,
  //   GUEST,
  ADMIN,
  USER = 10, // 중간을 지정하면 앞에는 0, 뒤부터는 차례로 증가
  GUEST,
}

enum Language {
  korean = "ko",
  english = "en",
}

const user1 = {
  name: "kin",
  //role: 0, // 0 <- 관리자
  role: Role.ADMIN,
  language: Language.korean,
};

const user2 = {
  name: "hong",
  //role: 1, // 1 <- 일반유저
  role: Role.USER,
  language: Language.english,
};

const user3 = {
  name: "park",
  //role: 2, // 2 <- 게스트
  role: Role.GUEST,
  language: Language.korean,
};

console.log(user1, user2, user3);
