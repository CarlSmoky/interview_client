import React from 'react';

const Qustion = ({ num, question }) => {

  return (
    <section className="section-question">
      <div className="question">
        <span className="question__number">No. {num + 1}</span>
        <p className="question__content">{question}</p>
      </div>
    </section>
  )
}

export default Qustion;