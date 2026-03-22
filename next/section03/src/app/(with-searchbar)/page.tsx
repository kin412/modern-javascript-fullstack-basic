//특정 컴포넌트를 클라이언트 컴포넌트로 설정할 때
//"use client";

//import { useEffect } from "react";
import ClientComponent from "../../components/client-component";
import styles from "./page.module.css";
import ServerComponent from "../../components/server-component";

export default function Home() {
  //app router는 기본적으로 서버컴포넌트 설정이 되어있으므로 이곳에 작성되는 것들은 브라우저에 보이지 않는다.
  //console.log("Home 컴포넌트 실행");

  //const secretKey = "qwer1234";

  //이렇게 브라우저에서만 동작하는 훅스를 사용할 경우 런타임 에러가 발생함
  //useEffect(() => {});

  return (
    <div className={styles.page}>
      인덱스 페이지
      <ClientComponent>
        <ServerComponent />
      </ClientComponent>
    </div>
  );
}
