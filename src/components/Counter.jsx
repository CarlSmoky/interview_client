import React from 'react'

const Counter = ({counter, text, shouldDisplayCounter}) => {
  
  return (
    <div className="counter">
      <p className="counter__text">{shouldDisplayCounter ? `${text} ${counter}` : ""}
        </p>
    </div>
  )
}

export default Counter