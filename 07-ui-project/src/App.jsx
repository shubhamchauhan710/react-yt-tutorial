import React from 'react'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'

const App = () => {
  const users =[
    {
    img:'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D',
    intro:'',
    color:'lightblue',
    tag:'Satisfied'
  },
  {
    img:'https://plus.unsplash.com/premium_photo-1672691612717-954cdfaaa8c5?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D',
    intro:'',
    color:'lightseagreen',
    tag:'Underserved'
  },
  {
    img:'https://plus.unsplash.com/premium_photo-1661766386981-1140b7b37193?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmVzc2lvbmFsfGVufDB8fDB8fHww',
    intro:'',
    color:'pink',
    tag:'UnderBanked'
  }
  ]
  return (
    <div>
      <Section1 user={users}/>
      <Section2 />
    </div>
  )
}

export default App