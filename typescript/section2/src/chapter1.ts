//원시타입
//number
let num1: number = 123;
let num2: number = -123;
let num3: number = 0.123;
let num4: number = -0.123;
let num5: number = Infinity;
let num6: number = -Infinity;
let num7: number = NaN;

//string
let str1: string = "hello";
let str2: string = "hello";
let str3: string = `hello`;
let str4: string = `hello ${num1}`;

//boolean
let bool1: boolean = true;
let bool2: boolean = false;

//null
let null1: null = null;

//undefined
let unde1: undefined = undefined;

//잠시 임시로 null을 넣어야할 경우 - tsconfig.json - strictNullChecks옵션
//let numA: number = null;

//리터럴 타입 - 값 그자체가 타입이 되는 것
let numA: 10 = 10;
//numA = 12; // 안됨 numA는 10만 되도록 허용했기 때문
let strA: "hello" = "hello";
//let boolA: true = false;
