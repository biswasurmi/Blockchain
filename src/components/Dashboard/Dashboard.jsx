import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Feature from '../Feature/Feature';
import Navbar from '../Navbar/Navbar';
import LogoSearchBar from '../LogoSearchBar/LogoSearchBar'


import Hero from '../Hero/Hero';


const Dashboard  = () => {
  return (
    <div>
         
   <Navbar/>
   <LogoSearchBar/>
   <Feature />

    </div>
  
  )
}

export default Dashboard