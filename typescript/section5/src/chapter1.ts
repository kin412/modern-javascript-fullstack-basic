/*
인터페이스의 확장
*/

interface Animal {
  name: string;
  color: string;
}

interface Dog extends Animal {
  //name: string;
  //color: string;
  //name: "hello"; // 재정의 시 원본타입의 서브타입이어야만 재정의가 가능
  isBark: boolean;
}

const dog: Dog = {
  name: "",
  color: "",
  isBark: true,
};

interface Cat extends Animal {
  //name: string;
  //color: string;
  isScratch: boolean;
}

interface Chicken extends Animal {
  //name: string;
  //color: string;
  isFly: boolean;
}

//다중 확장 - 상속임 걍
interface DogCat extends Dog, Cat {}

const dogCat: DogCat = {
  name: "",
  color: "",
  isBark: true,
  isScratch: true,
};
