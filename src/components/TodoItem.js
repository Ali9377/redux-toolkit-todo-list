export const TodoItem = ({ id, text, completed, removeTodo, toggleTodoComplete}) => {
  return (
    <li>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => toggleTodoComplete(id)}
      />
      <span>{text}</span>
      <span className="delete-btn" onClick={() => removeTodo(id)}>
        &times;
      </span>
    </li>
  );
};
