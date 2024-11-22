import { useCallback, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import List from './List'

function App() {
  const [number, setNumber] = useState(1)
  const [dark, setDark] = useState(false)

  const theme = {
    backgroundColor: dark ? '#333' : '#fff',
    color: dark ? '#fff' : '#333'
  }

  const getItems = useCallback((incremantor) => {
    return [number + incremantor, number + 1 + incremantor, number + 2 + incremantor];
  }, [number])

  return (
    <>
      
      <div className="card" style={theme}>
        <input type="number" 
          value={number}
          onChange={e => setNumber(parseInt(e.target.value))}
        />
        <button onClick={ () => setDark(prevDark => !prevDark)}>
          Toggle theme
        </button>

        <List getItems={getItems} />
      </div>
    </>
  )
}

export default App
