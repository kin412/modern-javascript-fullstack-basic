// 1. if 조건문 (if문)
let num = 10;

if (num >= 10) {
  console.log("num은 10 이상입니다.");
} else if (num >= 3) {
  console.log("num은 3 이상입니다.");
} else {
  console.log("거짓.");
}

// 2. switch 문
// -> if문과 기능 자체는 동일
// -> 다수의 조건을 처리할 때 if문 보다 더 직관적
let animal = "cat";

// break를 하지 않으면, 일치하는것을 만나면 그아래를 다실행함.
switch (animal) {
  case "cat": {
    console.log("고양이");
  }
  case "dog": {
    console.log("개");
    break;
  }
  case "bear": {
    console.log("곰");
  }
  default: {
    console.log("default");
  }
}
