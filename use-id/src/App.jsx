import { React } from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import EmailForm from './EmailForm'

function App() {
  
  return (
    <>
      <EmailForm /> 
      <div className="card">
        <p>
          The useId hook in React is used to generate unique IDs that are stable across server and client renders. It was introduced in React 18 to address the need for consistent, collision-free IDs in components, particularly in scenarios involving accessibility or complex form structures.
        </p>
      </div>
      <EmailForm /> 
      
    </>
  )
}

export default App
