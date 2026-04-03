import { fetchTodoById } from "@/api/fetch-todo-by-id";
import { QUERY_KEYS } from "@/lib/constants";
import { useQuery } from "@tanstack/react-query";

export function useTodoDataById(id: string, type: "LIST" | "DETAIL") {
  return useQuery({
    queryFn: () => fetchTodoById(id),
    //queryKey: ["todos", id],
    queryKey: QUERY_KEYS.todo.detail(id),
    enabled: type === "DETAIL", //detail일때만 리페칭 되도록.

    //stale되는데 걸리는 시간. fresh가 유지되는 시간
    //주식과 같이 찰나의 시간이 중요한 서비스가 아니라면 보통 5초 - 30초 정도가 국룰임
    //staleTime: 5000,
    //안쓰는 데이터(inactive상태가 된 데이터)는 default gcTime이 300000 - 5분이다.
    //gcTime은 계속 데이터가 캐싱만되고 접근을 더이상 안하는 경우 메모리 낭비이기때문에 이를 자동으로 delete하기위해 사용한다.
    //gcTime: 5000,

    //리페칭
    //refetchInterval: 1000, //1000 = 1초
    // refetchOnMount: false, //mount 시점에 stale이 되어도 데이터를 리페칭하지않음.
    // refetchOnWindowFocus: false, //사용자가 이탭에 다시 돌아왔을때
    // refetchOnReconnect: false, // 인터넷 연결이 끊어졌다가 다시 연결 되었을때
    // refetchInterval: false, // 특정시간을 주기로
  });
}
