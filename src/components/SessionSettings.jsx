import Form from './Form';

const SessionSettings = ({handleOnChange, startSession, parameters, defaultChecked, checkUnlimit, isChecked, isBefore}) => {
  return (
    <section className="section-session_settings"> 
    <Form
      handleOnChange={handleOnChange}
      start={startSession}
      parameters={parameters}
      defaultChecked={defaultChecked} checkUnlimit={checkUnlimit}
      isChecked={isChecked}
      isBefore={isBefore}
      />
  </section>
  )
}

export default SessionSettings;