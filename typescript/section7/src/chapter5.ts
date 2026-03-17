/*
프로미스
*/

import { resolve } from "node:dns";

//promise에 제네릭을 선언하면 저장되는 result값의 타입을 지정할 수 있다.
//reject는 지정할수 없다. (parameter) reject: (reason?: any) => void
const promise = new Promise<number>((resolve, reject) => {
  setTimeout(() => {
    //resolve(20);
    reject("--때문에 실패");
  }, 3000);
});

promise.then((response) => {
  console.log(response * 10);
});

promise.catch((err) => {
  if (typeof err === "string") {
    console.log(err);
  }
});

/*
프로미스를 반환하는 함수의 타입을 정의
*/

interface Post {
  id: number;
  title: string;
  content: string;
}

//둘중 하나만 제네릭을 하면 해결됨. 하지만 보통 선언부에 선언하는게 가독성이 더좋음. 바로위에 보이니까
function fetchPost(): Promise<Post> {
  return new Promise<Post>((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: 1,
        title: "게시글제목",
        content: "게시글 컨텐츠",
      });
    }, 3000);
  });
}

const postRequest = fetchPost();

postRequest.then((post) => {
  post.id;
});
