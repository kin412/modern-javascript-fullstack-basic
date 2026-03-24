import "./globals.css";
import Link from "next/link";
import style from "./layout.module.css";
import { BookData } from "@/types";

//이 레이아웃은 가장 최상단의 레이아웃으로써 이안의 다른 모든 컴포넌트의 부모 컴포넌트이다.
//근데 여기서 서버컴포넌트인 Footer도 book api를 데이터 페칭해서 북갯수를 화면에 뿌려주고
//search의 page.tsx도 book api를 호출해 데이터 페칭해서 조회된 전체 북 리스트를 화면에 뿌려준다.
//이럴 경우 한번의 요청에 같은 book api를 두번 호출하는 것아닌가??? 이것을 해결하기 위해 리퀘스트 메모이제이션을 사용한다.
//이건 요청을 묶어주는 것이므로 만약 데이터 캐싱이 되어있다면 백엔드 서버도 안가도 된다.
//데이터캐싱과 리퀘스트 메모이제이션은 비슷해보이지만, 그리고 연달아 나오지만 분명한 차이가 있으므로 이를 생각해야한다.
async function Footer() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/book`,
    { cache: "force-cache" },
  );
  if (!response.ok) {
    return <div>제작 @kin412</div>;
  }

  const books: BookData[] = await response.json();
  const bookCount = books.length;

  return (
    <footer>
      <div>제작 @kin412</div>
      <div>{bookCount}개의 도서가 등록되어 있습니다.</div>
    </footer>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className={style.container}>
          <header>
            <Link href={"/"}>📚 ONEBITE BOOKS</Link>
          </header>
          <main>{children}</main>
          {/* <footer>제작 @kin412</footer> */}
          <Footer />
        </div>
        <div id="modal-root"></div>
      </body>
    </html>
  );
}
