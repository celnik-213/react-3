import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import DateTime from './components/DateTimeCard.jsx'
import Zadanie from './components/AnalizaKodu.jsx'
import CodeSnippet from './components/CodeSnippet.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DateTime />
    <Zadanie />
    <CodeSnippet title='Programowanie' language='JavaScript' code='const element = ( <> <h1>Tytuł</h1> <p>Opis</p> </> ); ' />
  </StrictMode>,
)
