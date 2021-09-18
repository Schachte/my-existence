import React from 'react'
import { createContext, useState } from 'react'
  const initialState = {
    mode: 'dark',
    toggle: () => {}
  }

  export const ThemeContext = createContext(initialState);

  export function ThemeContextProvider({ children }) {
    const [mode, setMode] = useState('dark');

    React.useEffect(() => {
      const isDark = localStorage.getItem('mode') === 'dark'
      setMode(isDark == true ? "dark" : "light")
    }, 'dark')


    const toggle = () => {
      const type = mode == "light" ? "dark" : "light";
      localStorage.setItem('mode', type)
      setMode(type)
    }

    return (
      <ThemeContext.Provider value={{theme: mode, toggle}}>
        {children}
      </ThemeContext.Provider>
    )
  }
  