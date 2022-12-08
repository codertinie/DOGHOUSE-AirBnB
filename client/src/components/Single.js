import React, { useState } from "react";
//import './App.css';
import { FaStar } from "react-icons/fa";
//import '../../assets'
import "../styles/Single.css";

const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9",
};

function Single({ house, user, fetchPostedReview }) {
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const stars = Array(5).fill(0);
  const[comment, setComment]=useState('')


  const handleClick = (value) => {
    setCurrentValue(value);
  };

  const handleMouseOver = (newHoverValue) => {
    setHoverValue(newHoverValue);
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined);
  };

  function handleChange(e) {
    setComment(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    fetch(`/dog_houses/${house.id}/reviews`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ comment, user_id: user.id }),
    });
    fetchPostedReview()
  }
  return (
    <div className="single">
      <div className="leftside">
        <img src={house.image_url} alt="house" />
        <h3>{house.name}</h3>
        {/* {house.reviews?.map((review) => (
       <p>{review.comment}</p>
     ))} */}
      </div>

      <div className="rightside">
        {house.reviews?.map((review) => (
          <p>{review.comment}</p>
        ))}

        <div style={styles.stars}>
          {stars.map((_, index) => {
            return (
              <FaStar
                key={index}
                size={40}
                onClick={() => handleClick(index + 1)}
                onMouseOver={() => handleMouseOver(index + 1)}
                onMouseLeave={handleMouseLeave}
                color={
                  (hoverValue || currentValue) > index
                    ? colors.orange
                    : colors.grey
                }
                style={{
                  marginRight: 10,
                  cursor: "pointer",
                }}
              />
            );
          })}
        </div>
        <form onSubmit={handleSubmit}>
          <textarea
            onChange={handleChange}
            placeholder="What's your experience?"
            style={styles.textarea}
          />

          <button style={styles.button}>Submit</button>
        </form>
      </div>
    </div>
  );
}

const styles = {
  // container: {
  //   display: "flex",
  //   flexDirection: "column",
  //   alignItems: "center",
  //   border: "3px solid #fff",
  //   padding: "20px",

  // },

  stars: {
    display: "flex",
    flexDirection: "row",
  },
  textarea: {
    border: "1px solid #a9a9a9",
    borderRadius: 25,
    padding: 10,
    margin: "20px 0",
    minHeight: 100,
    width: 300,
  },
  // button: {
  //   border: "1px solid #a9a9a9",
  //   borderRadius: 25,
  //   width: 300,
  //   padding: 10,
  //   color:"#1d2dd4",

  // },

  // doghouse: {
  //   width: "800px",
  //   display: "flex",
  //   flexDirection: "row"

  // }
};

export default Single;
