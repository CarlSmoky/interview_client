import Form from './Form';

const SessionSettings = ({sessionSettingsRef, handleOnChange, startSession, parameters, defaultChecked, isChecked, isBefore}) => {
  return (
    <section className="section-session_settings" ref={sessionSettingsRef}> 
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