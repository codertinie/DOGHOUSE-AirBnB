import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../../styles/Navbar.css'

function Navbar() {
    const [openLinks, setOpenLinks] = useState(false);

    const toggleNavbar = () => {
        setOpenLinks(!openLinks);
    };

    return (
        <>

            <div className="navbar">
                <div className="leftSide" id={openLinks ? "open" : "close"}>
                    <h1>DOGHOUSES-AIRBNB</h1>
                    <div className="hiddenLinks">
                        <Link to="/"> Home </Link>
                        <Link to="/about"> About </Link>
                    </div>
                </div>
                <div className="rightSide">
                    <Link to="/"> Home </Link>
                    <Link to="/about"> About </Link>
                    <Link to="/login">Login</Link>
                    <Link to="/signup">Signup</Link>
                    <button onClick={toggleNavbar}>

                    </button>
                </div>

            </div>
        </>

    );
}

export default Navbar;
