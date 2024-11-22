import './App.css'
import useCustomState from './useCustomState'
import useLocalStorage from './useLocalStorage'
import useUpdateLogger from './useUpdateLogger'

function App() {
  // const [count, setCount] = useCustomState(0)
  const [name, setName] = useLocalStorage('name', '')

  // useUpdateLogger(name)
  return (
    <>
     
      <div className="card">
        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}

        <input type="text" value={name} onChange={e => setName(e.target.value)}/>     
       
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
