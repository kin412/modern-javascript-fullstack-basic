import { createTodo } from "@/api/create-todo";
import { QUERY_KEYS } from "@/lib/constants";
import type { Todo } from "@/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useCreateTodoMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createTodo,
    onMutate: () => {}, //이벤트 핸들러 - 요청 시작시
    onSettled: () => {}, //요청 종료시
    //요청 성공시
    onSuccess: (newTodo) => {
      //window.location.reload();

      //todos 캐시 무효화 - 데이터 리페칭
      //   queryClient.invalidateQueries({
      //     //queryKey: ["todos"],
      //     queryKey: QUERY_KEYS.todo.list,
      //   });
      // 데이터 리페칭 없이 캐시 데이터 직접 수정
      // queryClient.setQueryData<Todo[]>(QUERY_KEYS.todo.list, (prevTodos) => {
      //   if (!prevTodos) return [newTodo];
      //   return [...prevTodos, newTodo];
      // });
      queryClient.setQueryData<Todo>(
        QUERY_KEYS.todo.detail(newTodo.id),
        newTodo,
      );
      queryClient.setQueryData<string[]>(
        QUERY_KEYS.todo.list,
        (prevTodoIds) => {
          if (!prevTodoIds) return [newTodo.id];
          return [...prevTodoIds, newTodo.id];
        },
      );
    },
    //요청 실패시
    onError: (error) => {
      window.alert(error.message);
    },
  });
}
