import React, { useState } from "react";
import "../styles/registerForm.css"

export default () => {
    const [username, setUsername] = useState("")
    const [pass, setPass] = useState("")
    const [pass2, setPass2] = useState("")
    let color = "#000"
    const isValid = () => pass.length > 0 && pass === pass2 && username.length > 0 
    if (pass !== pass2) {
        color = "#f00"
    }
    return (
      <div className="Signup">
        <span>Register</span>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="User name" />
        <input type="email" placeholder="Enter your email"/>
        <input type="password" value={pass} onChange={(e) => setPass(e.target.value)} placeholder="Choose a password" />
        <input type="password" value={pass2} onChange={(e) => setPass2(e.target.value)} style={{borderColor: color}} placeholder="Enter a password again" />
        <button disabled={!isValid()} onClick={()=>{
            localStorage.setItem("username", username)
            location.pathname = "/" 
        }}>Submit</button>
      </div>
    );
  };

  