import React from 'react';

const Input = () => {
  return (
    <div>
    <input className="config" name="numberOfQuestion" placeholder="3"></input>
    <input className="config" name="durationOfPreparation" placeholder="60"></input>
    <input className="config" name="durationOfAnswering" placeholder="90"></input>
    </div>
  )
}

export default Input;