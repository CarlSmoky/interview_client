import Form from './Form';

const SessionSettings = ({handleOnChange, startSession, parameters, defaultChecked, isChecked, isBefore}) => {
  return (
    <section className="section-session_settings"> 
    <Form
      handleOnChange={handleOnChange}
      start={startSession}
      parameters={parameters}
      defaultChecked={defaultChecked}
      isChecked={isChecked}
      isBefore={isBefore}
      />
  </section>
  )
}

export default SessionSettings;