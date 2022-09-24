import Question from './Question';
import Counter from './Counter';
import Button from './Button';

const answerText = "Answering remaining: ";
const prepText = "Preparaton time: "
const readingText = "Reading time: "

const MainView = ({ currentQuestion, indexOfQuestion, prepareCounter, prepTime, answerCounter, readingCounter, nextEnabled, startNewQuestion, mode }) => {

  //new: these helper funcs needs to change: it should decide the dimming based on the current mode not the timer value
  // helper functions
  const showReadingTimer = () => {
    return readingCounter > 0; 
  }

  const showPrepTimer = () => {
    return prepareCounter > 0 
  }

  const showAnswerTimer = () => {
    return answerCounter > 0;
  }

  const questionIsComplete = () => {
    return mode === "finished";  // need to export modes to this file
  }

  return (
    <section className="section-main_view">
      <div className="timer">
        <div className={`timer__box-1 ${showReadingTimer() ? "" : "dimmed"}`}  >
        {showReadingTimer() && <Counter counter={readingCounter} text={readingText} />}
        </div>
        <div className={`timer__box-2 ${showPrepTimer() ? "" : "dimmed"}`} >
        {showPrepTimer() && <Counter counter={prepareCounter} text={prepText} />}
        </div>
        <div className={`timer__box-3 ${showAnswerTimer() ? "" : "dimmed"}`} >
        {showAnswerTimer() && <Counter counter={answerCounter} text={answerText} />}
        </div>


      </div>
      {<Question question={currentQuestion} num={indexOfQuestion} isDimmed={questionIsComplete()} />}
      <button>Start answer</button>
      <button>done</button>
      <br />
      <button>pause</button>
      {/* <Button nextEnabled={nextEnabled} start={startNewQuestion} /> */}
      <Button nextEnabled={true} start={startNewQuestion} />
      <div className="counter_box">
        
        
      </div>
    </section>
  )
}

export default MainView;