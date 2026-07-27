import React from 'react'
import RightCard from './RightCard'


const RIghtContent = (props) => {
  return (
    <div id='right' className='h-full rounded-4xl flex overflow-x-auto flex-nowrap gap-10 p-6 w-2/3'>
        {props.user.map(function(e, idx){
          return <RightCard key={idx}  color={e.color}  id={idx} img={e.img} tag={e.tag}/>
        })}
    </div>
  )
}

export default RIghtContent