import { ReactNode, Suspense } from "react";
import Searchbar from "../../components/searchbar";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      {/* 2. useSearchParams를 쓰는 컴포넌트를 Suspense로 감쌉니다. */}
      <Suspense fallback={<div>Loading...</div>}>
        <Searchbar />
      </Suspense>
      {children}
    </div>
  );
}
