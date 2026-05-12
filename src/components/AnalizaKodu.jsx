import { useState } from 'react'
import '../App.css'

function Zadanie() {
  const userName = 'Jan Kowalski'; 

const userAge = 28; 
const profile = { city: 'Kraków' }; 
const greeting = 'Witaj';

  

return(
<>
    
    <div class="profile"> 

 <h1>{greeting}</h1> 

 <p>Imię: {userName}, wiek: {userAge}</p> 

 <p>Miasto: {profile.city}</p> 

 <span>Godzina: {new Date().getHours()}:{new Date().getMinutes()}</span> 

 </div> 
</>
)


}

export default Zadanie