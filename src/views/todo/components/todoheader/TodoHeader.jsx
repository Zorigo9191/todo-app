import Input from "../../../../components/input/input";
import Button from "../../../../components/button/Button";
import { useState } from "react";
import "./TodoHeader.css";

function TodoHeader({ addTodoItemToList }) {
  const [inputValue, setInputValue] = useState("");

  function handleInputChangeEvent(event) {
    setInputValue(event.target.value);
  }
  function handleAddTodoItemEvent(event) {
    const cleanInput = inputValue.trim();

    if (!inputValue) {
      alert("Bitte etwas eintragen!");
      return;
    }
    addTodoItemToList({
      id: Math.random(),
      content: inputValue,
      done: false,
    });
    setInputValue("");
  }

  return (
    <div className="todo-header">
      <Input
        inputValue={inputValue}
        handleInputChangeEvent={handleInputChangeEvent}
      />
      <Button
        buttonValue={"Add"}
        handleButtonClickEvent={handleAddTodoItemEvent}
      />
    </div>
  );
}

export default TodoHeader;
