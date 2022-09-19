import React from 'react';

const Form = ({ parameters, handleOnChange, onSave }) => {

  return (
    <section className="section-configration">
      <form onSubmit={onSave}>
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
          <input className='config' name='answeringTime' onChange={handleOnChange} value={parameters.answeringTime}></input>
        </div>
        <button type="submit">Submit</button>
      </form>
    </section>
  )
}

export default Form;