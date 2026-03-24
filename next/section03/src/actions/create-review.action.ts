//리뷰 - 서버액션
//서버 컴포넌트는 상호작용하는 코드가 없고 그냥 정적인 페이지만 만들어서 페이로드로 사용자 한테 던지고
//이벤트가 필요한 부분은 클라이언트 컴포넌트를 하이드레이션해서 입히는거니까 폼 날리는것도
//클라이언트에 이벤트처리한다고 넣으면 노출되니까 노출안되게 하면서 이벤트도 입히는게 서버액션

// 서버 액션 설정. 별도파일로 분리했으므로 여기에
//분리했다 하더라도, use client라면 사용자에게 api나 계산이나 이런게 노출되므로
//노출되지 않기위해 분리했더라도 서버액션으로 설정한다.
"use server";

import { revalidatePath } from "next/cache";

export async function createReviewAction(formData: FormData) {
  //"use server"; // 서버 액션 설정. tsx파일에서 다른 컴포넌트 안에있었다면 여기에.
  console.log("server action called");
  console.log(formData);

  const bookId = formData.get("bookId")?.toString();
  const content = formData.get("content")?.toString();
  const author = formData.get("author")?.toString();

  console.log("bookId : ", bookId, "content : ", content, "author : ", author);

  if (!bookId || !content || !author) {
    return;
  }

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_SERVER_URL}/review`,
      {
        method: "POST",
        body: JSON.stringify({ bookId, content, author }),
      },
    );
    console.log("respone.status : ", response.status);
    //넥스트 서버가 해당 경로의 페이지를 재검증, 즉 재생성 하게됨. - ISR 온디맨드
    //서버 컴포넌트나 서버 액션에서만 사용가능
    //이페이지에 포함된 모든 컴포넌트의 풀라우트캐시와 데이터 캐시가 삭제(PURGE)됨.
    revalidatePath(`/book/${bookId}`);
  } catch (err) {
    console.log(err);
    return;
  }
}
