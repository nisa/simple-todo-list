import { useState } from "react";
function TodoList({ todos }) {
  const [done, setDone] = useState([]);
  function handleCheckboxChange(event, todo) {
    if (event.target.checked) {
      setDone([...done, todo]);
    } else {
      setDone(done.filter((doneTodo) => doneTodo !== todo));
    }
  }

  function isDone(todo) {
    return done.includes(todo);
  }
  return (
    <ul>
      {todos.map((todo, index) => (
        <div className="todo-item">
          <input
            type="checkbox"
            id={index}
            className="checkbox"
            onChange={(e) => {
              handleCheckboxChange(e, todo);
            }}
          />
          <li key={todo} className={isDone(todo) ? "crossed" : ""}>
            {todo}
          </li>
        </div>
      ))}
    </ul>
  );
}

export default function TodoListApp() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  function handleInputChange(event) {
    setInputValue(event.target.value);
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      setTodos([...todos, inputValue]);
      setInputValue("");
    }
  }

  return (
    <>
      <input
        type="text"
        id="todo"
        placeholder="Enter a new todo"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
      <h1>Todo:</h1>
      <TodoList todos={todos} />
    </>
  );
}
