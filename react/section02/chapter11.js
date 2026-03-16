console.log(1);
//비동기 함수, 시간만큼 대기했다가 콜백함수 실행.
setTimeout(() => {
  console.log(2);
}, 3000);
console.log(3);
