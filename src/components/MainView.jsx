import Question from './Question';
import Counter from './Counter';
import Button from './Button';
import { modes } from '../helpers/modes';

const MainView = ({ mainViewRef, currentQuestion, indexOfQuestion, handleMainButton, handlePauseButton, mode, counter, parameters, mainButtonEnabled, mainButtonText, endSession, isTimerActive, isPauseButtonEnabled }) => {

  const pauseButtonClassName = () => {
    let text = "fas ";
    text += isTimerActive() ? `fa-pause` : `fa-play`;
    text += mode === modes.before ? "dimmed" : "";
    return text;
  }

  return (
    <section className="section-main_view" ref={mainViewRef} >

      <div className="counter">
        <div className={`counter__box counter__box-1 ${mode === modes.prep ? "" : "dimmed"}`} >
          {mode === modes.prep &&
            <Counter
              counter={counter}
              shouldDisplayCounter={!parameters.limitPreparationTime}
              handleMainButton={handleMainButton}
            />
          }
        </div>
        <div className={`counter__box counter__box-2 ${mode === modes.answering ? "" : "dimmed"}`} >
          {mode === modes.answering &&
            <Counter
              counter={counter}
              shouldDisplayCounter={!parameters.limitAnsweringTime}
              handleMainButton={handleMainButton}
            />
          }
        </div>

      </div>

      {<Question
        question={currentQuestion}
        num={indexOfQuestion}
        isDimmed={mode === modes.finished}
      />}

      <div className="button-container">
        <Button
          mainButtonEnabled={mainButtonEnabled}
          handleMainButton={handleMainButton}
          mainButtonText={mainButtonText}
        />
        <button className={`circle-button ${isPauseButtonEnabled() ? "" : "dimmed"}`} disabled={!isPauseButtonEnabled()} onClick={handlePauseButton}>
          <i className={pauseButtonClassName()}></i>
        </button>
        <button className={`button cancel_btn ${mainButtonEnabled() ? "" : "dimmed"}`} onClick={endSession}>Cancel</button>
      </div>
    </section>
  )
}

export default MainView;