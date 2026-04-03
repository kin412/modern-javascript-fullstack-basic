import { createTodo } from "@/api/create-todo";
import { useMutation } from "@tanstack/react-query";

export function useCreateTodoMutation() {
  return useMutation({
    mutationFn: createTodo,
    onMutate: () => {}, //이벤트 핸들러 - 요청 시작시
    onSettled: () => {}, //요청 종료시
    //요청 성공시
    onSuccess: () => {
      window.location.reload();
    },
    //요청 실패시
    onError: (error) => {
      window.alert(error.message);
    },
  });
}
