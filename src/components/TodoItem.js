import { useDispatch } from "react-redux";
import { removeTodo } from "../store/TodoSlice";

export const TodoItem = ({ id, text, completed, toggleTodoComplete}) => {
  const dispatch = useDispatch()
  
  return (
    <li>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => toggleTodoComplete(id)}
      />
      <span>{text}</span>
      <span className="delete-btn" onClick={() => dispatch(removeTodo({id}))}>
        &times;
      </span>
    </li>
  );
};
