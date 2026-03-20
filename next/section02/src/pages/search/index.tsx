//next/router - pageRouter
//next/navigator - appRouter
import { useRouter } from "next/router";

//page폴더 자체가 최상위 요청경로다. 스프링의 requestmapping("/")
//search폴더에 index를 만들면 만든 것 만으로 localhost:3000/search 요청 시 index파일을 호출한다.
export default function Page() {
  const router = useRouter();

  console.log(router);
  //쿼리스트링 꺼내오기
  //const q = router.query.q;
  const { q } = router.query;

  return <h1>search q: {q}</h1>;
}
