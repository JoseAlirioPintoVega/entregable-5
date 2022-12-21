import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
import Header from './Header'

const ProtectedRoute = () => {
    
    const trainer = useSelector(state => state.trainer)

    if(trainer){
        return <Outlet/>
        
        
    }else{
        return <Navigate to='/'/>
    }

}

export default ProtectedRoute