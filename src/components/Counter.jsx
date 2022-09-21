import React from 'react'

const Counter = ({counter, text}) => {
  
  return (
    <div className="counter">
      <p className="counter__text">{text} {counter}</p>
    </div>
  )
}

export default Counter