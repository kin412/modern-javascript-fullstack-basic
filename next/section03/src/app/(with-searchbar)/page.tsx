import BookItem from "@/components/book-item";
import style from "./page.module.css";
import { BookData } from "@/types";

async function AllBooks() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/book`,
  );
  if (!response.ok) {
    return <div>오류가 발생했습니다...</div>;
  }
  const allBooks: BookData[] = await response.json();
  //console.log(allBooks);

  return (
    <div>
      {allBooks.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  );
}

async function RecoBooks() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/book/random`,
  );
  if (!response.ok) {
    return <div>오류가 발생했습니다.</div>;
  }

  const recoBooks: BookData[] = await response.json();
  return (
    <div>
      {recoBooks.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  );
}

//page router에서는 getserversideprops 이런 함수를통해서 리턴한것을 화면을 담당하는 컴포넌트가 props로 받아서
//그게 필요한 컴포넌트까지 context로 전달하는 일이 필요했지만
//app router에서는 그냥 비동기 함수로 만들면된다.
//page router는 비동기로 만들수 없음.
export default function Home() {
  return (
    <div className={style.container}>
      <section>
        <h3>지금 추천하는 도서</h3>
        {/* {books.map((book) => (
          <BookItem key={book.id} {...book} />
        ))} */}
        <RecoBooks />
      </section>
      <section>
        <h3>등록된 모든 도서</h3>
        {/* {allBooks.map((book) => (
          <BookItem key={book.id} {...book} />
        ))} */}
        <AllBooks />
      </section>
    </div>
  );
}
