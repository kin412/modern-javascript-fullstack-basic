import { ReactNode, Suspense } from "react";
import Searchbar from "../../components/searchbar";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      {/* 클라이언트 라우터 캐시의 예 */}
      {/* <div>{new Date().toLocaleDateString()}</div> */}
      {/* ⚠️ 여기서 확실하게 감싸줘야 / 페이지 빌드 에러가 사라집니다! */}
      <Suspense fallback={<div>Loading...</div>}>
        <Searchbar />
      </Suspense>
      {children}
    </div>
  );
}
