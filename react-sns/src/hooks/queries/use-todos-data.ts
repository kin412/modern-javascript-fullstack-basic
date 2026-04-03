import { fetchTodos } from "@/api/fetch-todos";
import { QUERY_KEYS } from "@/lib/constants";
import type { Todo } from "@/types";
import { useQuery, useQueryClient } from "@tanstack/react-query";

export function useTodosData() {
  const queryClient = useQueryClient();
  return useQuery({
    //queryFn: fetchTodos,
    //queryKey: ["todos"],
    //캐시 정규화
    queryFn: async () => {
      const todos = await fetchTodos();

      //각 데이터 만들기
      todos.forEach((todo) => {
        queryClient.setQueryData<Todo>(QUERY_KEYS.todo.detail(todo.id), todo);
      });

      //list에서는 id만 들고있기
      return todos.map((todo) => todo.id);
    },

    queryKey: QUERY_KEYS.todo.list,
  });
}
