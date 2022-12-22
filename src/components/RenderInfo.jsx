import React from 'react'
import '../components/pokedex/styles/pokedexInfo.css'

const RenderInfo = ({stat}) => {
  return (
        <div > 
            
            <li className='info-stat-item' >
                <span >{stat.stat.name}:</span> 
                <span >{stat.base_stat} / 150</span> 
            </li>
            <div   className={`bar-stat`} >
                <div  className="progress__fill" style={{ width: `${stat.base_stat / 1.5}%`}}>          
                </div>
            </div>
        </div>
  )
}

export default RenderInfo