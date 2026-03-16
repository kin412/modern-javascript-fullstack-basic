function add10(num) {
  //비동기 작업을 실제 진행할 콜백함수를 인자로 넣어줌.
  const promise = new Promise((resolve, reject) => {
    //비동기 작업 실행하는 함수
    //executor

    //promise객체의 상태를 성공했다. - fulfilled로 변경함.
    //매개변수는 promiseResult
    //resolve("안녕22");

    //promis객체의 상태를 실패했다. - rejected로 변경함.
    //매개변수는 promiseResult
    //reject("왜 실패했는지 이유....");

    setTimeout(() => {
      if (typeof num === "number") {
        resolve(num + 10); //promiseResult에 값저장
      } else {
        reject("num이 숫자가 아닙니다.");
      }
    }, 2000);
  });

  return promise;
}

//then은 원본 promise를 반환하므로 체이닝통해 연속적인 처리를 할수 있다.
//하지만 이런식으로 계속 호출했다가는 또다시 콜백지옥의 코드가 된다.
//그래서 안에서 새로생성한 promise를 반환하면 원본 promise가 아닌 명시한 promise를 반환한다.
//그럼 체이닝으로 다음에 나오는 then(res)에 명시한 promise가 전달되어,
//작업을 계속한다.
//하지만 리턴을 하지 않을 경우, 일단 문제는 안생겼으니까 resolve(); 처리는 하는데
const p = add10(0);
p.then((result) => {
  console.log(result);

  const newP = add10(result);
  newP.then((result) => {
    console.log(result);
  });

  return newP;
}).then((result) => {
  console.log(result);
});

//then 메서드 -> 그후에
// promise가 성공해서 resolve가 실행된 뒤에 실행되는 메서드
// resolve의 매개변수 promiseResult를 매개변수로 받음.
// promise가 실패해서 reject가 실행되면 then이 아닌 catch가 실행됨.
// then은 promise를 반환함. 그래서 체이닝이 가능
// promise
//   .then((value) => {
//     console.log("then result : ", value);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//reject버전의 then이라 보면 됨
// promise.catch((error) => {
//   console.log(error);
// });

// setTimeout(() => {
//   console.log(promise);
// }, 3000);
