import { useSelector } from 'react-redux'
import './App.css'
import {Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ProtectedRoute from './components/ProtectedRoute'
import Pokedex from './pages/Pokedex'
import PokedexInfo from './pages/PokedexInfo'

function App() {
  
  const trainer = useSelector(state => state.trainer)

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
      {/*   Rutas Protegidas */}
        <Route element={<ProtectedRoute/>}>
          <Route path='/pokedex' element={<Pokedex/>}/>
          <Route path='/pokedex/:id' element={<PokedexInfo/>}/>
        </Route>
      </Routes>


    </div>
  )
}

export default App
