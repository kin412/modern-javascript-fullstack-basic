//리뷰 작성 클릭 시 처리가 길어져 화면이 아무반응 없을때를 대비하기위해
//사용자의 중복요청을 막기위해
//클라이언트에서 서버액션을 사용한다.
"use client";

import style from "./review-editor.module.css";
import { createReviewAction } from "@/actions/create-review.action";
import { useActionState, useEffect } from "react";

export default function ReviewEditor({ bookId }: { bookId: string }) {
  //옮기기전에 서버액션이 여기에있었다면 그 함수 안에 use server
  // async function createReviewAction(formData: FormData) {
  //   "use server"; // 서버 액션 설정

  const [state, formAction, isPending] = useActionState(
    createReviewAction,
    null,
  );

  useEffect(() => {
    if (state && !state.status) {
      alert(state.error);
    }
  }, [state]);

  return (
    <section>
      {/* <form className={style.form_container} action={createReviewAction}> */}
      <form className={style.form_container} action={formAction}>
        {/* required - 입력강제 - 필수 입력 */}
        {/* hidden만 붙이면 값을 설정하는 onchange가 없다고 넥스트가 협박함. 그래서 readonly해야함 */}
        <input name="bookId" value={bookId} hidden readOnly />
        <textarea
          disabled={isPending} // useaction으로 서버액션 부른동안은 수정불가하게
          required
          name="content"
          placeholder="리뷰 내용"
        />
        <div className={style.submit_container}>
          <input
            disabled={isPending}
            required
            name="author"
            placeholder="작성자"
          />
          <button disabled={isPending} type="submit">
            {/* useaction으로 서버액션부른동안은 작성하기 더 못하게 */}
            {isPending ? "..." : "작성하기"}
          </button>
        </div>
      </form>
    </section>
  );
}
