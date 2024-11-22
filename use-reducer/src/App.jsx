import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useReducer } from 'react'

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1}
    case 'decrement':
      return {count: state.count - 1}
    default:
      throw new Error()
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, {count:0})

  function handleIncrement() {
    dispatch(
      {type: 'increment'}
    )
  }


  function handleDecrement() {
    dispatch(
      {type: 'decrement'}
    )
  }

  return (
    <>
      
      <div className="card">
        <button onClick={handleDecrement}> Dec </button>
        <button>count is {state.count} </button>
        <button onClick={handleIncrement}> Add </button>
      </div>
    </>
  )
}

export default App
