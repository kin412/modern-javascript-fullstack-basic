// [...id].tsx
// ... 스프레드 사용시 1232/53454/13 이런걸 잡을수 있다.
// 저 슬래시로 나뉜 구간구간을 segment라 함.
//이렇게 파일명을 잡는 경우를  catch-all-segment 라함.
//이거 하나로 [id].tsx도 대응이 가능함. 단, /book/ 이렇게 아이디가 아무것도 없는거는 대응이 안됨.
// /book/ 이것도 대응하기 위해선 []로 한번더 감싸서 [[...id]].tsx 이런식으로 만들면 됨. -> optional catch all segment

import { useRouter } from "next/router";
import style from "./[id].module.css";
import {
  GetServerSidePropsContext,
  GetStaticPropsContext,
  InferGetServerSidePropsType,
  InferGetStaticPropsType,
} from "next";
import fetchOneBook from "@/lib/fetch-one-book";
import { notFound } from "next/navigation";
import Head from "next/head";

const mockData = {
  id: 1,
  title: "한 입 크기로 잘라 먹는 리액트",
  subTitle: "자바스크립트 기초부터 애플리케이션 배포까지",
  description:
    "자바스크립트 기초부터 애플리케이션 배포까지\n처음 시작하기 딱 좋은 리액트 입문서\n\n이 책은 웹 개발에서 가장 많이 사용하는 프레임워크인 리액트 사용 방법을 소개합니다. 인프런, 유데미에서 5000여 명이 수강한 베스트 강좌를 책으로 엮었습니다. 프런트엔드 개발을 희망하는 사람들을 위해 리액트의 기본을 익히고 다양한 앱을 구현하는 데 부족함이 없도록 만들었습니다. \n\n자바스크립트 기초 지식이 부족해 리액트 공부를 망설이는 분, 프런트엔드 개발을 희망하는 취준생으로 리액트가 처음인 분, 퍼블리셔나 백엔드에서 프런트엔드로 직군 전환을 꾀하거나 업무상 리액트가 필요한 분, 뷰, 스벨트 등 다른 프레임워크를 쓰고 있는데, 실용적인 리액트를 배우고 싶은 분, 신입 개발자이지만 자바스크립트나 리액트 기초가 부족한 분에게 유용할 것입니다.",
  author: "이정환",
  publisher: "프로그래밍인사이트",
  coverImgUrl:
    "https://shopping-phinf.pstatic.net/main_3888828/38888282618.20230913071643.jpg",
};

//ssg - 어떠한 경로들이 존재할수 있는지 지정해야 빌드타임에 이를 참고해서 만듬
//ssg 방식일경우 이게 없으면 에러
export const getStaticPaths = () => {
  return {
    paths: [
      { params: { id: "1" } },
      { params: { id: "2" } },
      { params: { id: "3" } },
    ],
    //폴백옵션 대체, 대비책, 보험 - paths에 정하지 않은 요청이 들어왔을때 어떻게 할것인가?
    //false - path에 지정하지 않은건 404
    //blocking - ssr처럼 서버에서 즉시 생성해서 반환
    //blocking 시에는 백에서 데이터를 불러오는 시간동안 로딩이 생기게됨 => 이걸 해결하기위한 옵션이 다음의 true
    //true - getStaticProps 에서 return에 페이지에 전달하는 데이터가 없는 빈페이지를 즉각 브라우저에 전달. 레이아웃정도만.
    //후에 필요한 데이터를 계산한후 추가로 전송
    fallback: true,
  };
};

//
export const getStaticProps = async (context: GetStaticPropsContext) => {
  //url parameter는 GetServerSidePropsContext.params.id
  //확실히 있다는 !단언을 사용할수 있는것은 애초에 이 [id] 페이지는 id값이 있어야만 들어올수있음
  const id = context.params!.id;
  const book = await fetchOneBook(Number(id));

  //book데이터를 못불러왔다면 자동으로 404로 이동시킴
  if (!book) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      book,
    },
  };
};

export default function Page({
  book,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter();
  //fallback상태에 빠져있을때, 데이터를 백엔드 서버에서 가져오는 중일때
  //fallback상태일때도 seo meta정보 설정
  if (router.isFallback) {
    return (
      <>
        <Head>
          <title>한입북스</title>
          <meta property="og:image" content="/thumbnail.png" />
          <meta property="og:title" content="한입북스" />
          <meta
            property="og:description"
            content="한입 북스에 등록된 도서들을 만나보세요."
          />
        </Head>
        <div>로딩중입니다.</div>
      </>
    );
  }
  if (!book) return "문제가 발생했습니다. 다시시도하세요.";

  const { id, title, subTitle, description, author, publisher, coverImgUrl } =
    book;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="og:image" content={coverImgUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
      </Head>
      <div className={style.container}>
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
      </div>
    </>
  );
}
