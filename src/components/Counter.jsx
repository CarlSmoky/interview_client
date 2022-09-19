import React from 'react'

const Counter = ({counter, text}) => {
  
  return (
    <section className="section-counter">
      <p className="counter__text">{text} {counter}</p>
    </section>
  )
}

export default Counter