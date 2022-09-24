import React, { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import SessionSettings from './components/SessionSettings';
import MainView from './components/MainView';
import axios from 'axios';
import "./sass/main.scss";

import { shuffle } from './helpers/shuffle-helper'

const App = () => {

  const modes = {
    before: "before",
    prep: "prep",
    answering: "answering",
    finished: "finished"
  };

  //Fetch all questions when it load
  const [allQuestions, setAllQuestions] = useState();
  const [nextEnabled, setNextEnabled] = useState(false);

  // on first render
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

  const defaultParam = {
    numberOfQuestion: 4,
    preparingTime: 5,
    answeringTime: 10,
    readingQuestionTime: 5
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

  //When submit btn clicked, set question accoring to Num of question and start counter
  const [questions, setQuestions] = useState([]);
  const [indexOfQuestion, setIndexOfQuestion] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState("");
  // for both timers
  const [counter, setCounter] = useState(0);
  const counterRef = useRef(0);

  // for pause:
  const [activeTimer, setActiveTimer] = useState(false);
  const activeTimerRef = useRef(false);

  const [mode, setMode] = useState(modes.before);

  // not yet being used
  const [checked, setChecked] = useState(
    {
      limitPreparationTime: true,
      limitAnswaringTime: true,
    });

  const startSession = (event) => {
    event.preventDefault();
    const selectedQuestions = shuffle(allQuestions, parameters.numberOfQuestion);
    setQuestions(selectedQuestions);
    setMode(modes.prep);
    setCurrentQuestion(selectedQuestions[0].question);
    resetTimer()
  };

  const startNewQuestion = () => {
    console.log("pressed new q");
    const newQuestionIndex = indexOfQuestion + 1;
    setIndexOfQuestion(newQuestionIndex);
    setCurrentQuestion(questions[newQuestionIndex].question);
    setMode(modes.prep);
    resetTimer()
    enableNextButton(false);
  }

  // can delete this and access setNextEnabled directly, wrapper function
  const enableNextButton = (isEnabled) => {
    setNextEnabled(isEnabled);
  }

  // Next Button:
  // in prep: move to answering
  // in answering: move to finished
  // in finished: start new question
  // (currently it always calls startNewQuestion)

  // Pause Button:
  // call toggleTimer()


// --- TIMER ---
  useEffect(() => {
    if (!activeTimer) return; // check if timer is paused
    console.log("counter", counter, "target", currentTimerTarget());
    if (counter > currentTimerTarget()) { // check if timer is finished
      handleTimerFinishes()
    }

    setTimeout(() => {
      if (activeTimerRef.current) { // make sure we're not paused
        setCounter(counter + 1);
        counterRef.current = counter + 1;
      }
    }, 1000);
  }, [counter, activeTimer]);

  const handleTimerFinishes = () => {
    console.log("handle finish fired", mode);
    if (mode === modes.prep) {
      setMode(modes.answering);
      resetTimer();
    } else if (mode === modes.answering) {
      setMode(modes.finished);
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

  // current timer target depends on mode


  /*
  if you call currentTimerTarget(), it will give the time limit for the current mode
  if yoy call currentTimerTarget(modes.prep), it will give the time limit for parameters.preparingTime
  */
  const currentTimerTarget = (newMode) => {
    const currentMode = newMode || mode;

    if (currentMode === modes.prep) {
      return parameters.preparingTime;
    } else if (currentMode === modes.answering) {
      return parameters.answeringTime;
    }
  }

  const resetTimer = () => {
    setTimer(true);
    setCounter(0);
    counterRef.current = 0;
  }

  const hasRemainingQuestions = () => {
    return indexOfQuestion < questions.length - 1;
  }

  const checkUnlimit = (event) => {
    const { name } = event.target;
    setChecked((prev) => {
      return {
        ...prev,
        [name]: !checked[name]
      };
    });
  }



  return (
    <div className="App">
      <Header />
      <div className="home_container">
        <SessionSettings
          handleOnChange={handleOnChange}
          startSession={startSession}
          parameters={parameters}
          defaultChecked={checked}
          checkUnlimit={checkUnlimit}
          checked={checked}
        />
        <MainView
          currentQuestion={currentQuestion}
          indexOfQuestion={indexOfQuestion}
          prepareCounter={mode === modes.prep && counter}
          prepTime={currentTimerTarget()}
          answerCounter={mode === modes.answering && counter}
          // readingCounter={currentTimerTarget()}
          nextEnabled={nextEnabled}
          startNewQuestion={startNewQuestion}
          mode={mode}
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
