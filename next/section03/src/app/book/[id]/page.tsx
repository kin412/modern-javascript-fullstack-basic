import { notFound } from "next/navigation";
import style from "./page.module.css";

//라우트 세그먼트 옵션 - dynamicParams, generateStaticParams

//이페이지에는 url 파라미터가 존재하면 안될경우.
//generateStaticParams여기에서 리턴하는 케이스이외의 페이지에 접근시 404
//export const dynamicParams = false;

//빌드타임에 풀 라우트 캐시를 만들기위해 동적경로를 만드는 약속된 이름의 함수 generateStaticParams
//페이지 라우터의 getStaticPaths의 앱라우터버전
//주의점
//1. url 파라미터 명시할시 문자열만 가능.
//2. 이걸 설정하면 해당하는 페이지는 무조건 static이 됨.
//그래서 ${process.env.NEXT_PUBLIC_API_SERVER_URL}/book/${id}  이부분도 최초는 동적이겠지만 그 이후는 풀라우트 캐시가 됨.
export function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }, { id: "3" }];
}

async function BookDetail({ bookId }: { bookId: string }) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/book/${bookId}`,
  );
  if (!response.ok) {
    if (response.status === 404) {
      notFound();
    }
    return <div>오류가 발생했습니다...</div>;
  }

  const book = await response.json();

  const { title, subTitle, description, author, publisher, coverImgUrl } = book;

  return (
    <section>
      <div
        className={style.cover_img_container}
        style={{ backgroundImage: `url('${coverImgUrl}')` }}
      >
        <img src={coverImgUrl} />
      </div>
      <div className={style.title}>{title}</div>
      <div className={style.subTitle}>{subTitle}</div>
      <div className={style.author}>
        {author} | {publisher}
      </div>
      <div className={style.description}>{description}</div>
    </section>
  );
}

//리뷰 - 서버액션
//서버 컴포넌트는 상호작용하는 코드가 없고 그냥 정적인 페이지만 만들어서 페이로드로 사용자 한테 던지고
//이벤트가 필요한 부분은 클라이언트 컴포넌트를 하이드레이션해서 입히는거니까 폼 날리는것도
//클라이언트에 이벤트처리한다고 넣으면 노출되니까 노출안되게 하면서 이벤트도 입히는게 서버액션
function ReviewEditor() {
  async function createReviewAction(formData: FormData) {
    "use server"; // 서버 액션 설정
    console.log("server action called");
    console.log(formData);

    const content = formData.get("content")?.toString();
    const author = formData.get("author")?.toString();

    console.log("content : ", content, "author : ", author);
  }

  return (
    <section>
      <form action={createReviewAction}>
        <input name="content" placeholder="리뷰 내용" />
        <input name="author" placeholder="작성자" />
        <button type="submit">작성하기</button>
      </form>
    </section>
  );
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <div className={style.container}>
      <BookDetail bookId={id} />
      <ReviewEditor />
    </div>
  );
}
