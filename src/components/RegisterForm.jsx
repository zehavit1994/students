import React from "react";
import "../styles/registerForm.css"

export default (prop) => {
    return (
      <div className="Signup">
        <span>Register</span>
        <input type="text" placeholder="User name" />
        <input type="email" placeholder="Enter your email"/>
        <input type="password" placeholder="Choose a password" />
        <input type="password" placeholder="Enter a password again" />
        <button>Submit</button>
      </div>
    );
  };
  