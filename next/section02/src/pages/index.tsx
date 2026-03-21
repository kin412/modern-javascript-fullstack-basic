//import "./index.css"; //넥스트는 이렇게 하면 오류남. _app.tsx 컴포넌트에서는 최상위부모이기 때문에 가능.
//css module을 사용해야함.
//@ 경로는 src임. tsconfig.json에 설정되어있음
import SearchableLayout from "@/components/searchable-layout";
import style from "./index.module.css";
import { ReactNode } from "react";
import books from "@/mock/books.json";
import BookItem from "@/components/book-item";

export default function Home() {
  //return <h1 style={{ color: "red" }}>인덱스</h1>;
  return (
    <div className={style.container}>
      <section>
        <h3>지금 추천하는 도서</h3>
        {books.map((book) => (
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
