import GlobalLoader from "@/components/global-loader";
import supabase from "@/lib/supabase";
import { useIsSessionLoaded, useSession, useSetSession } from "@/store/session";
import { useEffect, type ReactNode } from "react";

export default function SessionProvider({ children }: { children: ReactNode }) {
  const setSession = useSetSession();

  const session = useSession();
  const isSessionLoaded = useIsSessionLoaded();

  useEffect(() => {
    //console.log("111");
    supabase.auth.onAuthStateChange((event, session) => {
      setSession(session);
    });
  }, []);

  // 리덕스 툴킷 버그로 state가 출력되지않아 console.log로 확인
  useEffect(() => {
    console.log("현재 세션 상태:", { session, isSessionLoaded });
  }, [session, isSessionLoaded]); // 값이 바뀔 때마다 실행됨

  //로딩창 테스트를 위해
  //return <GlobalLoader />;
  if (!isSessionLoaded) return <GlobalLoader />;

  return children;
}
