import Form from './Form';

const SessionSettings = ({handleOnChange, save, parameters}) => {
  return (
    <section className="section-session_settings"> 
    <Form handleOnChange={handleOnChange} onSave={save} parameters={parameters} />
  </section>
  )
}

export default SessionSettings;