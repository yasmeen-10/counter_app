import { useState } from 'react'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0)

  const addValue = () => {
    if (counter >= 20) return
    setCounter(prevCounter => prevCounter + 1)
  }

  const removeValue = () => {
    if (counter <= 0) return
    setCounter(prevCounter => prevCounter - 1)
  }

  const resetCounter = () => {
    setCounter(0)
  }

  return (
    <>
      <h1>Counter App</h1>
      <h2>{counter}</h2>

      <button className="increment-btn" onClick={addValue}>Increment</button>
      <button className="decrement-btn" onClick={removeValue}>Decrement</button>
      <button className="reset-btn" onClick={resetCounter}>Reset</button>
    </>
  )
}

export default App
