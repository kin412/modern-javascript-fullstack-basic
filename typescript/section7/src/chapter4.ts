/*
제네릭 클래스
*/

class NumberList<T> {
  constructor(private list: T[]) {}

  push(data: T) {
    this.list.push(data);
  }

  pop() {
    return this.list.pop();
  }

  print() {
    console.log(this.list);
  }
}

const numberList = new NumberList([1, 2, 3]);
numberList.pop();
numberList.push(4);
numberList.print();

const stringList = new NumberList(["hi", "hu", "hea"]);
stringList.pop();
stringList.push("hiho");
stringList.print();
