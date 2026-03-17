/*
제네릭 인터페이스
*/

interface KeyPair<K, V> {
  key: K;
  value: V;
}

let keyPair: KeyPair<string, number> = {
  key: "key",
  value: 0,
};

let keyPair2: KeyPair<boolean, string[]> = {
  key: true,
  value: ["12"],
};

/*
인덱스 시그니처
*/

interface NumberMap {
  [key: string]: number;
}

let numberMap1: NumberMap = {
  key: -1234,
  key2: 324534,
};

interface Map<V> {
  [key: string]: V;
}

let stringMap: Map<string> = {
  key: "value",
};

let booleanMap: Map<boolean> = {
  key: true,
};

/*
제네릭 타입 별칭
*/
type Map2<V> = {
  [key: string]: V;
};

let stringMap2: Map2<string> = {
  key: "hello",
};

/*
 제네릭 인터페이스의 활용 예시
 -> 유저 관리 프로그램
 -> 유저 구분 : 학생 유저 / 개발자 유저
*/

interface Student {
  type: "student";
  school: string;
}

interface Developer {
  type: "developer";
  skill: string;
}

interface User<T> {
  name: string;
  //profile: Student | Developer;
  profile: T;
}

function goToSchool(user: User<Student>) {
  //제네릭으로 타입가드를 안써도됨
  //   if (user.profile.type !== "student") {
  //     console.log("잘못오셨습니다.");
  //     return;
  //   }

  const school = user.profile.school;
  console.log(`${school}로 등교 완료`);
}

const developerUser: User<Developer> = {
  name: "kin",
  profile: {
    type: "developer",
    skill: "spring",
  },
};

//제네릭을 통한 타입검증에 막힘
//goToSchool(developerUser);

const studentUser: User<Student> = {
  name: "hong",
  profile: {
    type: "student",
    school: "가톨릭대학교",
  },
};
