//next/router - pageRouter
//next/navigator - appRouter
import SearchableLayout from "@/components/searchable-layout";
import { useRouter } from "next/router";
import { ReactNode, useEffect, useState } from "react";
//import books from "@/mock/books.json";
import BookItem from "@/components/book-item";
import {
  GetServerSidePropsContext,
  GetStaticPropsContext,
  InferGetServerSidePropsType,
} from "next";
import fetchBooks from "@/lib/fetch-books";
import { BookData } from "@/types";

// export const getStaticProps = async (context: GetStaticPropsContext) => {
//   //console.log(context);
//   //GetStaticPropsContext는 query 속성이 없음.
//   //빌드타임에 딱한번 실행되기 때문에 그때는 쿼리스트링을 알수가 없어서.
//   //그래서 쿼리스트링을 쓰지못하고 리액트때 했던 props방식으로 데이터 페칭을 해줘야함
//   const q = context.query.q;
//   const books = await fetchBooks(q as string);

//   return {
//     props: {
//       books,
//     },
//   };
// };

//
// export default function Page({
//   books,
// }: InferGetServerSidePropsType<typeof getServerSideProps>) {
// getStaticProps 는 쿼리스트링을 받아올수 없으므로 컴포넌트 내부에서 리액트로 하듯이 router와 effect사용
export default function Page() {
  const [books, setBooks] = useState<BookData[]>([]);
  const router = useRouter();
  const q = router.query.q;

  const fetchSearchResult = async () => {
    const data = await fetchBooks(q as string);
    setBooks(data);
  };

  useEffect(() => {
    if (q) {
      //검색결과를 불러오는 로직
      fetchSearchResult();
    }
  }, [q]);

  return (
    <div>
      {books.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  );
}

Page.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
