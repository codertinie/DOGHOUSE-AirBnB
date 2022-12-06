import React from "react"
import { Link } from "react-router-dom"
export default function Register() {
    return (
        <div className="login">
            <span className="registertittle">Login</span>

            <form className="registerform">

                <label>Email</label>
                <input className="registerinput" type="text" placeholder="Enter your email..." />
                <label>Password</label>
                <input className="registerinput" type="text" placeholder="Enter your password..." />
                <button className="loginbutton">Login
                </button>
                <button className="registerbutton">
                    <Link className="link" to="/Signup">signup</Link>
                </button>

            </form>
        </div>
    )
}


