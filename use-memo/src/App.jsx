import { useMemo } from 'react';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [count, setCount] = useState(0);
  const [dark, setDark] = useState(false);

  const doubleNumber = useMemo(()=>{
    return slowFunction(count);
  },[count]);

  const themeStyles = useMemo(()=>{
    return {
      backgroundColor: dark ? 'black' : 'white',
      color: dark ? 'white' : 'black'
    }
  },[dark]);

  return (
    <>
      <div>
        
      </div>
      <h1>useMemo</h1>
      <div className="card">
        <input type="number" value={count} onChange={e=>setCount(parseInt(e.target.value))} />

        <button onClick={()=>setDark(prevDark => !prevDark)}>Change Theme</button>

        <div style={themeStyles}>{doubleNumber}</div>
        
      </div>
      <p className="read-the-docs" style={themeStyles}>
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

function slowFunction(num){
  for(let i=0;i<100000000;i++){}
  return num*2;
}

export default App
