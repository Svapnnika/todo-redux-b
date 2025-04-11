import React from "react";
import { useState } from "react";
import "./User.css";
import { useSelector, useDispatch } from "react-redux";
import { addUser } from "./userSlice";

export default function User() {
  const [userObj, setUserObj] = useState({});
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const handleAddUser = () => {
    dispatch(addUser(userObj));
  };
  return (
    <div className="App-Register-Row">
      <div>
        <h2>Registration Form</h2>
        <p>
          <input
            type="text"
            onChange={(e) => setUserObj({ ...userObj, name: e.target.value })}
            placeholder="Enter name"
          ></input>
        </p>
        <p>
          <input
            type="text"
            onChange={(e) => setUserObj({ ...userObj, email: e.target.value })}
            placeholder="Email address"
          ></input>
        </p>
        <p>
          <input
            type="password"
            onChange={(e) => setUserObj({ ...userObj, pass: e.target.value })}
            placeholder="New password"
          ></input>
        </p>
        <p>
          <button onClick={handleAddUser}>Submit</button>
        </p>
      </div>
      <div>
        <h3>User List</h3>
        <ol>
        {users &&
          users.map((value) => (
            <li key={value.id}>
              {value.name}-{value.email}-{value.pass}
            </li>
          ))}
          </ol>
      </div>
    </div>
  );
}
