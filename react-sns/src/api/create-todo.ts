import { API_URL } from "@/lib/constants";
import type { Todo } from "@/types";

export async function createTodo(content: string) {
  const response = await fetch(`${API_URL}/todos`, {
    method: "POST",
    body: JSON.stringify({
      //id, //생략하면 자동생성
      content,
      isDone: false,
    }),
  });

  if (!response.ok) throw new Error("Create Todo Failed");

  const data: Todo = await response.json();
  return data;
}
