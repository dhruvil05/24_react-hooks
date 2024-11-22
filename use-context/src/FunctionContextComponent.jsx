import React from 'react'
import { useTheme, useThemeUpdate } from './ThemeContext';

const FunctionContextComponent = () => {
    const darkTheme = useTheme();
    const toggleTheme = useThemeUpdate()
    
    const themeStyle = {
        backgroundColor: darkTheme ? 'black' : 'lightgray',
        color: darkTheme ? 'white' : 'black',
        padding: '2rem',
        margin: '2rem',
        borderRadius: '1rem'
    }
  return (
    <>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <div style={themeStyle}>Function Theme</div>
    </>
  )
}

export default FunctionContextComponent