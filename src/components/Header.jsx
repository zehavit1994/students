import React from "react";
import "../styles/header.css";

export default () => {
  return (
    <div className="header">
      <span>Students</span>
      <button
        onClick={() => {
          localStorage.removeItem("username");
        }}
      >
        Logout
      </button>
    </div>
  );
};
