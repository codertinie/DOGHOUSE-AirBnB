import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Navbar/Home';
import About from './Navbar/About'
import Signup from './Navbar/Signup'
import Login from './Navbar/Login'

function App(){

 const[dogHouses, setDogHouses]=useState([])

    useEffect(()=>{
      fetch('/dog_houses')
      .then(response=>response.json())
      .then((data)=>{
        console.log(data)
        setDogHouses(data)
      })
    },[])

    return (
      
      
      <BrowserRouter>
      <Routes>
        <Route exact path='/' element = { <Home dogHouses={dogHouses} />}/>
        <Route path='/about' element = { <About />} />
        <Route path='/login' element = { <Login/>} />
        <Route path='/signup' element = { <Signup/>} />
        
      </Routes>
      </BrowserRouter>
       
  
    );
  }
  
  
  export default App;
  
  