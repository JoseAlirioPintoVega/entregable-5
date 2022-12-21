import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'
import PokeCard from '../components/pokedex/PokeCard'
import { useNavigate } from 'react-router-dom'
import Pagination from '../components/pokedex/Pagination'
import Header from '../components/Header'
import '../components/pokedex/styles/pokedex.css'

const Pokedex = () => {
    const {trainer} = useSelector(state => state)
    const [pokemons, setPokemons] = useState()
    const [types, setTypes] = useState()
    const [typeSelected, setTypeSelected] = useState('All pokemons')

    const navigate = useNavigate()

    useEffect(()=>{
        if(typeSelected !== "All pokemons"){
            axios.get(typeSelected)
                .then(res=> setPokemons(res.data.pokemon.map(e => e.pokemon)))
                .catch(err => console.log(res))
        }else{
            const URL = `https://pokeapi.co/api/v2/pokemon?pffset=0&limit=9000`
            axios.get(URL)
            .then(res=>setPokemons(res.data.results))
            .catch(err => console.log(err))
        }
        
    },[typeSelected])

    useEffect(()=>{
        const URL = `https://pokeapi.co/api/v2/type`
        axios.get(URL)
            .then(res => setTypes(res.data.results))
            .catch(err => console.log(res))
    },[])
    
    const handleSubmit = event =>{
        event.preventDefault()
        const input = event.target.search.value.trim().toLowerCase()
        navigate(`/pokedex/${input}`)
    }
    
    const handleChance = event =>{
        setTypeSelected(event.target.value)
        setPage(1)
    }


    // logica de la  paginación 
    const [page, setPage] = useState(1)
    const [pokePerPage, setPokePerPage] = useState(9)
    const initialPoke = (page - 1 ) * pokePerPage
    const finalPoke = pokePerPage * page
    const maxPage =pokemons && Math.ceil(pokemons.length / pokePerPage)
   


  return (
    <div>
        <Header/>
        <div className='pokedex'>
            <h2 className='pokedex__subtitle'>Welcome <p >{trainer}</p>, here you can find your favorite pokemon.</h2>
            <div className='pokedex__search-container'>
                <form className='pokedex__form' onSubmit={handleSubmit}>
                    <input id='search' type="text" placeholder='Search your pokemon'/>
                    <button className='pokedex__form-btn'>Search</button>
                </form>
                <select className='pokedex__select' onChange={handleChance}>
                    <option value='All pokemons'>All pokemons</option>
                    {
                        types?.map(type=>(
                            <option key={type.url} value={type.url}>{type.name}</option>
                        ))
                    }
                </select>
            </div>
            <div className='pagination'>

                <Pagination  page={page} maxPage={maxPage} setPage={setPage}/>
            </div>
            <div className='poke-Container'>
                {
                    pokemons?.slice(initialPoke, finalPoke).map(pokemon => (
                        <PokeCard key={pokemon.url} url={pokemon.url}/>
                    ))

                }
            </div>
            <Pagination page={page} maxPage={maxPage} setPage={setPage}/>
        </div>
        <footer className='pokedex__footer'>
            <h2 className='pokedex__by'>by Jose Alirio Pinto Vega</h2>
        </footer>
    </div>
  )
}

export default Pokedex