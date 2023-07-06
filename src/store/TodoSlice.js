import { CreateSliceOptions, createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo(state, action) {
      state.todos.push({
        id: new Date().toISOString,
        text: action.payload,
        completed: false,
      });
    },
    removeTodo(state, action) {},
    toggleTodoComplete(state, action) {},
  },
});

export const {addTodo, removeTodo, toggleTodoComplete} = todoSlice.actions;

export default todoSlice.reducer;
