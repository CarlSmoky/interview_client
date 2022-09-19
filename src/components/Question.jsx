import React from 'react';

const Question = ({ num, question }) => {

  const questionNumberText = () => {
    return question ===  "" ? "" : `No. ${num + 1}`
  }

  return (
    <section className="section-question">
      <div className="question">
        <span className="question__number">{questionNumberText()}</span>
        <p className="question__content">{question}</p>
      </div>
    </section>
  )
}

export default Question;