import React, { useState } from 'react';

const Form = ({parameters, handleOnChange, handleClick}) => {

  // const defaultParam = {
  //   numberOfQuestion: 3,
  //   preparingTime: 60,
  //   answeringTime: 90,
  // }
  
  // const [parameters, setParameters] = useState({
  //   numberOfQuestion: defaultParam.numberOfQuestion,
  //   preparingTime: defaultParam.preparingTime,
  //   answeringTime: defaultParam.answeringTime
  // });

  // const handleOnChange = (event) => {
  //   const { name, value } = event.target;
  //   setParameters((prev) => {
  //     return {
  //       ...prev,
  //       [name]: parseInt(value)
  //     };
  //   });
  // }

  // const handleClick = (event) => {
  //   event.preventDefault();
  // };

  return (
    <form onSubmit={handleClick}>
      <div className='config-box'>
        <label htmlFor='numberOfQuestion'>How many questions?</label>
        <input className='config' name='numberOfQuestion' onChange={handleOnChange} value={parameters.numberOfQuestion}></input>
      </div>
      <div className='config-box'>
        <label htmlFor="preparingTime">Preparing time(s)</label>
        <input className='config' name='preparingTime' onChange={handleOnChange} value={parameters.preparingTime}></input>
      </div>
      <div className='config-box'>
        <label htmlFor="answeringTime">Answering time(s)</label>
        <input className='config' name='answeringTime'  onChange={handleOnChange} value={parameters.answeringTime}></input>
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

export default Form;