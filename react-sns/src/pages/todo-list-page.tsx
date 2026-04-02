import TodoEditor from "@/components/todo-list/todo-editor";
import TodoItem from "@/components/todo-list/todo-item";
import { useTodosData } from "@/hooks/quries/use-todos.data";
import { API_URL } from "@/lib/constants";
import { useTodos } from "@/store/todo";
import type { Todo } from "@/types";
//import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";

// const dummyTodos = [
//   {
//     id: 1,
//     content: "Todo 1",
//   },
//   {
//     id: 2,
//     content: "Todo 2",
//   },
//   {
//     id: 3,
//     content: "Todo 3",
//   },
// ];

export default function TodoListPage() {
  //const todos = useTodos();

  //tanstack query 사용전 api 사용하려면 이 긴 처리를 해줘야한다..
  // const [todos, setTodos] = useState<Todo[]>([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState();

  // const fetchData = async () => {
  //   setIsLoading(true);
  //   try {
  //     const data = await fetchTodos();
  //     setTodos(data);
  //   } catch (error) {
  //     setError(error as any);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  //tanstack query
  const { data: todos, isLoading, error } = useTodosData();

  if (error) return <div>오류발생</div>;
  if (isLoading) return <div>로딩중...</div>;

  return (
    <div className="flex flex-col gap-5 p-5">
      <h1 className="text-2xl font-bold">TodoList</h1>
      <TodoEditor />
      {todos?.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </div>
  );
}
