import React from 'react'

const Counter = ({counter, text, displayCounter}) => {
  
  return (
    <div className="counter">
      <p className="counter__text">{displayCounter ? `${text} ${counter}` : ""}
        </p>
    </div>
  )
}

export default Counter