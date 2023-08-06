import React, { useContext } from 'react'
import { useTheme,useThemeUpdate } from './ThemeContext';


const ContextComponent = () => {
const darkTheme = useTheme()
const toggleTheme = useThemeUpdate()
const themeStyles = {
    backgroundColor: darkTheme?'#333' : '#CCC',
    color: darkTheme?'#ccc' : '#333',
    padding : '2rem',
    margin : '2rem'
}

  return (
    <>
      <button onClick={toggleTheme}> Toggle Theme</button>
      <div style={themeStyles}>function theme</div>
    
    </>
  )
}

export default ContextComponent;