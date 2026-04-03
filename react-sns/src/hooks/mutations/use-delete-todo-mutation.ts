import { deleteTodo } from "@/api/delete-todo";
import { QUERY_KEYS } from "@/lib/constants";
import type { Todo } from "@/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useDeleteTodoMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteTodo,

    // 1. 캐시 무효화 -> invalidateQueries <- 이건 다가져오니까 아닌듯?
    // 둘중 정답은 없지만..
    // 2. 수정 요청의 응답값 활용 -> onSuccess <- 삭제는 이게 어울리는듯함.
    // 3. 낙관적 업데이트 -> onMutate
    onSuccess: (deletedTodo) => {
      queryClient.setQueryData<Todo[]>(QUERY_KEYS.todo.list, (prevTodos) => {
        if (!prevTodos) return [];
        return prevTodos.filter((prevTodo) => prevTodo.id !== deletedTodo.id);
      });
    },
  });
}
