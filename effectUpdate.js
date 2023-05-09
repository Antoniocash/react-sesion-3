import React, { useState, useEffect } from 'react';
import './style.css';

// Clima puede ser Soleado, Congelado o Normal

export default function App() {
  const [water,setWater] = useState("Liquido")
  const [weather, setWeather] = useState("Soleado")
  
  // DIDMount -> Al inicializar componente, arreglo dependencias vacio

  useEffect(()=>{
    // Aqui se hace la peticion (eventlistener)
    return ()=>{
      //Aqui ejecuto la logica de cuando muere
    }
  },[])

  useEffect(()=>{
    if (weather === "Soleado") {
      setWater("Gaseoso")
    }
    if (weather === "Congelado") {
      setWater("Hielo")
    }
    if (weather === "Normal") {
      setWater("Liquido")
    }
  },[weather])

  return ( <div id="water-container" className="border-black"> {water}
  <button onClick={()=>{
    setWeather("Congelado")
  }}> Congelado </button>
  <button onClick={()=>{
    setWeather("Normal")
  }}> Normal </button>
  <button onClick={()=>{
    setWeather("Soleado")
  }}> Soleado </button>
   </div>
  )
}
