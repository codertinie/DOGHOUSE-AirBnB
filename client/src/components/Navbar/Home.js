import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Home.css";
import Navbar from "./Navbar";
// import Single from '../Single'
// import Single from "../Single";

function Home({ dogHouses, click }) {


    const dogHouse = dogHouses.map((house) => (
        <>
            <div className="card" key={house.id}>
                <img src={house.image_url} alt={house.image_url} />
                <div className="centered">
                    <h3>{house.name}</h3>
                    <h3>Location: {house.location}</h3>
                    <p><span>Price:</span>{house.price}</p>
                </div>
                <br></br>
                <br></br>
                <Link to="/single">
                        <button onClick={() => click(house.id)} >View More</button>
                </Link>
            </div>
        </>))
    // const navigate = useNavigate()
    // function handleClick() {
    //     navigate("/single")
    // }
    return (
        <>
            <Navbar />
            <div className="container">
                {dogHouse}
            </div>

        </>

    );
}

export default Home;
