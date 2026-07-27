import React from 'react'
import card from './components/card'

const App = () => {
  return (
    <div>
      <div className="card">
        <h1>Sachin Manral</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt, tempora.</p>
      </div>
      {card()}
    </div>
  )
}

export default App