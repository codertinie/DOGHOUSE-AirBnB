import React from "react";
import "../../styles/Abouts.css";
import Navbar from "./Navbar";
function About() {
  return (
    <>
      <Navbar />
      <div className="about">
        <div
          className="aboutTop"
        ></div>
        <div className="aboutBottom">
          <h1> ABOUT US</h1>
          <p>
          Welcome to Doghouse-AirBNB, a full service dog resort and training center that caters to the Katy and Houston communities.
           At Canine Country Club your dog will receive the love and comfort that they deserve.
            Our luxury dog facility offers professional training services, dog grooming and boarding with amenities that will keep your pet exercised and entertained.
            We pride ourselves on maintaining a healthy and safe environment that will serve as a home away from home for your dog. Come to Canine Country Club where your dog will have its own vacation while you are away on vacation.

           We look forward to caring for you and your dog,


          </p>
        </div>
      </div>
    </>

  );
}

export default About;