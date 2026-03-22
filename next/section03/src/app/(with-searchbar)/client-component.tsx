"use client";

import { ReactNode } from "react";

//이렇게 쓰면 서버컴포넌트가 클라이언트 컴포넌트로 변함. 권장하지 않음.
//import ServerComponent from "./server-component";

//클라이언트 컴포넌트에서 서버컴포넌트를 어쩔수 없이 사용해야한다면 props
//이렇게 사용할 시 서버컴포넌트는 클라이언트 컴포넌트로 변하지 않음.
export default function ClientComponent({ children }: { children: ReactNode }) {
  console.log("클라이언트 컴포넌트!");
  //클라이언트 컴포넌트에서 서버컴포넌트를 사용할때 이렇게 쓰는건 권장하지 않음.
  //return <ServerComponent />;
  return <div>{children}</div>;
}
