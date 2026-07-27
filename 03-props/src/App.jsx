import React from 'react'
import Card from './components/Card'
const App = () => {
  return (
    <div className="parent">
      <Card user='Aman' age={21} img='https://plus.unsplash.com/premium_vector-1746806658734-9644193caa1d?q=80&w=1183&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
      <Card user='Sarthak' age={18} img='https://images.unsplash.com/photo-1581803118522-7b72a50f7e9f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fG1lbnxlbnwwfHwwfHx8MA%3D%3D'/>
    </div>

  )
}

export default App