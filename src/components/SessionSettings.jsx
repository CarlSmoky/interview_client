import Form from './Form';

const SessionSettings = ({handleOnChange, startSession, parameters, defaultChecked, checkLimit}) => {
  return (
    <section className="section-session_settings"> 
    <h1>Before Start</h1>
    <Form handleOnChange={handleOnChange} onSave={startSession} parameters={parameters} defaultChecked={defaultChecked} checkLimit={checkLimit}/>
  </section>
  )
}

export default SessionSettings;