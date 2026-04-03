import { updateTodo } from "@/api/update-todo";
import { QUERY_KEYS } from "@/lib/constants";
import type { Todo } from "@/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useUpdateTodoMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateTodo,
    onMutate: async (updatedTodo) => {
      //낙관적 업데이트
      //html에서는 체크박스를 누르면 그냥 바로 체크가 되지만
      //리액트는 그걸 철저하게 검사? 해서 체크가 안됨. 상태업데이트를 시켜주는걸 낙관적 업데이트

      await queryClient.cancelQueries({
        queryKey: QUERY_KEYS.todo.list,
      });

      const prevTodos = queryClient.getQueryData<Todo[]>(QUERY_KEYS.todo.list);

      queryClient.setQueryData<Todo[]>(QUERY_KEYS.todo.list, (prevTodos) => {
        if (!prevTodos) return [];
        return prevTodos.map((prevTodo) =>
          prevTodo.id === updatedTodo.id
            ? { ...prevTodo, ...updatedTodo }
            : prevTodo,
        );
      });
      //낙관적 업데이트했는데, 처리가 실패한 경우 데이터를 넘겨주기
      //이게 아래의 context로 넘어감
      return {
        prevTodos,
      };
    },
    //낙관적 업데이트했는데, 처리가 실패한 경우
    //error - 발생한 에러 정보 객체
    //variable - mutate 함수 호출했을때 전달했던 매개변수 그대로
    //context - onMutate가 반환하는 값이 그대로 들어옴.
    onError: (error, variable, context) => {
      if (context && context.prevTodos) {
        queryClient.setQueryData<Todo[]>(
          QUERY_KEYS.todo.list,
          context.prevTodos,
        );
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEYS.todo.list,
      });
    },
  });
}
