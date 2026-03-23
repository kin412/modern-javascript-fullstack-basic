import BookItem from "@/components/book-item";
import style from "./page.module.css";
import { BookData } from "@/types";

async function AllBooks() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/book`,
    //{ cache: "no-store" }, //캐싱되지 않음. 매요청마다 새롭게 불러옴 -> 15버전부터는 이게 기본 옵션임.
    { cache: "force-cache" },
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
    //항상 캐싱 됨. 처음 백엔드서버에서 응답이오면 해당 데이터를 set해놓고 있다가
    //브라우저로부터 다시 요청이 올경우 next서버에서 백엔드까지 가지않고 set해놨던 데이터를 hit시켜서 브라우저로 보냄
    //그래서 한번 호출된 이후에는 다시는 백엔드서버를 호출하지 않음
    //{ cache: "force-cache" },

    //기본적으로 force-cache 와 동일하나 지정한 시간이 지난경우
    //일단 요청이 들어오면 기존있던 set해놨던 데이터는 stale(상했다.)상태이기때문에 일단 그거라도 화면에 보내서 빠르게 응답하고
    //stale은 그대로 둘순 없으니 다시 백엔드 서버에서 데이터를 가져와 신선한 데이터를 set하고 다음 응답 부터 최신 데이터로 응답
    { next: { revalidate: 3 } },
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
