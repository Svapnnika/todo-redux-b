import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <div className="App-Header-Row">
      <div>
        <h1>Redux App</h1>
      </div>
      <div>
        <ul>
          <li className="menu">
            <Link to="/home" className="App-Header-Menu-Text">Home</Link>
            </li>
          <li className="menu">
          <Link to="/login" className="App-Header-Menu-Text">Login</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
