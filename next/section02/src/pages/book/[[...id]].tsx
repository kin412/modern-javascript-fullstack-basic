// [...id].tsx
// ... 스프레드 사용시 1232/53454/13 이런걸 잡을수 있다.
// 저 슬래시로 나뉜 구간구간을 segment라 함.
//이렇게 파일명을 잡는 경우를  catch-all-segment 라함.
//이거 하나로 [id].tsx도 대응이 가능함. 단, /book/ 이렇게 아이디가 아무것도 없는거는 대응이 안됨.
// /book/ 이것도 대응하기 위해선 []로 한번더 감싸서 [[...id]].tsx 이런식으로 만들면 됨. -> optional catch all segment

import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  const { id } = router.query;
  console.log(router);
  return <h1>Book catch-all-segment {id}</h1>;
}
