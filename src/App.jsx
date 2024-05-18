import { useState } from 'react';
import { Outlet } from 'react-router-dom'
import useLocalStorage from 'use-local-storage';
import './App.css'
import NavBar from './components/navBar/NavBar'

function App() {
  const preference = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [isDark, setIsDark] = useLocalStorage('isDark', preference);

  return (
    <>
     <div className="App" data-theme={isDark ? 'dark' : 'light'}>
        <NavBar isDark={isDark} setIsDark={setIsDark}/>
        <Outlet />
     </div>
    </>
  )
}

export default App
