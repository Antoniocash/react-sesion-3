import React, {useEffect, useState} from "react"
const baseUrl = "https://pokeapi.co/api/v2/pokemon/"

export default function App() {
  const [isLoading, setIsLoading] = useState (false)
  const [character, setCharacter] = useState({})
  const [search, setSearch] = useState("")

  const handleText = (event)=>{
    setSearch(event.target.value.toLowerCase())
    console.log(event.target.value)
  }

  useEffect (()=>{
    
  })

  const searchPokemon = () => {
    setIsLoading(true)
    fetch(baseUrl + search)
    .then((response) => response.json())
    .then((pokemon)=> {
      setCharacter({
        name: pokemon.name,
        img: pokemon.sprites.front_default
      })
      setIsLoading(false)
    })
  }

  return (
    <div> 
   <input 
   value = {search}
   onChange={handleText}/>
   <button onClick={searchPokemon}> Search </button>
   <p> {character.name} </p>
   <img src={character.img}/> 
  </div>
  )
}