import React from 'react';

const Form = ({ parameters, handleOnChange, start, defaultChecked, checkUnlimit, checked }) => {

  const isChecked = (nameOfInput) => {
    return checked[nameOfInput];
  }

  return (
    <section className="section-configration">
      <form onSubmit={start}>
        <div className="setting-wrapper">
          <div className="config-box">
            <label className="config-box__label" htmlFor='numberOfQuestion'>Number of questions: </label>
            <input className='config-box__input' type="number" name='numberOfQuestion' onChange={handleOnChange} value={parameters.numberOfQuestion} min="1" max="100"  />
          </div>
        </div>
        <div className="setting-wrapper">
          <h2 className="heading-small" >Preparation Counter</h2>
          <div className="config-box">
            <label className={`${isChecked('limitPreparationTime') ? "" : "dimmed"}`} htmlFor="limitPreparationTime">  Unlimited preparation time</label>
            <input type="checkbox" id="limitPreparationTime" name="limitPreparationTime" value="limitPreparationTime" defaultChecked={defaultChecked.limitPreparationTime} onChange={checkUnlimit} />
          </div>
          <div className={`config-box ${isChecked('limitPreparationTime') ? "dimmed" : ""}`}>
            <label className="config-box__label" htmlFor="preparingTime">Preparation time: </label>
            <div className="time-box">
              <input className='config-box__input' type="number" min="0" max="300" name='preparingTime' onChange={handleOnChange} value={parameters.preparingTime} maxLength="2" size="4" disabled={isChecked('limitPreparationTime')} />
              <span className="unit">seconds</span>
            </div>
          </div>

        </div>
        <div className="setting-wrapper">
          <h2 className="heading-small" >Answer Counter</h2>
          <div className="config-box">
            <label className={`${isChecked('limitAnswaringTime') ? "" : "dimmed"}`} htmlFor="limitAnswaringTime"> Unlimited answaring time</label>
            <input type="checkbox" id="limitAnswaringTime" name="limitAnswaringTime" value="limitAnswaringTime" defaultChecked={defaultChecked.limitAnswaringTime} onChange={checkUnlimit} />
          </div>
          <div className={`config-box ${isChecked('limitAnswaringTime') ? "dimmed" : ""}`}>
            <label className="config-box__label" htmlFor="answeringTime">Answering time: </label>
            <div className="time-box">
              <input className='config-box__input' type="number" min="0" max="300" name='answeringTime' onChange={handleOnChange} value={parameters.answeringTime} maxLength="2" size="4" disabled={isChecked('limitAnswaringTime')} />
              <span className="unit">seconds</span>
            </div>
          </div>
        </div>
        <button className="submit-btn button" type="submit" >Start</button>
      </form>
    </section>
  )
}

export default Form;