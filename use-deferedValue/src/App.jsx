import { useState } from 'react'
import './App.css'
import List from './List'

function App() {
  const [input, setInput] = useState("")
  
  function handleChange(e) {
    setInput(e.target.value)
  }

  return (
    <>
      <div>
        <input type="text" value={input} onChange={handleChange}/>
      </div>
      <div className="card">
        <List input={input} />
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
