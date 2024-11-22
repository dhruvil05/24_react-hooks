import React, { useState } from 'react'
import './App.css'
import { useTransition } from 'react'

function App() {
  const [isPending, startTransition] = useTransition()
  const [input, setInput] = useState("")
  const [list, setList] = useState([])

  const LIST_SIZE = 5000

  function handleChange(e) {
    setInput(e.target.value)

    startTransition(() => {
      const l = []

      for (let i = 0; i < LIST_SIZE; i++) {
        l.push(e.target.value)
      }
      setList(l)
    })
  }

  return (
    <>
      <p className="read-the-docs">
        useTransition hook is used to defer the state update until the next.
      </p>
      
      <div className="card">
        <input type="text" value={input} onChange={handleChange}/>
        {isPending && <p>Updating list...</p>}
        <br />
        <ul>
          {list.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
      </div>
    </>
  )
}

export default App
