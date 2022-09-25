import Question from './Question';
import Counter from './Counter';
import Button from './Button';
import { modes } from '../helpers/modes';

const answerText = "Answering: ";
const prepText = "Preparation: ";


const MainView = ({ currentQuestion, indexOfQuestion, handleMainButton, handlePauseButton, mode, counter, parameters, mainButtonEnabled, mainButtonText, endSession }) => {

  return (
    <section className="section-main_view">
      <div className="timer">
        <div className={`timer__box-1 dimmed`}  >
        </div>
        <div className={`timer__box-2 ${mode === modes.prep ? "" : "dimmed"}`} >
          {mode === modes.prep &&
            <Counter
              counter={counter}
              text={prepText}
              shouldDisplayCounter={!parameters.limitPreparationTime}
            />
          }
        </div>
        <div className={`timer__box-3 ${mode === modes.answering ? "" : "dimmed"}`} >
          {mode === modes.answering &&
            <Counter
            counter={counter}
            text={answerText}
            shouldDisplayCounter={!parameters.limitAnsweringTime}
            />
          }
        </div>


      </div>
      {<Question
          question={currentQuestion}
          num={indexOfQuestion}
          isDimmed={mode === modes.finished}
      />}
      <Button
        mainButtonEnabled={mainButtonEnabled}
        handleMainButton={handleMainButton}
        mainButtonText={mainButtonText}
      />
      <button onClick={handlePauseButton}>pause</button>
      <button onClick={endSession}>Stop</button>
    </section>
  )
}

export default MainView;