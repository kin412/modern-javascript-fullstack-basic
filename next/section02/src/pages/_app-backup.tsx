import "@/styles/globals.css"; //다크모드가 기본적으로 여기서 설정되어있음
import type { AppProps } from "next/app";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

//루트 컴포넌트. 모든 페이지 역할을 하는 컴포넌트의 부모 컴포넌트
//{ Component, pageProps }: AppProps - Component - 페이지역할을 할 컴포넌트, pageProps- 그페이지에 전달할 props
export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const onClickButton = () => {
    router.push("/test");
    // router.replace  뒤로가기 방지
    // router.back 뒤로가기
  };

  //프리페칭 router.prefetch - 해당 페이지를 사전 준비 시킨다.
  //useEffect에 빈배열을 두번째 인자로 넣으면, 컴포넌트 로딩시 한번만 실행된다.
  useEffect(() => {
    router.prefetch("/test");
  }, []);

  return (
    <>
      <header>
        <Link href={"/"}>index</Link> &nbsp;
        {/* 이페이지는 많이 이용안할거 같으니까 프리페칭 옵션을 끄는 경우 */}
        <Link href={"/search"} prefetch={false}>
          search
        </Link>
        &nbsp;
        <Link href={"/book/1"}>book/1</Link>&nbsp;
        <div>
          <button onClick={onClickButton}>/test 페이지로 이동</button>
        </div>
      </header>
      <Component {...pageProps} />
    </>
  );
}
