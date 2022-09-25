import Question from './Question';
import Counter from './Counter';
import Button from './Button';
import { modes } from '../helpers/modes';

const answerText = "Answering: ";
const prepText = "Preparaton: ";


const MainView = ({ currentQuestion, indexOfQuestion, handleMainButton, handlePauseButton, mode, counter, parameters, mainButtonEnabled, mainButtonText, endSession }) => {

  return (
    <section className="section-main_view">
      <div className="timer">
        <div className={`timer__box-1 dimmed`}  >
        </div>
        <div className={`timer__box-2 ${mode === modes.prep ? "" : "dimmed"}`} >
        {mode === modes.prep && <Counter counter={counter} text={prepText} displayCounter={!parameters.limitPreparationTime} />}
        </div>
        <div className={`timer__box-3 ${mode === modes.answering ? "" : "dimmed"}`} >
        {mode === modes.answering && <Counter counter={counter} text={answerText} displayCounter={!parameters.limitAnswaringTime} />}
        </div>


      </div>
      {<Question question={currentQuestion} num={indexOfQuestion} isDimmed={mode === modes.finished} />}
      <button onClick={handlePauseButton}>pause</button>
      <Button
        mainButtonEnabled={mainButtonEnabled} handleMainButton={handleMainButton}
        mainButtonText={mainButtonText}
      />
      <div className="counter_box">
        
        
      </div>
    </section>
  )
}

export default MainView;