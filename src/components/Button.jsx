import React from 'react';


const Button = ({handleMainButton, nextEnabled, mainButtonText}) => {
  

  return (
    <div>
      <button className={`button next_btn ${nextEnabled() ? "" : "dimmed"}`} onClick={handleMainButton} disabled={!nextEnabled()}>{mainButtonText()}</button>
    </div>
  )
}

export default Button;