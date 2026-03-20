import "@/styles/globals.css";
import type { AppProps } from "next/app";

//루트 컴포넌트. 모든 페이지 역할을 하는 컴포넌트의 부모 컴포넌트
//{ Component, pageProps }: AppProps - Component - 페이지역할을 할 컴포넌트, pageProps- 그페이지에 전달할 props
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <header>글로벌 헤더</header>
      <Component {...pageProps} />
    </>
  );
}
