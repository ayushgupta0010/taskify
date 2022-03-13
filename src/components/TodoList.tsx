import React from "react";
import { Todo } from "../models";
import SingleTodo from "./SingleTodo";

type Props = {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const TodoList: React.FC<Props> = ({ todos, setTodos }) => (
  <div className='todos'>
    {todos.map((todo) => (
      <SingleTodo key={todo.id} todo={todo} todos={todos} setTodos={setTodos} />
    ))}
  </div>
);

export default TodoList;
