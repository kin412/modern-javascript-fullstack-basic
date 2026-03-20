//page폴더 자체가 최상위 요청경로다. 스프링의 requestmapping("/")
//search폴더에 index를 만들면 만든 것 만으로 localhost:3000/search 요청 시 index파일을 호출한다.
export default function Page() {
  return <h1>search/setting/index.tsx</h1>;
}
