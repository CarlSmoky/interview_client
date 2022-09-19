import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import SessionSettings from './components/SessionSettings';
import MainView from './components/MainView';
import axios from 'axios';
import "./sass/main.scss";

import { shuffle } from './helpers/shuffle-helper'

const App = () => {

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
    // numberOfQuestion: 3,
    // preparingTime: 5,
    // answeringTime: 10,
    numberOfQuestion: 2,
    preparingTime: 2,
    answeringTime: 2,
  }

  const [parameters, setParameters] = useState({
    ...defaultParam
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
  const readingQuestionTime = 1;

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

  const hasRemainingQuestions = () => {
    return indexOfQuestion < questions.length - 1;
  }

  useEffect(() => {
    answerCounter > 0 && setTimeout(() => {
      const newTime = answerCounter - 1;
      setAnswerCounter(newTime);
      if (newTime === 0 && hasRemainingQuestions()) {
        startNewQuestion();
      }
    }, 1000);
  }, [answerCounter]);

  return (
    <div className="App">
      <Header />
      <div className="home_container">
        <SessionSettings
          handleOnChange={handleOnChange}
          save={save}
          parameters={parameters}
        />
        <MainView
          currentQuestion={currentQuestion}
          indexOfQuestion={indexOfQuestion}
          prepareCounter={prepareCounter}
          prepTime={parameters.preparingTime}
          answerCounter={answerCounter}
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
