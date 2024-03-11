import React from 'react'
import './App.css'
import Home from './components/Home'
import RegisterForm from './components/RegisterForm'
import LoginForm from './components/LoginForm'

function App() {
  if (localStorage.getItem("username")) {
    return <Home/>
  }
  switch (window.location.pathname) {
    case "/register":
      return <RegisterForm/> 
    default:
      return <LoginForm/>
  }
}

export default App
