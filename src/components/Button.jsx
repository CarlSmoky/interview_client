import React from "react";


const Button = ({handleMainButton, mainButtonEnabled, mainButtonText}) => {
  

  return (
    <div>
      <button
        className={`button main_btn ${mainButtonEnabled() ? "" : "dimmed"}`} onClick={handleMainButton}
        disabled={!mainButtonEnabled()}
      >
        {mainButtonText()}
      </button>
    </div>
  )
}

export default Button;