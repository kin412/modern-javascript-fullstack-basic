/*
템플릿 리터럴 타입 - 많이 사용 되지는 않음
*/

type Color = "red" | "black" | "blue";

type Animal = "dog" | "cat" | "chicken";

// 조합된 모든 경우가 만들어짐
type ColoredAnimal = `${Color}-${Animal}`;
