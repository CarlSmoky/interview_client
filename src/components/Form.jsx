import React from 'react';

const Form = ({ parameters, handleOnChange, onSave, defaultChecked, checkLimit }) => {

  return (
    <section className="section-configration">
      <form onSubmit={onSave}>
        <div className='config-box'>
          <label className="config-box__label" htmlFor='numberOfQuestion'>Number of questions: </label>
          <input className='config-box__input' name='numberOfQuestion' onChange={handleOnChange} value={parameters.numberOfQuestion} maxLength="4" size="4" />
        </div>
        <div className='config-box'>
          <input type="checkbox" id="limitPreparationTime" name="limitPreparationTime" value="limitPreparationTime" defaultChecked={defaultChecked.limitPreparationTime} onChange={checkLimit}/>
          <label htmlFor="limitPreparationTime"> Limit preparation time</label>
        </div>
        <div className='config-box'>
          <label className="config-box__label" htmlFor="preparingTime">Preparation time: </label>
          <input className='config-box__input' name='preparingTime' onChange={handleOnChange} value={parameters.preparingTime} maxLength="4" size="4" />
        </div>
        <div className='config-box'>
          <input type="checkbox" id="limitAnswaringTime" name="limitAnswaringTime" value="limitAnswaringTime" defaultChecked={defaultChecked.limitAnswaringTime} onChange={checkLimit}/>
          <label htmlFor="limitAnswaringTime"> Limit answaring time</label>
        </div>
        <div className='config-box'>
          <label className="config-box__label" htmlFor="answeringTime">Answering time: </label>
          <input className='config-box__input' name='answeringTime' onChange={handleOnChange} value={parameters.answeringTime} maxLength="4" size="4" />
        </div>
        <button className="submit-button button" type="submit">Start</button>
      </form>
    </section>
  )
}

export default Form;