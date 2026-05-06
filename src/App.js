import "./App.css";
import Todo from "./views/todo/components/Todo.jsx";

function App() {
  return <Todo />;
}

export default App;

// import { useEffect, useState } from "react";
// import "./App.css";

// const LOCALSTORAGE_KEY = "todo";

// function App() {
//   const [inputValue, setInputValue] = useState("");

//   const [toDoList, setTodoList] = useState(() => {
//     const saved = localStorage.getItem(LOCALSTORAGE_KEY);
//     return saved ? JSON.parse(saved) : [];
//   });

//   useEffect(() => {
//     localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(toDoList));
//   }, [toDoList]);

//   function handleAdd() {
//     if (!inputValue.trim()) return;

//     setTodoList([...toDoList, inputValue]);
//     setInputValue("");
//   }

//   return (
//     <div className="App">
//       <input
//         value={inputValue}
//         onChange={(e) => setInputValue(e.target.value)}
//       />

//       <button onClick={handleAdd}>add</button>
//       <ul>
//         {toDoList.map((item, index) => (
//           <li key={index}>{item}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;

// function Button() {
//   const [stateCount, setStateCount] = useState(0); // Komponente Daten speichern muss
//   const buttonRef = useRef(); // DOM Element zugreifen möchte
//   //Manchmal musst du direkt auf ein HTML-Element zugreifen,
//   // zum Beispiel um ein Eingabefeld zu fokussieren oder die Scroll-Position zu messen,
//   // ohne ein Re-Render auszulösen.
//   function onHandleClick() {
//     setStateCount(stateCount + 1);
//     console.log(buttonRef);
//   }

//   return (
//     <button ref={buttonRef} onClick={onHandleClick}>
//       {stateCount}
//     </button>
//   );
// }

// function Input({
//   inputValue,
//   handleInputChange,
//   checkBoxValue,
//   handleCheckBoxChange,
// }) {
//   return (
//     <div>
//       <input onChange={handleCheckBoxChange} type="checkbox" />
//       <input onChange={handleInputChange} />
//       {inputValue}
//     </div>
//   );
// }

// function App() {
//   const [inputValue, setInputValue] = useState("");
//   const [checkBoxValue, setCheckBoxValue] = useState(true);
//   function handleInputChange(changeEvent) {
//     console.log(changeEvent.target.value);
//     setInputValue(changeEvent.target.value);
//     console.log(inputValue);
//   }

//   function handleCheckBoxChange(changeEvent) {
//     console.log(changeEvent.target.checked);
//     setCheckBoxValue(changeEvent.target.checked);
//     console.log(checkBoxValue);
//   }

//   return (
//     <div className="App">
//       <Button />
//       <Input
//         handleInputChange={handleInputChange}
//         inputValue={inputValue}
//         handleCheckBoxChange={handleCheckBoxChange}
//       />
//     </div>
//   );
// }

// export default App;

// import { useState } from "react";
// import "./App.css";

// function Button() {
//   const [stateCounter, setStateCo] = useState(0);

//   const array = [
//     0,
//     () => {
//       console.log("Hallo");
//     },
//   ];

//   const [value, setValueFunction] = array;

//   console.log(value, setValueFunction);

//   setValueFunction();

//   function onHandleClick() {
//     setStateCo(stateCounter + 1);
//   }

//   return <button onClick={onHandleClick}>{stateCounter}</button>;
// }

// function App() {
//   return (
//     <div className="App">
//       <Button />
//     </div>
//   );
// }

// export default App;

// import "./App.css";
// import Button from "./components/Button";

// function App() {
//   return (
//     <>
//       <Button
//         text={"ich bin Button 1"}
//         alertText={"Hallöchen, ich bin Button 1"}
//       />
//       <Button
//         text={"ich bin Button 2"}
//         alertText={"Hallöchen, ich bin Button 2"}
//       />
//       <Button
//         text={"ich bin Button 3"}
//         alertText={"Hallöchen, ich bin Button 3"}
//       />
//     </>
//   );
// }

// export default App;
