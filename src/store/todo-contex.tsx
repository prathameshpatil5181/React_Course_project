import Todo from "../models/todo";
import React, { useState } from "react";
type todosContexObj = {
  Items: Todo[];
  addItem: (item: string) => void;
  removeItem: (id: string) => void;
};

export const TodoContext = React.createContext<todosContexObj>({
  Items: [],
  addItem: () => {},
  removeItem: () => {},
});

export const TodoProvider: React.FC<{ children: React.ReactNode }> = (props) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (enteredText: string) => {
    const newTodo = new Todo(enteredText);

    setTodos((prevTodos) => prevTodos.concat(newTodo));
  };
  const removeTodoHandler = (id: string) => {
    setTodos((prevState) => prevState.filter((x) => x.id !== id));
  };
  const value: todosContexObj = {
    Items: todos,
    addItem: addTodoHandler,
    removeItem: removeTodoHandler,
  };

  return <TodoContext.Provider value={value}>{props.children}</TodoContext.Provider>
};

export  default TodoContext
