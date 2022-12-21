import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './styles/pokeCard.css'


const PokeCard = ({url}) => {
    const [poke, setPoke] = useState()
    useEffect(()=>{
        
        axios.get(url)
            .then(res=> setPoke(res.data))
            .catch(err=> console.log(err))
    },[])

    const navigate = useNavigate()

    const handleClick = ()=>{
        navigate(`/pokedex/${poke.id}`)
    }

  return (
   <article className={`poke-card border-${poke?.types[0].type.name}`} onClick={handleClick}>
        <header className={`poke-card__header bg-${poke?.types[0].type.name}`}>
            <img className='poke-card__sprite' src={poke?.sprites.other['official-artwork'].front_default} alt="" />
            
        </header> 
        <main className='poke-card__main'>
            <h3 className={`poke-card__name color-${poke?.types[0].type.name}`}>{poke?.name}</h3>
            <ul className='poke-card__types-container'>
               {
                poke?.types.map(typee =>(
                    <li className='poke-card__type' key={typee.type.name}> {typee.type.name}</li>
                  
                ))
               } 
            </ul>
        </main>   
        <footer className='poke-card__footer'>
            <ul className='poke-card__stats-container'>
                {
                    poke?.stats.map(statt =>(
                        <li className='poke-card__stat' key={statt.stat.name}>
                            <span className='poke-card__label'>
                                {statt.stat.name}:
                            </span>  
                            <span className={`poke-card__number color-${poke?.types[0].type.name}`}>
                                {statt.base_stat}
                            </span>
                            
                        </li>
                    ))
                }

            </ul>
        </footer>
        

   </article>
  )
}

export default PokeCard