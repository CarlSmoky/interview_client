import Question from './Question';
import Counter from './Counter';
import Button from './Button';

const answerText = "Answering remaining: ";
const prepText = "Preparaton time: "

const MainView = ({currentQuestion, indexOfQuestion, prepareCounter, prepTime, answerCounter}) => {
  return (
    <section className="section-main_view"> 
    {<Question question={currentQuestion} num={indexOfQuestion} />}
    {prepareCounter > 0 && prepareCounter <= prepTime && <Counter counter={prepareCounter} text={prepText} />}
    {answerCounter > 0 && <Counter counter={answerCounter} text={answerText} />}
    <Button />
    </section>
  )
}

export default MainView;