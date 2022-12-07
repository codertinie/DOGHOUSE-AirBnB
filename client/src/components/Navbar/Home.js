import React,{useEffect, useState} from "react";
import { Link} from "react-router-dom";
import "../../styles/Home.css";
import Navbar from "./Navbar";
import Single from '../Single'
// import Single from "../Single";

function Home({dogHouses, click}) {


    const dogHouse = dogHouses.map((house) => (
        <>
            <div className="card">
            <img src={house.image_url} alt=""/>
            <h3>{house.name}</h3>
            <h3>Location: {house.location}</h3>
            <p><span>Price:</span>{house.price}</p>
                    <Link to="/single">
                        <button onClick={()=>click(house.id)} >View More</button>
                    </Link>

        </div>
        </> ))
    // const navigate = useNavigate()
    // function handleClick() {
    //     navigate("/single")
    // }
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
