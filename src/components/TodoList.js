import React from "react";
import Todo from "./Todo";
import { ClearButton, Words } from "./Styles";

const TodoList = props => {
  return (
    <div className="todo-list">
        <Words>
      {props.todos.map(todo => (
        <Todo toggleTodo={props.toggleTodo} key={todo.id} todo={todo} />
        ))}
      </Words>
      <ClearButton className="clear-btn" onClick={props.clearCompleted}>
        Clear Completed Task
      </ClearButton>
    </div>
  );
};

export default TodoList;