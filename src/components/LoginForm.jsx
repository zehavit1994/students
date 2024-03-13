import React from "react";
import "../styles/loginForm.css";

export default (prop) => {
  return (
    <div className="container">
      <span>Login</span>
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      <button onClick={() => localStorage.setItem("username", username)}>
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
