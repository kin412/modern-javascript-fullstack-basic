/*
타입스크립트의 클래스
*/

const employee = {
  name: "kin",
  age: 35,
  position: "developer",
  work() {
    console.log("일중");
  },
};

class Employee {
  //필드
  //name?: string;
  //name: string = "";
  name: string;
  age: number;
  position: string;

  //생성자
  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }

  //메서드
  work() {
    console.log("일함");
  }
}

class ExcutiveOfficer extends Employee {
  //필드
  officerNumber: number;

  constructor(
    name: string,
    age: number,
    position: string,
    officerNumber: number,
  ) {
    super(name, age, position);
    this.officerNumber = officerNumber;
  }
}

const employeeB = new Employee("kin", 35, "개발자");
console.log(employeeB);

const employeeC: Employee = {
  name: "",
  age: 0,
  position: "",
  work() {},
};
