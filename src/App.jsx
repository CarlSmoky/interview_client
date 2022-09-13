import React, {useState, useEffect} from 'react';
import Form from './components/Form';
import Counter from './components/Counter';
import DisplayQuestion from './components/DisplayQuestion';
import Button from './components/Button';



const App = () => {
  const defaultParam = {
    numberOfQuestion: 3,
    preparingTime: 10,
    answeringTime: 20,
  }
  const [prepareCounter, setPrepareCounter] = useState(defaultParam.preparingTime);
  const [answerCounter, setAnswerCounter] = useState(0);
  
  const [parameters, setParameters] = useState({
    numberOfQuestion: defaultParam.numberOfQuestion,
    preparingTime: defaultParam.preparingTime,
    answeringTime: defaultParam.answeringTime
  });

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setParameters((prev) => {
      return {
        ...prev,
        [name]: parseInt(value)
      };
    });
  }

  const handleClick = (event) => {
    event.preventDefault();
    setPrepareCounter(parameters.preparingTime)
  };
  
  useEffect(() => {
    answerCounter > 0 && setTimeout(() => setAnswerCounter(answerCounter - 1), 1000);
  }, [answerCounter]);

  useEffect(() => {
    prepareCounter > 0 && setTimeout(() => setPrepareCounter(prepareCounter - 1), 1000);
  }, [prepareCounter]);

  return (
    <div className="App">
      <h1>Inteview</h1>
      <Form handleOnChange={handleOnChange} handleClick={handleClick} parameters={parameters}/>
      <DisplayQuestion />
      {prepareCounter > 0 && <Counter counter={prepareCounter}/>}
      {answerCounter > 0 && <Counter counter={answerCounter}/>}
      <Button />
    </div>
  );
}

export default App;
