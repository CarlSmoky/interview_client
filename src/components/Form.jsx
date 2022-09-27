import React from "react";

const Form = ({ parameters, handleOnChange, start, defaultChecked, isChecked, isBefore }) => {

  return (
    <section className="section-configration">
      <h2 className="heading-secondary">Before Start</h2>
      <form onSubmit={start}>

        {/* Number of Question */}
        <div className="setting-wrapper">
          <div className="config-box">
            <label
              className="label-primary"
              htmlFor="numberOfQuestion">
              Number of questions:
            </label>
            <input
              className="config-box__input"
              type="number"
              name="numberOfQuestion"
              onChange={handleOnChange}
              value={parameters.numberOfQuestion}
              min="1"
              max="100"
              maxLength="2"
              size="4"
              disabled={isBefore()}
            />
            
          </div>
        </div>

        {/* Preparation */}
        <div className="setting-wrapper">
          <h3 className="heading-tertiary" >Preparation Counter</h3>
          <div className="config-box">
            <label
              className={`label-primary ${isChecked("limitPreparationTime") ? "" : "dimmed"}`}
              htmlFor="limitPreparationTime"
            >
              No limit time
            </label>
            <input
              type="checkbox"
              id="limitPreparationTime"
              name="limitPreparationTime"
              value="limitPreparationTime"
              defaultChecked={parameters.limitPreparationTime}
              onChange={handleOnChange}
              disabled={isBefore()}
            />
          </div>
          <div className={`config-box ${isChecked("limitPreparationTime") ? "dimmed" : ""}`}>
            <label
              className="label-primary"
              htmlFor="preparingTime"
            >
              Preparation time:
            </label>
            <div className="time-box">
              <input
                className="config-box__input"
                type="number"
                min="0"
                max="300"
                name="preparingTime"
                onChange={handleOnChange}
                value={parameters.preparingTime}
                maxLength="2"
                size="4"
                disabled={isChecked("limitPreparationTime") || isBefore()}
              />
              <span className="unit">seconds</span>
            </div>
          </div>
        </div>

        {/* Answer */}
        <div className="setting-wrapper">
          <h3 className="heading-tertiary" >Answer Counter</h3>
          <div className="config-box">
            <label
              className={`label-primary ${isChecked("limitAnsweringTime") ? "" : "dimmed"}`}
              htmlFor="limitAnsweringTime"
            >
              No limit time
            </label>
            <input
              type="checkbox"
              id="limitAnsweringTime"
              name="limitAnsweringTime"
              value="limitAnsweringTime"
              defaultChecked={parameters.limitAnsweringTime}
              onChange={handleOnChange}
              disabled={isBefore()}
            />
          </div>
          <div className={`config-box ${isChecked("limitAnsweringTime") ? "dimmed" : ""}`}>
            <label
              className="label-primary"
              htmlFor="answeringTime"
            >
              Answering time:
            </label>
            <div className="time-box">
              <input
                className="config-box__input"
                type="number"
                min="0" max="300"
                name='answeringTime'
                onChange={handleOnChange}
                value={parameters.answeringTime}
                maxLength="2"
                size="4"
                disabled={isChecked("limitAnsweringTime") || isBefore()}
              />
              <span className="unit">seconds</span>
            </div>
          </div>
        </div>

        <button
          className={`submit-btn button ${isBefore() ? "dimmed" : ""}`} type="submit"
          disabled={isBefore()}
        >
          New session
        </button>

      </form>
    </section>
  )
}

export default Form;