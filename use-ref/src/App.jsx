import { useEffect } from 'react';
import { useRef } from 'react'
import { useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState('');
  const prevName = useRef(''); 
  const refPera = useRef('');
  useEffect(() => {
    prevName.current = name;
  }, [name]);

  useEffect(() => {
    refPera.current.style.textAlign = 'left';
  }, []);
  
  return (
    <>
      <h1>useRef</h1>
      <div className="card">
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <p>My name is: <b> {name} </b> and used to be <i> {prevName.current} </i></p>
        <br />
      </div>
      <div className="read-the-docs" ref={refPera}>
          In React, the useRef hook is used to persist values across renders without causing re-renders. It provides a way to access and store a mutable reference to a DOM element or any other value.
          <ul>
            Here’s a simple breakdown:
            <li>
              Create a ref: const myRef = useRef(initialValue);
            </li>
            <li>
              Access or modify the ref: myRef.current holds the mutable value.
            </li>
            <li>
              Usage: Commonly used to directly interact with DOM elements or to keep values that don’t trigger re-renders.
            </li>
          </ul>
      </div>
    </>
  )
}

export default App
