/*
인덱스드 액세스 타입
*/

// interface Post {
//   title: string;
//   content: string;
//   author: {
//     id: number;
//     name: string;
//     age: number;
//   };
// }

//배열
type PostList = {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    age: number;
  };
}[];

//function printAuthorInfo(author: { id: number; name: string; age: number }) {
// 주의: post안의 author는 문자열이 아니라 타입임을 기억할것.
//Post["author"]["id"] 이런 중첩사용으로 특정 프로퍼티만 추출할수도 있음
// function printAuthorInfo(author: Post["author"]) {
//   console.log(`${author.name}-${author.id}`);
// }

//배열
function printAuthorInfo(author: PostList[number]["author"]) {
  console.log(`${author.name}-${author.id}`);
}

// const post: Post = {
//   title: "게시글제목",
//   content: "게시글 본문",
//   author: {
//     id: 1,
//     name: "kin",
//     age: 35,
//   },
// };

//배열
const post: PostList[number] = {
  title: "게시글제목",
  content: "게시글 본문",
  author: {
    id: 1,
    name: "kin",
    age: 35,
  },
};

printAuthorInfo(post.author);

type Tup = [number, string, boolean];

type Tup0 = Tup[0];

type Tup1 = Tup[1];

type Tup2 = Tup[2];

type TupNum = Tup[number];
