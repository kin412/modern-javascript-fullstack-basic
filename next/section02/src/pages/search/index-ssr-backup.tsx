//next/router - pageRouter
//next/navigator - appRouter
import SearchableLayout from "@/components/searchable-layout";
import { useRouter } from "next/router";
import { ReactNode } from "react";
//import books from "@/mock/books.json";
import BookItem from "@/components/book-item";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import fetchBooks from "@/lib/fetch-books";
import { BookData } from "@/types";

//쿼리스트링을 getServerSideProps 에서 읽을 때
//getServerSideProps - 현재 브라우저로부터 받은 요청에 대한 모든 정보가 들어있음
export const getServerSideProps = async (
  context: GetServerSidePropsContext,
) => {
  //console.log(context);
  const q = context.query.q;
  const books = await fetchBooks(q as string);

  return {
    props: {
      books,
    },
  };
};

//page폴더 자체가 최상위 요청경로다. 스프링의 requestmapping("/")
//search폴더에 index를 만들면 만든 것 만으로 localhost:3000/search 요청 시 index파일을 호출한다.
export default function Page({
  books,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  // const router = useRouter();
  // console.log(router);
  // //쿼리스트링 꺼내오기
  // //const q = router.query.q;
  // const { q } = router.query;
  // return <h1>search q: {q}</h1>;
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
