import React from 'react'
import './App.css'
import CustomInput from './CustomInput'

function App() {
  const [input, setInput] = React.useState('')
  const handleFocus = React.useRef()

  function handleChange(e){
    setInput(e.target.value)
  }

  return (
    <>
      <div className="card">
        {/* <input type="text" ref={handleFocus}  /> */}
        <CustomInput value={input} className='form-control' onChange={handleChange} ref={handleFocus} />

        <button onClick={()=> handleFocus.current.alertHi()}>Hi</button>
        <button onClick={()=> handleFocus.current.alertBye()}>Bye</button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
