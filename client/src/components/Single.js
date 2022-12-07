
import React, { useState } from "react";
//import './App.css';
import { FaStar } from "react-icons/fa";
//import '../../assets'


const colors = {
    orange: "#FFBA5A",
    grey: "#a9a9a9"
    
}



function Single({house}) {
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const stars = Array(5).fill(0)
  

  
  
  const handleClick = value => {
    setCurrentValue(value)
  }

  const handleMouseOver = newHoverValue => {
    setHoverValue(newHoverValue)
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined)}

  return (
    



    <div style={styles.container}>
    <div>
      <img src={house.image_url}/>
      <h3>{house.name}</h3>
    </div>
    
    
     <div style={styles.stars}>
     {stars.map((_, index) => {
       return (
         <FaStar
           key={index}
           size={40}
           onClick={() => handleClick(index + 1)}
           onMouseOver={() => handleMouseOver(index + 1)}
           onMouseLeave={handleMouseLeave}
           color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
           style={{
             marginRight: 10,
             cursor: "pointer"
           }}
         />
       )
     })}
      </div>
   
   <div>
     reviews
   </div>
   <textarea
     placeholder="What's your experience?"
     style={styles.textarea}
   />

   <button
     style={styles.button}
   >
     Submit
   </button>
   
  </div>


   
  );
};


const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    
  },
  
  stars: {
    display: "flex",
    flexDirection: "row",
    
  },
  textarea: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    padding: 10,
    margin: "20px 0",
    minHeight: 100,
    width: 300
  },
  button: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    width: 300,
    padding: 10,
  },
  doghouse: {
    width: "800px",
    display: "flex",
    flexDirection: "row"

  }


};




export default Single;