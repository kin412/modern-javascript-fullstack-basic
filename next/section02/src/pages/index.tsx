//import "./index.css"; //넥스트는 이렇게 하면 오류남. _app.tsx 컴포넌트에서는 최상위부모이기 때문에 가능.
//css module을 사용해야함.
import SearchableLayout from "@/components/searchable-layout";
import style from "./index.module.css";
import { ReactNode } from "react";

export default function Home() {
  //return <h1 style={{ color: "red" }}>인덱스</h1>;
  return (
    <>
      <h1 className={style.h1}>인덱스</h1>
      <h2 className={style.h2}>H2</h2>
    </>
  );
}

//화면별 개별 레이아웃 적용
Home.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
