import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Navbar/Home';
import About from './Navbar/About'
import Signup from './Navbar/Signup'
import Login from './Navbar/Login'

class App extends Component {

  render() {
    return (
      
      
      <BrowserRouter>
      <Routes>
        <Route exact path='/' element = { <Home />}/>
        <Route path='/about' element = { <About />} />
        <Route path='/login' element = { <Login/>} />
        <Route path='/signup' element = { <Signup/>} />
        
      </Routes>
      </BrowserRouter>
       
  
    );
  }
  }
  
  export default App;
  
  