import React from 'react';


const Button = ({start, pause, stop, nextEnabled}) => {
  

  return (
    <div>
      {/* <button className="" onClick={start} >Start</button>
      <button className="" onClick={pause} >Pause</button>
      <button className="" onClick={stop} >Stop</button> */}
      <button className="button next_btn" onClick={start} disabled={!nextEnabled}>Next</button>
    </div>
  )
}

export default Button;