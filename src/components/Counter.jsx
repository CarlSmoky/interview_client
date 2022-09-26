import React from "react";

const Counter = ({ counter, shouldDisplayCounter }) => {

  return (
    <span className="counter__text">
      {shouldDisplayCounter ? `${counter}` : ""}
    </span>
  )
}

export default Counter