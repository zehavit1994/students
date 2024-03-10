import React from 'react'
import './App.css'
import Home from './components/Home'
import RegisterForm from './components/RegisterForm'
import LoginForm from './components/LoginForm'

function App() {
  switch (window.location.pathname) {
    case "/register":
      return <RegisterForm/> 
    case "/home":
      return <Home/>
    default:
      return <LoginForm/>
  }
}

export default App
