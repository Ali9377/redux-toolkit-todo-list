import { useState } from "react";
import { TodoList } from "./components/TodoList";
import { InputField } from "./components/InputField";
import { useDispatch } from "react-redux";
import { addTodo } from "./store/TodoSlice";

function App() {
  const [text, setText] = useState("");
  const dispatch = useDispatch()

  const addTask = () => dispatch(addTodo(text))

  const removeTodo = (todoId) => {
    // setTodos(todos.filter(todo => todo.id !== todoId));
  };

  const toggleTodoComplete = (todoId) => {
    // setTodos(
    //   todos.map(
    //     todo => {
    //     if (todo.id !== todoId) return todo;

    //     return {
    //       ...todo,
    //       completed: !todo.completed,
    //     };
    //   })
    // );
  };

  return (
    <div className="wrapper">
      <header>
        <img src="/image/logo.png" alt="лого" />
        <div>
          <img src="/image/divider.png" alt="иконка" />
        </div>
      </header>
      <div className="add_todo_block">
        <InputField text={text} handleInput={setText} handleSubmit={addTask} />
        <TodoList
          toggleTodoComplete={toggleTodoComplete}
          removeTodo={removeTodo}
        />
      </div>
    </div>
  );
}

export default App;
