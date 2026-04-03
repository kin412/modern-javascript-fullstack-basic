import { API_URL } from "@/lib/constants";
import type { Todo } from "@/types";

//다른값들은 수정을 안할수도 있지만, id는 무조건 들어와야하므로
export async function updateTodo(todo: Partial<Todo> & { id: string }) {
  const response = await fetch(`${API_URL}/todos/${todo.id}`, {
    method: "PATCH",
    body: JSON.stringify(todo),
  });

  if (!response.ok) throw new Error("Update Todo Failed");
  const data: Todo = await response.json();
  return data;
}
