import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const hours = new Date().getHours(); 
  const minutes = new Date().getMinutes(); 
  const seconds = new Date().getSeconds(); 
  return (
    <>
    <p>Aktualna godzina: {hours}:{minutes}:{seconds}</p> 
  </>
  
  )
}

export default App
