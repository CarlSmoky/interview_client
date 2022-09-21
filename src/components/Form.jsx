import React from 'react';

const Form = ({ parameters, handleOnChange, onSave, defaultChecked }) => {

  return (
    <section className="section-configration">
      <form onSubmit={onSave}>
        <div className='config-box'>
          <label className="config-box__label" htmlFor='numberOfQuestion'>Number of questions: </label>
          <input className='config-box__input' name='numberOfQuestion' onChange={handleOnChange} value={parameters.numberOfQuestion} maxlength="4" size="4" />
        </div>
        <div className='config-box'>
          <input type="checkbox" id="limitPreparationTime" name="limitPreparationTime" value="limitPreparationTime" defaultChecked={defaultChecked.limitPreparationTime} />
          <label for="vehicle1"> Limit preparation time</label>
        </div>
        <div className='config-box'>
          <label className="config-box__label" htmlFor="preparingTime">Preparation time: </label>
          <input className='config-box__input' name='preparingTime' onChange={handleOnChange} value={parameters.preparingTime} maxlength="4" size="4" />
        </div>
        <div className='config-box'>
          <input type="checkbox" id="limitAnswaringTime" name="limitAnswaringTime" value="limitAnswaringTime" defaultChecked={defaultChecked.limitAnswaringTime}/>
          <label for="vehicle1"> Limit answaring time</label>
        </div>
        <div className='config-box'>
          <label className="config-box__label" htmlFor="answeringTime">Answering time: </label>
          <input className='config-box__input' name='answeringTime' onChange={handleOnChange} value={parameters.answeringTime} maxlength="4" size="4" />
        </div>
        <button className="submit-button button" type="submit">Start</button>
      </form>
    </section>
  )
}

export default Form;