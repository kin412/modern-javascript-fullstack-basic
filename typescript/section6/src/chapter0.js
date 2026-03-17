/*
자바스크립트 - 클래스

*/

let studentA = {
  name: "kin",
  grade: "A+",
  age: 35,
  study() {
    console.log("열심히 공부함");
  },
  introduce() {
    console.log("안녕하세요");
  },
};

// let studentB = {
//   name: "par",
//   grade: "B",
//   age: 23,
//   study() {
//     console.log("열심히 공부함11111111");
//   },
//   introduce() {
//     console.log("안녕하세요222222222222");
//   },
// };

class Student {
  //필드
  name;
  grade;
  age;

  //생성자
  constructor(name, grade, age) {
    this.name = name;
    this.grade = grade;
    this.age = age;
  }

  //메서드
  study() {
    console.log("열심히 공부함");
  }

  introduce() {
    console.log(`안녕하세요리왕 ${this.name}`);
  }
}

class StudentDeveloper extends Student {
  //필드
  //name;
  //grade;
  //age;
  favoritSkill;

  constructor(name, grade, age, favoritSkill) {
    // this.name = name;
    // this.grade = grade;
    // this.age = age;
    //상속 받는건 super 처리해줘야함
    super(name, grade, age);
    this.favoritSkill = favoritSkill;
  }

  //메서드 - 동일하게 상속가능
  //   study() {
  //     console.log("열심히 공부함");
  //   }

  //   introduce() {
  //     console.log(`안녕하세요리왕 ${this.name}`);
  //   }

  programming() {
    console.log(`${this.favoritSkill}로 프로그래밍 함`);
  }
}

//클래스를 이용해서 만든 객체 -> 인스턴스
//스튜던트 인스턴스
let studentB = new Student("kin", "A", 35);
console.log(studentB);
studentB.study();
studentB.introduce();

const studentDeveloper = new StudentDeveloper("kin2", "B", 29, "spring");
console.log(studentDeveloper);
studentDeveloper.introduce();
studentDeveloper.programming();
