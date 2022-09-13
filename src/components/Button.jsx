import React from 'react';


const Button = ({start, pause, stop}) => {
  

  return (
    <div>
    <button className="" onClick={start} >Start</button>
    <button className="" onClick={pause} >Pause</button>
    <button className="" onClick={stop} >Stop</button>
    </div>
  )
}

export default Button;