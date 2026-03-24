import style from "./review-editor.module.css";
import { createReviewAction } from "@/actions/create-review.action";

export default function ReviewEditor({ bookId }: { bookId: string }) {
  //옮기기전에 서버액션이 여기에있었다면 그 함수 안에 use server
  // async function createReviewAction(formData: FormData) {
  //   "use server"; // 서버 액션 설정

  return (
    <section>
      <form className={style.form_container} action={createReviewAction}>
        {/* required - 입력강제 - 필수 입력 */}
        {/* hidden만 붙이면 값을 설정하는 onchange가 없다고 넥스트가 협박함. 그래서 readonly해야함 */}
        <input name="bookId" value={bookId} hidden readOnly />
        <textarea required name="content" placeholder="리뷰 내용" />
        <div className={style.submit_container}>
          <input required name="author" placeholder="작성자" />
          <button type="submit">작성하기</button>
        </div>
      </form>
    </section>
  );
}
