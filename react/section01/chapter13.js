// 1. 콜백함수 - 다른 함수의 인수로 전달해서 나중에 실행되게 하는 함수
function main(value) {
  console.log(value);
  value();
}

function sub() {
  console.log("iam sub");
}

main(sub);

main(() => {
  console.log("익명함수");
});

// 2. 콜백함수의 활용
function repeat(count, callback) {
  for (let idx = 1; idx <= count; idx++) {
    //console.log(idx);
    callback(idx);
  }
}

repeat(5, function (idx) {
  console.log(idx * 2);
});
