import { useDeleteTodo } from "@/store/todo";
import { Button } from "../ui/button";
import { Link } from "react-router";
import type { Todo } from "@/types";
import { useUpdateTodoMutation } from "@/hooks/mutations/use-update-todo-mutation";
import { useDeleteTodoMutation } from "@/hooks/mutations/use-delete-todo-mutation";
import { useTodoDataById } from "@/hooks/queries/use-todo-data-by-id";

//export default function TodoItem({ id, content, isDone }: Todo) {
export default function TodoItem({ id }: { id: string }) {
  const { data: todo } = useTodoDataById(id, "LIST");
  if (!todo) throw new Error("Todo Data Undefined");
  const { content, isDone } = todo;
  //const deleteTodo = useDeleteTodo();
  //isPending - 삭제중일때 다른 상호작용 막기위해
  const { mutate: deleteTodo, isPending: isDeleteTodoPending } =
    useDeleteTodoMutation();
  const { mutate: updateTodo } = useUpdateTodoMutation();
  const handleDeleteClick = () => {
    //deleteTodo(id);
    deleteTodo(id);
  };
  const handleCheckboxClick = () => {
    updateTodo({
      id,
      isDone: !isDone,
    });
  };
  return (
    <div className="flex items-center justify-between border p-2">
      <div className="flex gap-5">
        <input
          type={"checkbox"}
          onClick={handleCheckboxClick}
          checked={isDone}
          // isPending - 삭제중일때 다른 상호작용 막기위해
          disabled={isDeleteTodoPending}
        />
        <Link to={`/todolist/${id}`}>{content}</Link>
      </div>
      <Button
        variant={"destructive"}
        onClick={handleDeleteClick}
        // isPending - 삭제중일때 다른 상호작용 막기위해
        disabled={isDeleteTodoPending}
      >
        삭제
      </Button>
    </div>
  );
}
