import './App.css'
import useLocalStorage from './useLocalStorage'

function App() {
  const [input, setInput] = useLocalStorage('data', '')

  return (
    <>
      <div>
        <input type="text" value={input} onChange={ e => setInput(e.target.value)}/>
      </div>
    </>
  )
}

export default App
