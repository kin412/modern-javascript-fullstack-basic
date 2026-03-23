//에러는 클라이언트 컴포넌트로 해야함
//그래야 클라이언트에서 에러가 나던 서버에서 에러가 나던 체킹가능
"use client";

import { useRouter } from "next/navigation";
import { startTransition, useEffect } from "react";

//현재 발생한 오류는 그냥 error 컴포넌트에 error란 이름의 props로 들어옴
export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  const router = useRouter();
  useEffect(() => {
    console.log("에러내용 : " + error.message);
  }, [error]);
  return (
    <div>
      <h3>검색 과정에서 오류가 발생했습니다.</h3>
      {/* <button onClick={() => window.location.reload()}>다시 시도</button> */}
      <button
        onClick={() => {
          startTransition(() => {
            router.refresh(); // 현재 페이지에 필요한 서버컴포넌트들을 다시 불러옴
            reset(); //에러 상태를 초기화, 컴포넌트들을 다시 렌더링
          });
        }}
      >
        다시 시도
      </button>
    </div>
  );
}
