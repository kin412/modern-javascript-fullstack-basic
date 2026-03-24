import Link from "next/link";
import { ReactNode } from "react";

export default function Layout({
  children,
  sidebar,
  feed,
}: {
  children: ReactNode;
  sidebar: ReactNode;
  feed: ReactNode;
}) {
  return (
    <div>
      {/* 패러렐 라우트설정을 해두었기 때문에 해당 링크를 눌러도 전체페이지가 바뀌지않고 feed만 바뀐다. */}
      {/* 하지만 링크 이동시는 패러렐은 링크이동일때만 가능하다. 링크이동일때는 이전 페이지의 구조를 아니까 가능한데
      주소로 직접 접근할경우 이전 페이지의 구조가 없기 때문에 404가 뜬다. 
      이런경우를 위해 default.tsx라는 약속된 이름의 페이지를 각각의 경로에 설정한다. */}
      <div>
        <Link href={"/parallel"}>parallel</Link>
        &nbsp;
        <Link href={"/parallel/setting"}>parallel/setting</Link>
      </div>
      {sidebar}
      {feed}
      {children}
    </div>
  );
}
