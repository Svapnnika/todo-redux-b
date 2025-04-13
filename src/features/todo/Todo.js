import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo,toggleComplete, deleteTodo } from "./todoSlice";

const Todo = () => {
  const [text, setText] = useState("");
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  const handleAddTodo = () => {
    if (text) {
      dispatch(addTodo(text));
      setText("");
    }
  };

  const handleToggleComplete = (id) => {
    dispatch(toggleComplete(id));
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <div>
      <input type="text" value={text} onChange={handleInputChange} style={{ padding: "6px", margin:"3" }}/>
      <button onClick={handleAddTodo} style={{ padding: "6px", margin:"3", marginTop: '30px'}}> Add Todo </button>
      <ul>
        {" "}
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
            }}
          >
            {todo.text}{" "}
            <button onClick={() => handleToggleComplete(todo.id)} style={{padding:'5px',margin:'2'}}>
              {" "}
              {todo.completed ? "Mark Incomplete" : "Mark Complete"}{" "}
            </button>{" "}
            <button onClick={() => handleDeleteTodo(todo.id)} style={{padding:'5px',margin:'2'}}> Delete </button>{" "}
          </li>
        ))}{" "}
      </ul>{" "}
    </div>
  );
};

export default Todo;