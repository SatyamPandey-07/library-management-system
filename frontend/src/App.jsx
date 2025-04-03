import { useState } from 'react'
import React from 'react'
import {Route, BrowserRouter as Router, Routes} from "react-router-dom"
import './App.css'
import Navbar from './pages/Navbar'
import Login from './pages/login'
import Signup from './pages/signup'
import HomePage from './pages/HomePage'
import AdminKey from './pages/AdminLogin'

function App() {
  return (
    <>
    <Router>
     
       <div className="flex min-h-screen">
        <Navbar/>
        <div className="flex-1">
          <Routes>
           <Route path="/" element={<HomePage /> }/>
           <Route path="/login" element={<Login /> }/>
           <Route path="/signup" element={<Signup/> }/>
           <Route path="/admin-login" element={<AdminKey/> }/>
          </Routes>
        </div>
        </div>
    </Router>
    </>
  )
}

export default App
