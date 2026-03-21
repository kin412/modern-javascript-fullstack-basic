//import "./index.css"; //넥스트는 이렇게 하면 오류남. _app.tsx 컴포넌트에서는 최상위부모이기 때문에 가능.
//css module을 사용해야함.
//@ 경로는 src임. tsconfig.json에 설정되어있음
import SearchableLayout from "@/components/searchable-layout";
import style from "./index.module.css";
import { ReactNode, useEffect } from "react";
import books from "@/mock/books.json";
import BookItem from "@/components/book-item";
import { InferGetServerSidePropsType, InferGetStaticPropsType } from "next";
import fetchBooks from "@/lib/fetch-books";
import fetchRandomBooks from "@/lib/fetch-random-books";
import Head from "next/head";

//ssr - 요청마다 실행
//export const getServerSideProps = async () => {
//ssg - 딱한번만 실행
export const getStaticProps = async () => {
  //이게 _app.tsx에 컴포넌트 정보와함께 넘어가는 pageProps 임!
  //서버뜰때(빌드타임) 정적인 부분을 한번 렌더링하고 끝낼때씀

  console.log("인덱스 페이지");

  //병렬도 동시 실행 - promise.all
  const [allBooks, recoBooks] = await Promise.all([
    fetchBooks(),
    fetchRandomBooks(),
  ]);

  //getStaticProps 함수의 리턴값은 props라는 객체 프로퍼티를 포함하는 하나의 객체여야함
  //일종의 프레임워크의 문법이라 생각해야함. 지켜줘야함.
  return {
    props: {
      //data
      allBooks,
      recoBooks,
    },
    //ISR 시 몇초 주기로 이페이지를 다시 생성할지?
    //revalidate: 3,
  };
};

//InferGetServerSidePropsType - getServerSideProps의 반환값타입을 자동 추론
export default function Home({
  //data,
  allBooks,
  recoBooks,
  //}: InferGetServerSidePropsType<typeof getServerSideProps>) {
}: InferGetStaticPropsType<typeof getStaticProps>) {
  //return <h1 style={{ color: "red" }}>인덱스</h1>;
  //console.log(data);

  //getServerSideProps 내부에서는 안되고 브라우저 영역인 그 바깥에서 실행해야함.
  // useEffect(() => {
  //   console.log(window);
  // }, []);

  //console.log(allBooks);

  return (
    <>
      <Head>
        <title>한입북스</title>
        <meta property="og:image" content="/thumbnail.png" />
        <meta property="og:title" content="한입북스" />
        <meta
          property="og:description"
          content="한입 북스에 등록된 도서들을 만나보세요."
        />
      </Head>
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
    </>
  );
}

//화면별 개별 레이아웃 적용
Home.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
