import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setTrainerGloval } from '../store/slices/trainer.slice'
import '../components/pokedex/styles/home.css'


const Home = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSubmit = event => {
        event.preventDefault()
        dispatch(setTrainerGloval(event.target.name.value.trim()))

        event.target.name.value = ''
        navigate('/pokedex')
    }
  return (
    <div className='home-container'>
        <div className='home'>
            <img className='home__pokedex' src="/Home/pokedex.png" alt="" />
            <h1 className='home__title'>¡Hello Trainer!</h1>
            <h2 className='home__subtitle'>Give me your name to start</h2>
            <form className='home__form' onSubmit={handleSubmit}>
                <input className='home__name' id='name' type="text"  placeholder='Your name...'/>
                <button className='home__start-btn' >Start</button>
            </form>
        </div>
        <footer className='home__footer'>
            <div className='home__red'>
                <img className='home__pokeball' src="/Home/pokeball.png" alt="" />
            </div>
            <div className='home__black'></div>
        </footer>
        
    </div>
  )
}

export default Home