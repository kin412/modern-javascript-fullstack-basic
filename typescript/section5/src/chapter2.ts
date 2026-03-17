/*
선언 합침
*/

//인터페이스는 별칭과 달리 중복선언시 문제가 되지 않음.
//결국다 합쳐지기때문

interface Person {
  name: string;
}

interface Person {
  name: string; //같은 이름으로 프로퍼티를 합치게 할거면, 타입도 같아야함. 서브타입도 안됨
  age: number;
}

interface Developer extends Person {
  name: "hello";
}

const person: Person = {
  name: "",
  age: 27,
};

/*
모듈 보강
*/

interface Lib {
  a: number;
  b: number;
}
//위의 인터페이스 밖에 없을때 아래의 lib객체를 만들어야할경우 내 ts에서 아래와 같이 보강한다.
interface Lib {
  c: string;
}

const lib = {
  a: 1,
  b: 2,
  c: "hello",
};
