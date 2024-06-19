import React, { useState, useEffect } from 'react'
import axios from 'axios'
import CardCharacters from '../src/components/CardCharacters'

const App = () => {

  const [characters, setCharacters] = useState([])
  const [nameSearch, setNamesearch] = useState("")
  const [statusSearch, setStatusSearch] = useState("")
  const [selectFilter, setSelectFilter] = useState("")
  const [speciesFilter, setSpeciesFilter] = useState("")

  const getCharacters = async () => {

    try {
      const response = await axios.get("https://rickandmortyapi.com/api/character")
      const data = response.data.results

      setCharacters(data)

    } catch (error) {
      console.log(error)
    }

  }

  useEffect(() => {
    getCharacters()
  }, [])

  const handleNameSearch = (e) => {

    setNamesearch(e.target.value)
  }

  const handleSelectFilter = (e) => {
    setSelectFilter(e.target.value)
  }

  const speciesSearch = (e) => {
    setSpeciesFilter(e.target.value)
  }

  const handlestatusSearch = (e) => {

    setStatusSearch(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  const results = characters.filter((info) => {
    const filterName = info.name.toLowerCase().includes(nameSearch.toLowerCase())
    const filterStatus = info.status.toLowerCase().includes(statusSearch.toLowerCase())
    const filterSelect = info.name.toLowerCase().includes(selectFilter.toLowerCase())
    const filterspecies = info.species.toLowerCase().includes(speciesFilter.toLowerCase())
    return filterName && filterStatus & filterSelect && filterspecies
  })

  return (
    <>
      <span>Busca Tu personaje</span>
      <form onSubmit={handleSubmit} >
        <input value={nameSearch} onChange={handleNameSearch} type="text" placeholder='ingrese un nombre' />
        <select value={selectFilter} onChange={handleSelectFilter}>
          <option value="" disabled={selectFilter === ""}>Todos</option>
          <option value="Rick">Ricks</option>
          <option value="Morty">Mortys</option>
        </select>
      </form>

      <form onSubmit={handleSubmit} >
        <input value={statusSearch} onChange={handlestatusSearch} type="text" placeholder='ingrese un estado' />
        <select value={statusSearch} onChange={handlestatusSearch} >
          <option value="" disabled selected >Todos</option>
          <option value="Alive">Vivos</option>
          <option value="unknown">Perdidos</option>
        </select>


      </form>
      <form onSubmit={handleSubmit}>
        <input value={speciesFilter} onChange={speciesSearch} type='text' placeholder='Seleccione una especie' />
        <select value={speciesFilter} onChange={speciesSearch}>
          <option value="" disabled={speciesFilter === ""}>Todos</option>
          <option value="Human">Humanos</option>
          <option value="Alien">Aliens</option>
          </select>


      </form>
      {
        results ?
          results.map((character, index) => (
            <CardCharacters
              infoCharacters={character}
              key={index} />
          )) :
          characters.map((character, index) => (

            <CardCharacters infoCharacters={character} key={index} ></CardCharacters>
          ))
      }
    </>
  )
}

export default App