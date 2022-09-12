import React, {useEffect, useState} from 'react';
import cors from 'cors';
import axios from 'axios';

const DisplayQustion = () => {
  const url = "http://localhost:3001/"

  const [questions, setQuestions] = useState([]);

  useEffect(()=> {
    const endpoints = {
      "QUESTIONS": `http://localhost:3001/api/questions`,
    }
    axios.get(endpoints.QUESTIONS)
      .then(response => {
        const allQuestions = response.data;
        setQuestions(allQuestions);
      });
  },[])

  const listQuestion = questions.map((el) => {
      return <p>{el.question}</p>;
    })

  return (
    <div>{listQuestion}</div>
  )
}

export default DisplayQustion