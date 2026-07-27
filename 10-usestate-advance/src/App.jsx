import React, { useState } from 'react'

const App = () => {

  const [num, setnum] = useState({user:'Sarthak',age:20})

  const btnClicked =()=>{
      const newNum =[...num]
      newNum.user='Aman'
      setnum(newNum)
      newNum.age=29
      setnum(newNum)
  }
  return (
    <div>
      <h1>{num.user},{num.age}</h1>
      <button onClick={btnClicked}>click</button>
    </div>
  )
}

export default App