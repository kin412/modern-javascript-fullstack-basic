/*
접근제어자
access modifier
=> public private protected
*/

class Employee {
  //필드
  //name?: string;
  //name: string = "";
  //private name: string; //클래스 내에서만 액세스 가능
  //protected name: string; //상속 받은 자식까지는 접근가능
  name: string;
  age: number;
  position: string;

  //생성자
  constructor(name: string, age: number, position: string) {
    //필드외에곳에서 접근제어자를 쓰면 필드의 접근제어자를 지워줘야함
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

  func() {
    this.name; //private는 접근불가. protected는 상속받은 자식에서는 접근가능
  }
}

const employee = new Employee("kin", 35, "developer");
employee.name = "hong";
employee.age = 30;
employee.position = "디자이너";
