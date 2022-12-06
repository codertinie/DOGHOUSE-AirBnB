import React from "react";

export default function Signup() {
  
  return (
    <div className="signup">
      <span className="signuptittle">Sign Up Here</span>

      <form className="registerform">
        <label>Full Name</label>
        <input
          id="username"
          className="registerinput"
          type="text"
          placeholder="Enter your username.."
        />
        <label>Email</label>
        <input
          id="email"
          className="registerinput"
          type="text"
          placeholder="Enter your email..."
        />
           <label>Phone Number</label>
        <input
          id="number"
          className="registerinput"
          type="text"
          placeholder="Enter your phone number..."
        />
           
           <label>Location</label>
        <input
          id="text"
          className="registerinput"
          type="text"
          placeholder="Enter your location..."
        />
           
        <label>Password</label>
        <input
          id="password"
          className="registerinput"
          type="text"
          placeholder="Enter your password..."
        />
        
        <button className="loginbutton">Sign Up
        </button>
      </form>
    </div>
  );
}
