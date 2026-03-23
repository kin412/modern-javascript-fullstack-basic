import books from "@/mock/books.json";
import BookItem from "@/components/book-item";
import { BookData } from "@/types";
import { delay } from "@/util/delay";
import { Suspense } from "react";

//export const dynamic = "force-static";

async function SearchResult({ q }: { q: string }) {
  //const { q } = await searchParams;

  //스트리밍. 딜레이동안 책목록외에 다른것들은 다 제대로 뜨지만 책목록은 loading.tsx가 뜨게됨.
  await delay(1500);
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/book/search?q=${q}`,
    //force-cache를 하게되면 q가 바뀜에 따라 동적으로 검색되는 것은 어쩔수가 없기때문에 static 페이지로 바꿀수는 없겠지만
    //최소한 동일한 검색조건 q에 대해서는 데이터 캐시가 가능하다.
    //그리고 이렇게 데이터 캐시가 되면, 이파일의 다른 곳에서 동적인것이 없는경우는 해당 페이지도 빌드타임에 풀라우트 캐시가 적용될수 있음.
    { cache: "force-cache" },
  );
  if (!response.ok) {
    return <div>오류가 발생했습니다...</div>;
  }

  const books: BookData[] = await response.json();

  return (
    <div>
      {books.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  );
}

export default function Page({
  searchParams,
}: {
  //searchParams: Promise<{ q?: string }>;
  searchParams: { q?: string };
}) {
  return (
    // Suspense 로 감싸면 자동으로 스트리밍이 됨. 미완성 상태.
    <Suspense
      key={searchParams.q || ""} //키가 바뀌면 컴포넌트를 새롭게 렌더링함.
      fallback={<div>suspense fallback Loading...</div>}
    >
      <SearchResult q={searchParams.q || ""} />
    </Suspense>
  );
}
