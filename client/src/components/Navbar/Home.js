import React from "react";
import { Link, useNavigate } from "react-router-dom";
// import "../styles/Home.css";
import Navbar from "./Navbar";
// import Single from "../Single";

function Home() {
    const navigate = useNavigate()
    function handleClick() {
        navigate("/single")
    }
    return (
        <>
            <Navbar />
            <div className="home" style={{ backgroundImage: 'logo192.jpg' }}>
                <div className="headerContainer">
                    <Link to="/single">
                        <button onClick={handleClick}>View More</button>
                    </Link>
                </div>
            </div>

        </>

    );
}

export default Home;
