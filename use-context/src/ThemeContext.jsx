import React, {useState, useContext, createContext} from 'react'   

const ThemeContext = createContext()
const ThemeToggleContext = createContext()

export function useTheme() {
    return useContext(ThemeContext)
}

export function useThemeUpdate() {
    return useContext(ThemeToggleContext)
}

export function ThemeProvider({children}) {

    const [darkTheme, setDarkTheme] = useState(true);
    
    function toggleTheme() {
        setDarkTheme(PreDarkTheme => !PreDarkTheme)
    }

    return (
        <ThemeContext.Provider value={darkTheme}>
            <ThemeToggleContext.Provider value={toggleTheme}>
                {children}
            </ThemeToggleContext.Provider>
        </ThemeContext.Provider>
       
    )
}