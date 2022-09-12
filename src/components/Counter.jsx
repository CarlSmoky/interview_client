import React, {useState, useEffect} from 'react'

const Counter = () => {
  const defaultTime = 60;
  const [counter, setCounter] = useState(defaultTime);
  
  useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
  }, [counter]);
  
  return (
    <div>Remaining: {counter}</div>
  )
}

export default Counter