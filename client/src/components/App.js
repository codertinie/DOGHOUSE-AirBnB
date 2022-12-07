import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Navbar/Home';
import About from './Navbar/About'
import Signup from './Navbar/Signup'
import Login from './Navbar/Login'
import Single from './Single';

function App() {

  const [user, setUser] = useState(null)

  useEffect(() => {
    fetch('/me')
      .then((r) => {
        if (r.ok) {
          r.json().then((user) => setUser(user))
        }
      })
  }, [setUser])

  return (


    <BrowserRouter>
      <Routes>

        <Route exact path='/' element = { <Home dogHouses={dogHouses} />}/>
        <Route path='/about' element = { <About />} />
        <Route path='/login' element = { <Login/>} />
        <Route path='/signup' element = { <Signup/>} />
        <Route path='/single' element = {<Single/>} />

        <Route exact path='/' element={<Home/>} />
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<Login onLogin={setUser} />} />
        <Route path='/signup' element={<Signup onLogin={setUser} />} />

      </Routes>
    </BrowserRouter>


  );
}


export default App;

