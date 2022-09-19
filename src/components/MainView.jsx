import Question from './Question';
import Counter from './Counter';
import Button from './Button';

const answerText = "Answering remaining: ";
const prepText = "Preparaton time: "

const MainView = ({ currentQuestion, indexOfQuestion, prepareCounter, prepTime, answerCounter, nextEnabled, startNewQuestion }) => {

  // helper functions
  const showReadingTimer = () => {
    return !showPrepTimer() && !showAnswerTimer();
  }

  const showPrepTimer = () => {
    return prepareCounter > 0 && prepareCounter <= prepTime;
  }

  const showAnswerTimer = () => {
    return answerCounter > 0;
  }

  return (
    <section className="section-main_view">
      <div className="timer">
        <div className={`timer__box-1 ${showReadingTimer() ? "" : "dimmed"}`}  >
          
        </div>
        <div className={`timer__box-2 ${showPrepTimer() ? "" : "dimmed"}`} >
        {showPrepTimer() && <Counter counter={prepareCounter} text={prepText} />}
        </div>
        <div className={`timer__box-3 ${showAnswerTimer() ? "" : "dimmed"}`} >
        {showAnswerTimer() && <Counter counter={answerCounter} text={answerText} />}
        </div>


      </div>
      {<Question question={currentQuestion} num={indexOfQuestion} />}
      <Button nextEnabled={nextEnabled} start={startNewQuestion} />
      <div className="counter_box">
        
        
      </div>
    </section>
  )
}

export default MainView;