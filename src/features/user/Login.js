import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
export default function () {
  const [userObj, setUserObj] = useState({});
  const [msg, setMsg] = useState();
  const users = useSelector((state) => state.users);
  const handleSubmit = () => {
    const result = users.find(value=>value.email===userObj.email && value.pass === userObj.pass)
    if (result) {
      setMsg("Welcome");
    } else {
      setMsg("Invalid User");
    }
  };
  return (
    <div>
      <h3>Login Form</h3>
      {msg}
      <p>
        <input
          placeholder="Email"
          onChange={(e) => setUserObj({ ...userObj, email: e.target.value })}
        />
      </p>

      <p>
        <input
          type="password"
          placeholder="Email"
          onChange={(e) => setUserObj({ ...userObj, pass: e.target.value })}
        />
      </p>
      <button onClick={handleSubmit}>Submit</button>
      <hr></hr>
      <Link to="/user">Create Account</Link>
    </div>
  );
}
