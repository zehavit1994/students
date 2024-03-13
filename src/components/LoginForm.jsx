import React, { useState } from "react";
import "../styles/loginForm.css";
import users from "../data/users";

export default () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="container">
      <span>Login</span>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        onClick={() => {
          const user = users.find((u) => u.username === username);
          if (user === undefined) {
            alert("user not found");
            return;
          }
          if (user.password !== password) {
            alert("wrong password");
            return;
          }
          localStorage.setItem("username",user.username)
          location.pathname="/"
        }}
      >
        Submit
      </button>
      <div>
        <a href="#">Forgot Password</a>
        <span
          onClick={() => {
            location.pathname = "/register";
          }}
        >
          register
        </span>
      </div>
    </div>
  );
};
