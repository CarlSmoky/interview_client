import Form from './Form';

const SessionSettings = ({handleOnChange, startSession, parameters}) => {
  return (
    <section className="section-session_settings"> 
    <Form handleOnChange={handleOnChange} onSave={startSession} parameters={parameters} />
  </section>
  )
}

export default SessionSettings;