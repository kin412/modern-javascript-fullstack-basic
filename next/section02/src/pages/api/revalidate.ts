import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

//ISR - On Demend - 최초에만 서버에서 조립. 이후에는 캐싱된걸 사용자들에게 보여줌.
//이게 대세임.
//누가 막 호출해서 서버에 부담을 줄수 있으므로 실무에서는 비밀번호 설정이 필수
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    await res.revalidate("/"); // 페이지 재생성
    return res.json({ revalidate: true }); // 재생성이 정상적으로 되었다면 true
  } catch (err) {
    res.status(500).send("Revalidation Failed");
  }
}
