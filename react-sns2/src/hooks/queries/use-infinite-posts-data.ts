import { fetchPosts } from "@/api/post";
import { QUERY_KEYS } from "@/lib/constants";
import { useSession } from "@/store/session";
import { useInfiniteQuery, useQueryClient } from "@tanstack/react-query";

const PAGE_SIZE = 5;

export function useInfinitePostsData(authorId?: string) {
  const queryClient = useQueryClient();

  const session = useSession();

  return useInfiniteQuery({
    queryKey: !authorId
      ? QUERY_KEYS.post.list
      : QUERY_KEYS.post.userList(authorId),
    queryFn: async ({ pageParam }) => {
      const from = pageParam * PAGE_SIZE;
      const to = from + PAGE_SIZE - 1;

      const posts = await fetchPosts({
        from,
        to,
        userId: session!.user.id,
        authorId,
      });
      //캐시 정규화
      posts.forEach((post) => {
        queryClient.setQueryData(QUERY_KEYS.post.byid(post.id), post);
      });
      //리턴하는게 queryKey의 캐시데이터, 그러므로 캐시 정규화를 위해 수정
      //return posts;
      return posts.map((post) => post.id);
    },
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage.length < PAGE_SIZE) return undefined;
      return allPages.length;
    },
    // staleTime: 0,
    // gcTime: 5 * 60 * 1000,
    // refetchOnWindowFocus: true,

    //무한스크롤로 불러오는 데이터는 stale상태가 되지않음. -> 자동 리페칭이 일어나지 않게 설정.
    //그럼 리페칭이 안되면 새로운 데이터는 어떻게 갱신 시키나?
    //그것은 데이터 생성, 수정,삭제 시에 갱신되게끔. -> 원하는 타이밍에만
    staleTime: Infinity,
  });
}
