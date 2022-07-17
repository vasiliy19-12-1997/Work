import React, {useEffect, useReducer, useState, useRef, useContext, createContext} from 'react';
import logo from './logo.svg';
import './App.css';
interface Theme {
  color:string,
  backgroud:string,
}
type AvailableThemes = 'light' | 'dark' 
const themes:Record<AvailableThemes, Theme> = {
  light: {
    color: 'blue',
    backgroud: 'black'
  },
  dark:{
    color: 'green',
    backgroud: 'gray'
  },
  
}

const ThemeContext = createContext({
  theme: themes.dark,
  toggle: ()=>{},
})

const ThemeProvider: React.FC = ({children})=>{
  const [currnetTheme, setCurrentTheme] = useState<AvailableThemes>('dark')
  return (
    <ThemeContext.Provider
    value = {{
      toggle:()=>setCurrentTheme(currnetTheme === 'dark' ? 'light' : 'dark'),
      theme:themes[currnetTheme]
    }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

const Hooks =()=>{
  const theme = useContext(ThemeContext)




  return (
    <button style={{background: theme.backgroud, color: theme.color}}>
    Some button
    </button>
  );
}


export default Hooks;
