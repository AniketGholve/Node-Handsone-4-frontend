import { useState } from 'react'
import './App.css'
import Signup from './components/Signup'
import Login from './components/Login'

function App() {
  let [toggle, setToggle] = useState("signup")
  return (
    <>
      {toggle === "signup" ? <Signup setToggle={setToggle} /> : <Login setToggle={setToggle} />}
    </>
  )
}

export default App
