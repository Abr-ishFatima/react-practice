import { useState, useEffect } from "react";
import "./TodoList.css";

export default function TodoList() {
  let [todos, setTodos] = useState(["sample task"]);
  let [newTodo, setNewTodo] = useState("");

  useEffect(() => {
    console.log("Todos updated:", todos);
  }, [todos]);

  const addNewTask = () => {
    if (newTodo.trim() === "") return;
    setTodos([...todos, newTodo.trim()]);
    setNewTodo("");
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") addNewTask();
  };

  return (
    <div className="todo-wrapper">
      <div className="todo-container">

        <div className="todo-header">
          <h2>My Tasks</h2>
          <p>Stay on top of your day</p>
        </div>

        <div className="todo-input-row">
          <input
            className="todo-input"
            placeholder="Add a new task..."
            value={newTodo}
            onChange={(event) => setNewTodo(event.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button className="todo-add-btn" onClick={addNewTask}>Add</button>
        </div>

        {todos.length === 0 ? (
          <div className="todo-empty">
            All clear — add a task above!
          </div>
        ) : (
          <>
            <p className="todo-count">{todos.length} task{todos.length !== 1 ? "s" : ""}</p>
            <ul className="todo-list">
              {todos.map((todo, index) => (
                <li key={index} className="todo-item">
                  <span>{todo}</span>
                  <button className="todo-delete-btn" onClick={() => deleteTodo(index)}>✕</button>
                </li>
              ))}
            </ul>
          </>
        )}

      </div>
    </div>
  );
}