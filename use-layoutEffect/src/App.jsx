import { useLayoutEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ModalExample from './ModalExample'

function App() {
  const [count, setCount] = useState(0)

  useLayoutEffect(() => {
    console.log(count);
    
  }, [count])
  return (
    <>
      
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <p className="read-the-docs">
       useLayoutEffect runs after mutation but before UI render. use st
      </p>
      <ModalExample />
    </>
  )
}

export default App
