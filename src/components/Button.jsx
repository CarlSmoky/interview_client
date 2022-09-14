import React from 'react';


const Button = ({start, pause, stop}) => {
  

  return (
    <div>
    <button className="" onClick={start} >Start</button>
    <button className="" onClick={pause} >Pause</button>
    <button className="" onClick={stop} >Stop</button>
    <button className="" >Next</button>
    </div>
  )
}

export default Button;