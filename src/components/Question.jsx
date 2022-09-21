import React from 'react';

const Question = ({ num, question, isDimmed }) => {
  const questionNumberText = () => {
    return question ===  "" ? "" : `No. ${num + 1}`
  }

  return (
    <section className="section-question">
      <div className="question">
        <span className="question__number">{questionNumberText()}</span>
        <p className={`question__content ${isDimmed ? "dimmed" : ""}`}>{question}</p>
      </div>
    </section>
  )
}

export default Question;