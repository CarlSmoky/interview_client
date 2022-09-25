import React, { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import SessionSettings from './components/SessionSettings';
import MainView from './components/MainView';
import axios from 'axios';
import "./sass/main.scss";

import { shuffle } from './helpers/shuffle-helper';
import { modes } from './helpers/modes';
import { defaultParam, checkboxParams} from './helpers/defaultParams';

const App = () => {

  const [mode, setMode] = useState(modes.before);
  
  //Fetch all questions when it load
  const [allQuestions, setAllQuestions] = useState();
  const [parameters, setParameters] = useState({
    ...defaultParam
  });

  //When submit btn clicked, set question accoring params
  const [questions, setQuestions] = useState([]);
  const [indexOfQuestion, setIndexOfQuestion] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState("");
  
  // For both timers
  const [counter, setCounter] = useState(0);
  const prepCounterRef = useRef(0);
  const answerCounterRef = useRef(0);

  // For pause:
  const [activeTimer, setActiveTimer] = useState(false);
  const activeTimerRef = useRef(false);

  // On first render
  useEffect(() => {
    const endpoints = {
      "QUESTIONS": `http://localhost:3001/api/questions`,
    }
    axios.get(endpoints.QUESTIONS)
      .then(response => {
        setAllQuestions(response.data);
      });
      setTimer(false);
  }, []);

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setParameters((prev) => {
      console.log(!parameters[name] );
      const newParam = checkboxParams.includes(name) ? !parameters[name] : parseInt(value);
      
      return {
        ...prev,
        [name]: newParam,
      };
    });
  }

  const startSession = (event) => {
    event.preventDefault();
    const selectedQuestions = shuffle(allQuestions, parameters.numberOfQuestion);
    setQuestions(selectedQuestions);
    setMode(modes.prep);
    setIndexOfQuestion(0);
    setCurrentQuestion(selectedQuestions[0].question);
    resetTimer()
  };

  const startNewQuestion = () => {
    const newQuestionIndex = indexOfQuestion + 1;
    setIndexOfQuestion(newQuestionIndex);
    setCurrentQuestion(questions[newQuestionIndex].question);
    setMode(modes.prep);
    resetTimer()
  }

  const handleMainButton = () => {
    if (mode === modes.prep) {
      setMode(modes.answering);
      resetTimer();
      console.log("move to answering");
    } else if (mode === modes.answering) {
      handleTransitionToFinished()
    } else if (mode === modes.finished) {
      startNewQuestion();
    } 
  }

  const mainButtonText = () => {
    if (mode === modes.prep) {
      return "Start answer";
    } else if (mode === modes.answering) {
      return "Done";
    } else if (mode === modes.finished) {
      return "Next";
    } else {
      return "_"; //Need to change
    }
  }

  const handlePauseButton = () => {
    toggleTimer();
  }

  const handleTransitionToFinished = () => {
    if (indexOfQuestion < questions.length - 1) {
      console.log("fo to finished");
      setMode(modes.finished);
    } else {
      console.log("starting over...");
      setMode(modes.before);
    }
  }

// ----- PREP TIMER -----
  useEffect(() => {
    if (!activeTimer || mode !== modes.prep || parameters.limitPreparationTime) return; 
    if (counter > currentTimerTarget()) { // check if timer is finished
      handleTimerFinishes()
    }

    setTimeout(() => {
      if (activeTimerRef.current) { // make sure we're not paused
        const newTime = prepCounterRef.current + 1;
        prepCounterRef.current = newTime;
        setCounter(newTime);
      }
    }, 1000);
  }, [counter, activeTimer]);

  // ----- answer timer -----
  useEffect(() => {
    if (!activeTimer ||  mode !== modes.answering || parameters.limitAnswaringTime) return; 
    if (counter  > currentTimerTarget()) { // check if timer is finished
      handleTimerFinishes()
    }

    setTimeout(() => {
      if (activeTimerRef.current) { // make sure we're not paused
        const newTime = answerCounterRef.current + 1;
        answerCounterRef.current = newTime;
        setCounter(newTime);
      }
    }, 1000);
  }, [counter, activeTimer]);



  const handleTimerFinishes = () => {
    console.log("handle finish fired", mode);
    if (mode === modes.prep) {
      setMode(modes.answering);
      resetTimer();
    } else if (mode === modes.answering) {
      handleTransitionToFinished()
      setTimer(false);
    }
  }

//  --- TIMER HELPERS ---

  // pause will use this function
  const toggleTimer = () => {
    setTimer(!activeTimerRef.current);
  }
  
  const setTimer = (isOn) => {
    setActiveTimer(isOn);
    activeTimerRef.current = isOn;
  }

  const currentTimerTarget = () => {
    const currentMode = mode;

    if (currentMode === modes.prep) {
      return parameters.preparingTime;
    } else if (currentMode === modes.answering) {
      return parameters.answeringTime;
    }
  }

  const resetTimer = () => {
    setTimer(false);
    setCounter(0);
    prepCounterRef.current = 0;
    answerCounterRef.current = 0;
    setTimer(true);
  }

  const nextEnabled = () => {
    return indexOfQuestion < questions.length - 1 || mode === modes.prep || mode === modes.answering;
  }

  const isChecked = (nameOfInput) => {
    return parameters[nameOfInput];
  }

  const isBefore = () => {
    return mode !== modes.before;
  }

  const endSession = () => {
    setMode(modes.before);
  }



  return (
    <div className="App">
      <Header />
      <div className="home_container">
        <SessionSettings
          handleOnChange={handleOnChange}
          startSession={startSession}
          parameters={parameters}
          isChecked={isChecked}
          isBefore={isBefore}
        />
        <MainView
          currentQuestion={currentQuestion}
          indexOfQuestion={indexOfQuestion}
          counter={counter}
          handleMainButton={handleMainButton}
          handlePauseButton={handlePauseButton}
          parameters={parameters}
          mode={mode}
          nextEnabled={nextEnabled}
          mainButtonText={mainButtonText}
          endSession={endSession}
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
