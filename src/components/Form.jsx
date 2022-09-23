import React from 'react';

const Form = ({ parameters, handleOnChange, start, defaultChecked, checkUnlimit, checked }) => {

  const isChecked = (nameOfInput) => {
    return checked[nameOfInput];
  }

  return (
    <section className="section-configration">
      <h2 className="heading-secondary">Before Start</h2>
      <form onSubmit={start}>

        {/* Number of Question */}
        <div className="setting-wrapper">
          <div className="config-box">
            <label className="label-primary" htmlFor='numberOfQuestion'>Number of questions: </label>
            <input className='config-box__input' type="number" name='numberOfQuestion' onChange={handleOnChange} value={parameters.numberOfQuestion} min="1" max="100"  />
          </div>
        </div>

        {/* Preparation */}
        <div className="setting-wrapper">
          <h3 className="heading-tertiary" >Preparation Counter</h3>
          <div className="config-box">
            <label className={`label-primary ${isChecked('limitPreparationTime') ? "" : "dimmed"}`} htmlFor="limitPreparationTime">  Unlimited preparation time</label>
            <input type="checkbox" id="limitPreparationTime" name="limitPreparationTime" value="limitPreparationTime" defaultChecked={defaultChecked.limitPreparationTime} onChange={checkUnlimit} />
          </div>
          <div className={`config-box ${isChecked('limitPreparationTime') ? "dimmed" : ""}`}>
            <label className="label-primary" htmlFor="preparingTime">Preparation time: </label>
            <div className="time-box">
              <input className="config-box__input" type="number" min="0" max="300" name='preparingTime' onChange={handleOnChange} value={parameters.preparingTime} maxLength="2" size="4" disabled={isChecked('limitPreparationTime')} />
              <span className="unit">seconds</span>
            </div>
          </div>
        </div>

        {/* Answer */}
        <div className="setting-wrapper">
          <h3 className="heading-tertiary" >Answer Counter</h3>
          <div className="config-box">
            <label className={`label-primary ${isChecked('limitAnswaringTime') ? "" : "dimmed"}`} htmlFor="limitAnswaringTime"> Unlimited answaring time</label>
            <input type="checkbox" id="limitAnswaringTime" name="limitAnswaringTime" value="limitAnswaringTime" defaultChecked={defaultChecked.limitAnswaringTime} onChange={checkUnlimit} />
          </div>
          <div className={`config-box ${isChecked('limitAnswaringTime') ? "dimmed" : ""}`}>
            <label className="label-primary" htmlFor="answeringTime">Answering time: </label>
            <div className="time-box">
              <input className='config-box__input' type="number" min="0" max="300" name='answeringTime' onChange={handleOnChange} value={parameters.answeringTime} maxLength="2" size="4" disabled={isChecked('limitAnswaringTime')} />
              <span className="unit">seconds</span>
            </div>
          </div>
        </div>

        <button className="submit-btn button" type="submit" >New session</button>

      </form>
    </section>
  )
}

export default Form;