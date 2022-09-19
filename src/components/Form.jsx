import React from 'react';

const Form = ({ parameters, handleOnChange, onSave }) => {

  return (
    <section className="section-configration">
      <form onSubmit={onSave}>
        <div className='config-box'>
          <label className="config-box__label" htmlFor='numberOfQuestion'>How many questions?</label>
          <input className='config-box__input' name='numberOfQuestion' onChange={handleOnChange} value={parameters.numberOfQuestion}></input>
        </div>
        <div className='config-box'>
          <label className="config-box__label" htmlFor="preparingTime">Preparing time(s)</label>
          <input className='config-box__input' name='preparingTime' onChange={handleOnChange} value={parameters.preparingTime}></input>
        </div>
        <div className='config-box'>
          <label className="config-box__label" htmlFor="answeringTime">Answering time(s)</label>
          <input className='config-box__input' name='answeringTime' onChange={handleOnChange} value={parameters.answeringTime}></input>
        </div>
        <button className="submit-button" type="submit">Start</button>
      </form>
    </section>
  )
}

export default Form;