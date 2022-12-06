import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";
import Navbar from "./Navbar";

function Home() {
  return (
    <>
    <Navbar />
    <div className="home" style={{ backgroundImage: 'logo192.jpg' }}>
      <div className="headerContainer">
        
        <h1> COMMS Pizzeria </h1>
        <Link to="/menu">
          <button> ORDER NOW </button>
        </Link>
      </div>
    </div>
   
    </>
    
  );
}

export default Home;
