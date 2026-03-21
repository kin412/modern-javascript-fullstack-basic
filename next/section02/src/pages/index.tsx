//import "./index.css"; //넥스트는 이렇게 하면 오류남. _app.tsx 컴포넌트에서는 최상위부모이기 때문에 가능.
//css module을 사용해야함.
//@ 경로는 src임. tsconfig.json에 설정되어있음
import SearchableLayout from "@/components/searchable-layout";
import style from "./index.module.css";
import { ReactNode, useEffect } from "react";
import books from "@/mock/books.json";
import BookItem from "@/components/book-item";
import { InferGetServerSidePropsType } from "next";
import fetchBooks from "@/lib/fetch-books";
import fetchRandomBooks from "@/lib/fetch-random-books";

export const getServerSideProps = async () => {
  //그냥 getServerSideProps 이함수명 영역은 서버영역이라 생각하면 편함
  //사전렌더링 과정에서 딱한번만 서버측에서 실행되는 함수.
  //이게 _app.tsx에 컴포넌트 정보와함께 넘어가는 pageProps 임!
  //컴포넌트보다 먼저 실행되어서, 해당 컴포넌트에 필요한 데이터를 불러오는 함수

  //이로그는 서버쪽에 찍히지 브라우저에는 찍히지 않는다.
  console.log("서버사이드프롭스에요.");

  //window.location; // 에러. window는 브라우저 함수인데, 서버는 브라우저가 아니므로 쓸수 없음. undefind가 나옴.

  //const data = "hello";

  //const allBooks = await fetchBooks();
  //const recoBooks = await fetchRandomBooks();

  //병렬도 동시 실행 - promise.all
  const [allBooks, recoBooks] = await Promise.all([
    fetchBooks(),
    fetchRandomBooks(),
  ]);

  //getServerSideProps 함수의 리턴값은 props라는 객체 프로퍼티를 포함하는 하나의 객체여야함
  //일종의 프레임워크의 문법이라 생각해야함. 지켜줘야함.
  return {
    props: {
      //data
      allBooks,
      recoBooks,
    },
  };
};

//InferGetServerSidePropsType - getServerSideProps의 반환값타입을 자동 추론
export default function Home({
  //data,
  allBooks,
  recoBooks,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  //return <h1 style={{ color: "red" }}>인덱스</h1>;
  //console.log(data);

  //getServerSideProps 내부에서는 안되고 브라우저 영역인 그 바깥에서 실행해야함.
  // useEffect(() => {
  //   console.log(window);
  // }, []);

  console.log(allBooks);

  return (
    <div className={style.container}>
      <section>
        <h3>지금 추천하는 도서</h3>
        {recoBooks.map((book) => (
          <BookItem key={book.id} {...book} />
        ))}
      </section>
      <section>
        <h3>등록된 모든 도서</h3>
        {books.map((book) => (
          <BookItem key={book.id} {...book} />
        ))}
      </section>
    </div>
  );
}

//화면별 개별 레이아웃 적용
Home.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
