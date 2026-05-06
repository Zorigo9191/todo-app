import TodoItem from "../todoitem/TodoItem";
import "./TodoBody.css";
function TodoBody({ todos, handleChangeCheckbox, deleteTodoItemFromList }) {
  function showNoTodoItems() {
    if (todos.length === 0) {
      return <span>keine Todos</span>;
    }
  }

  return (
    <div className="todo-body">
      {todos.map((todo) => (
        <TodoItem
          todoItem={todo}
          key={todo.id}
          handleChangeCheckbox={handleChangeCheckbox}
          deleteTodoItemFromList={deleteTodoItemFromList}
        />
      ))}
      {showNoTodoItems()}
    </div>
  );
}

export default TodoBody;
