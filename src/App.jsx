import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Form from './components/Form';
import Counter from './components/Counter';
import Button from './components/Button';
import Question from './components/Question';
import axios from 'axios';
import "./sass/main.scss";

const App = () => {
  const shuffle = (array, n) => {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {

      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    return array.slice(0, n);
  }

  //Fetch all questions when it load
  const [allQuestions, setAllQuestions] = useState();
  useEffect(() => {
    const endpoints = {
      "QUESTIONS": `http://localhost:3001/api/questions`,
    }
    axios.get(endpoints.QUESTIONS)
      .then(response => {
        setAllQuestions(response.data);
      });
  }, []);

  const defaultParam = {
    numberOfQuestion: 3,
    preparingTime: 60,
    answeringTime: 90,
  }

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
        [name]: parseInt(value) || value
      };
    });
  }

  //When submit bottom clicked, set question accoring to Num of question and start counter

  const [questions, setQuestions] = useState([]);
  const [indexOfQuestion, setIndexOfQuestion] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState("");
  const [prepareCounter, setPrepareCounter] = useState(0);
  const [answerCounter, setAnswerCounter] = useState(0);
  const readingQuestionTime = 15;

  const save = (event) => {
    event.preventDefault();
    const selectedQuestions = shuffle(allQuestions, parameters.numberOfQuestion);
    setQuestions(selectedQuestions);
    setPrepareCounter(parameters.preparingTime + readingQuestionTime);
  };

  //Counter
  useEffect(() => {
    prepareCounter > 0 && setTimeout(() => {
      const newTime = prepareCounter - 1;
      setPrepareCounter(newTime);
      setCurrentQuestion(questions[indexOfQuestion].question);
      if (newTime === 0) {
        setAnswerCounter(parameters.answeringTime)
      }
    }, 1000);
  }, [prepareCounter]);

  const startNewQuestion = () => {
    const newQuestionIndex = indexOfQuestion + 1;
    setIndexOfQuestion(newQuestionIndex);
    setCurrentQuestion(questions[newQuestionIndex].question);
    setPrepareCounter(parameters.preparingTime + readingQuestionTime)
  }

  useEffect(() => {
    answerCounter > 0 && setTimeout(() => {
      const newTime = answerCounter - 1;
      setAnswerCounter(newTime);
      if (newTime === 0) {
        startNewQuestion();
      }
    }, 1000);
  }, [answerCounter]);

  return (
    <div className="App">
      <Header />
      <div className="home_container">
        <div className="settings">
          <Form handleOnChange={handleOnChange} onSave={save} parameters={parameters} />
          <Button />
        </div>
        <div className="section-question">
        {<Question question={currentQuestion} num={indexOfQuestion} />}
        {prepareCounter > 0 && prepareCounter <= parameters.preparingTime && <Counter counter={prepareCounter} text={"Preparing time: "} />}
        {answerCounter > 0 && <Counter counter={answerCounter} text={"Answering remaining: "} />}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
