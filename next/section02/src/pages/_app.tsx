import GlobalLayout from "@/components/global-layout";
import "@/styles/globals.css"; //다크모드가 기본적으로 여기서 설정되어있음
import { NextPage } from "next";
import type { AppProps } from "next/app";
import { ReactNode } from "react";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactNode) => ReactNode;
};

//루트 컴포넌트. 모든 페이지 역할을 하는 컴포넌트의 부모 컴포넌트
//{ Component, pageProps }: AppProps - Component - 페이지역할을 할 컴포넌트, pageProps- 그페이지에 전달할 props
export default function App({
  Component,
  pageProps,
}: AppProps & {
  Component: NextPageWithLayout;
}) {
  //console.log(Component.getLayout);

  //getLayout이 없는 페이지라면-> undefind라면-> ??
  const getLayout = Component.getLayout ?? ((page: ReactNode) => page);

  return (
    <GlobalLayout>
      {/* <Component {...pageProps} /> */}
      {getLayout(<Component {...pageProps} />)}
    </GlobalLayout>
  );
}
