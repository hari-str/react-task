import React from 'react'
import { useSelector } from 'react-redux'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './screen/Home'
import Login from './screen/Login'
import './App.css'

const App = () => {

  const userAuth = useSelector((state) => state.userLogin)
  const { userInfo } = userAuth
  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={userInfo ? <Home /> : <Navigate to='/login' />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  )
}

export default App