import React from "react";
import "../styles/loginForm.css";

export default (prop) => {
  return (
    <div className="container">
      <span>Login</span>
      <input type="text" placeholder="User name" />
      <input type="password" placeholder="password" />
      <button>Submit</button>
      <div>
        <a href="#">Forgot Password</a>
        <span
          onClick={() => {
            window.location.pathname = "/register";
          }}
        >
          Signup
        </span>
      </div>
    </div>
  );
};
