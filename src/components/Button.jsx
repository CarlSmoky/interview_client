import React from "react";


const Button = ({handleMainButton, mainButtonEnabled, mainButtonText}) => {
  

  return (
    
      <button
        className={`button main_btn ${mainButtonEnabled() ? "" : "dimmed"}`}
        onClick={handleMainButton}
        disabled={!mainButtonEnabled()}
      >
        {mainButtonText()}
      </button>
    
  )
}

export default Button;