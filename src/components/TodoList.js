import { TodoItem } from "./TodoItem";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";

export const TodoList = () => {
  const todos = useSelector((state) => state.todos.todos);

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </ul>
  );
};
