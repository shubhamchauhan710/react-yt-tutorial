import React from 'react'
import { useState } from 'react';
const App = () => {

  const [num, setnum] = useState(10)
  const [username, setusername] = useState('Sarthak')
  const [users, setusers] = useState([10,20,30])
  function change(){
    setnum(30)
    setusername('Aman')
    setusers([30,40,50])
  }
  
  return (
    <div> 
      <h1>Value of a is {num } <br /> {users}<br />value of user is {username}</h1>
      <button onClick={change}>Click</button>
      </div>
  )
}

export default App