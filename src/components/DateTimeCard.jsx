import { useState } from 'react'
import '../App.css'

function DateTime() {
  const hours = new Date().getHours(); 
  const minutes = new Date().getMinutes();
  const day = new Date().getDate();
  const month = new Date().getMonth() + 1; 
  const year = new Date().getFullYear(); 
  return ( 
 
    <>
    <p>Aktualna godzina: {hours}:{minutes}</p> 
    <p>Data: {day}.{month}.{year}</p>
  </>
  
  )
}
//siema
export default DateTime
