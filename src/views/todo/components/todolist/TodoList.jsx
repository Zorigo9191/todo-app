import TodoHeader from "../todoheader/TodoHeader";
import TodoBody from "../todobody/TodoBody";
import TodoItem from "../todoitem/TodoItem";
import { useState, useEffect } from "react";
import "./TodoList.css";

function TodoList({}) {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("newTodo");
    const initialValue = JSON.parse(saved);
    return initialValue || [];
  });

  useEffect(() => {
    localStorage.setItem("newTodo", JSON.stringify(todos));
  }, [todos]);

  function handleChangeCheckbox(todoItem) {
    const todoItemIndex = todos.findIndex((todo) => todo.id === todoItem.id);
    const updatedTodos = [...todos];
    updatedTodos.splice(todoItemIndex, 1, todoItem);
    setTodos(updatedTodos);
  }

  function addTodoItemToList(todoItem) {
    setTodos([...todos, todoItem]);
  }

  function deleteTodoItemFromList(todoId) {
    const filteredTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(filteredTodos);
  }

  return (
    <div className="todo-list">
      <TodoHeader addTodoItemToList={addTodoItemToList} />
      <TodoBody
        todos={todos}
        handleChangeCheckbox={handleChangeCheckbox}
        deleteTodoItemFromList={deleteTodoItemFromList}
      />
    </div>
  );
}

export default TodoList;
