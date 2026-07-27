import React from 'react'

const App = () => {
  return (
    <div>
      <form className='flex justify-between'>
        <input
            type="text" 
            placeholder='Enter Task heading' 
            />

        <textarea
          placeholder='Enter Details'
          name='' 
          id=''>
          </textarea>
      </form>
    </div>
  )
}

export default App