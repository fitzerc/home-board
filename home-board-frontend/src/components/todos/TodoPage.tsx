import React, { useState } from "react";
import TodoTable from "./TodoTable";
import AddTodo from "./AddTodo";
import { Todo } from "./Todo";

function TodoPage() {
  const [todoList, addToList] = useState<Todo[]>([
    { item: "fix fence" },
    { item: "mow lawn" }
  ]);

  function callback(val: string) {
    console.log("in callback: " + val);
    addToList([...todoList, { item: val }]);
  }

  return (
    <>
      <h1>Todo List</h1>
      <TodoTable todoItems={todoList} />
      <hr />
      <AddTodo addClicked={callback} />
    </>
  );
}

export default TodoPage;
