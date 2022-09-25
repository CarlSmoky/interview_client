import React from 'react';


const Button = ({handleNextButton, nextEnabled, mainButtonText}) => {
  

  return (
    <div>
      <button className={`button next_btn ${nextEnabled() ? "" : "dimmed"}`} onClick={handleNextButton} disabled={!nextEnabled()}>{mainButtonText()}</button>
    </div>
  )
}

export default Button;