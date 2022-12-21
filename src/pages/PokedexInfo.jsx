import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../components/Header'
import '../components/pokedex/styles/pokedexInfo.css'

const PokedexInfo = () => {



    const {id} = useParams()   
    const [pokemon, setPokemon] = useState()
    useEffect(()=>{
        const URL = `https://pokeapi.co/api/v2/pokemon/${id}`
        axios.get(URL)
            .then(res => setPokemon(res.data))
            .catch(err=> console.log(err))
    },[id])
   /*  const line = {
        width: {},
    } */
    console.log(pokemon)
  return (
    <div >
        <Header/>
        <div className='info'>
            <div className={`info__bg bg-${pokemon?.types[0].type.name}`}>
                    <img className='info__poke-img' src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
                </div>
            <div className='info__main'>
                    <p className='info__id'>#{id}</p>
                <div className='info__name-container'>
                    <img className='header__Vector' src="/Home/Vector1.png"  alt="" />
                    <h2 className='info__name'>{pokemon?.name}</h2>
                    <img className='header__Vector' src="/Home/Vector1.png"  alt="" />
                </div>
                
                <ul className='info__weight-height'>
                    <li className='info__item'>Altura <span className='info__data'>{pokemon?.weight}</span> </li>
                    <li className='info__item'>Peso <span className='info__data'>{pokemon?.height} </span></li>
                </ul>
                <div className='info__type-abilities'>
                    <div className='info__type-container'>
                        <h4 className='info__subtitle-h4'>type</h4>
                        <ul className='info__type-list'>
                            {
                                pokemon?.types.map( typee=>(
                                    <li  key={typee.type.name} className={`info__item-type bg-${typee.type.name}`}>{typee.type.name}</li>
                                ))
                            
                            }
                        </ul>
                    </div>
                    <div className='info__abilities-container'>
                        <h4 className='info__subtitle-h4'>abilities</h4>
                        <ul className='info__abilities-list'>
                            {
                                pokemon?.abilities.map( e=>(
                                    <li key={e.ability.name} className='info__item-ability'>{e.ability.name}</li>
                                ))
                            }
                        </ul>
                    </div>
                
                </div>
                <div className='info__stats-container'>
                    <div className='subtitle-stats-container'>
                        <h3 className='info__subtitle-h3'>Stats</h3>
                        <img className='header__Vector' src="/Home/Vector1.png"  alt="" />
                    </div>
                    <ul>
                        {
                            pokemon?.stats.map(stat => (
                                <> 
                                
                                <li className='info-stat-item' key={stat.stat.name}>
                                    <span>{stat.stat.name}:</span> 
                                    <span>{stat.base_stat} / 150</span> 
                                </li>
                                <div  className={`bar-stat`} key={stat.stat.url}>
                                    <div  className={`bar-stat-2`}>

                                    </div>
                                </div>
                                </>
                            
                            ))
                        }
                    </ul>
                
                </div>
            </div>
            <div className='info__movements-container'>
                <div className='subtitle-movements-container'>
                    <h3 className='info__subtitle-h3'>Movements</h3>
                    <img className='header__Vector' src="/Home/Vector1.png"  alt="" />

                </div>
                
                {
                    pokemon?.moves.map( move=>(
                        <p className='info__move-item'>{move.move.name}</p>
                    ))
                }
            </div>
        </div>
        

        
    </div>
  )
}

export default PokedexInfo