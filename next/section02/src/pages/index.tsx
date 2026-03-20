//import "./index.css"; //넥스트는 이렇게 하면 오류남. _app.tsx 컴포넌트에서는 최상위부모이기 때문에 가능.
//css module을 사용해야함.
import style from "./index.module.css";

export default function Home() {
  //return <h1 style={{ color: "red" }}>인덱스</h1>;
  return (
    <>
      <h1 className={style.h1}>인덱스</h1>
      <h2 className={style.h2}>H2</h2>
    </>
  );
}
