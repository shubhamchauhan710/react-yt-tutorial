import React from 'react'

const App = () => {

  function btnClicked(){
    console.log('button is clicked');
  }

  function mouseEnter(){
    console.log('Mouse Entered')
  }

  return (
    <div>
      <button onMouseEnter={function(){
        console.log('hello guys')
      }} onClick={btnClicked}>click here</button>
      <button onClick={btnclicked}>explore this</button>
      </div>
    
  )
}

export default App