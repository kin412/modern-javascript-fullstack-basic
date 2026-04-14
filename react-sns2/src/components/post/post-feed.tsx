import { usePostData } from "@/hooks/queries/use-post-data";
import Fallback from "../fallback";
import Loader from "../loader";
import PostItem from "./post-item";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useInfinitePostsData } from "@/hooks/queries/use-infinite-posts-data";

export default function PostFeed() {
  //const { data, error, isPending } = usePostData();
  const { data, error, isPending, fetchNextPage, isFetchingNextPage } =
    useInfinitePostsData();
  const { ref, inView } = useInView();

  useEffect(() => {
    //console.log(inView);
    if (inView) {
      //무한 스크롤 데이터 추가
      fetchNextPage();
    }
  }, [inView]);

  if (error) return <Fallback />;
  if (isPending) return <Loader />;

  return (
    <div className="flex flex-col gap-10">
      {/* {data.map((post) => (
        <PostItem key={post.id} {...post} />
      ))} */}
      {data.pages.map((page) =>
        page.map((postId) => <PostItem key={postId} postId={postId} />),
      )}
      {isFetchingNextPage && <Loader />}

      {/* 무한 스크롤 감지를 위한 빈 div 태그 */}
      <div ref={ref}></div>
    </div>
  );
}
