import Form from './Form';

const SessionSettings = ({handleOnChange, startSession, parameters, defaultChecked, checkUnlimit, checked}) => {
  return (
    <section className="section-session_settings"> 
    <h1>Before Start</h1>
    <Form handleOnChange={handleOnChange} start={startSession} parameters={parameters} defaultChecked={defaultChecked} checkUnlimit={checkUnlimit} checked={checked}/>
  </section>
  )
}

export default SessionSettings;