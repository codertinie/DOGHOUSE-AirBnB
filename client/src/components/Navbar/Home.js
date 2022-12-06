import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/Home.css";
import Navbar from "./Navbar";
//import Single from "../Single";

function Home({ dogHouses }) {
    console.log(dogHouses)
    const dogHouse = dogHouses.map((house) => (
        <div className = "container-1">
            <div className="card">
            <img src={house.image_url} alt=""/>
            <h3>{house.name}</h3>
            <h3>Location: {house.location}</h3>
            <p><span>Price:</span>{house.price}</p>
                    <Link to="/single">
                        <button onClick={handleClick}>View More</button>
                    </Link>

        </div>
        </div> ))
    const navigate = useNavigate()
    function handleClick() {
        navigate("/single")
    }
    return (
        <>
            <Navbar />
            <div class="container">
                {dogHouse}

            </div>

        </>

    );
}

export default Home;
