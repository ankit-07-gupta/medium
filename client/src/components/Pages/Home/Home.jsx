import React from "react";
import "./Home.scss";
import image from "../../../assets/A.png";
const Home = () => {
  return (
    <div className="home">
      <div className="first">
        <div className="left">
          <div className="hh">
            <h1>Stay Curious.</h1>
            <p>
              Discover stories,thinking and expertise from writers on any topic.
            </p>
            <div className="btn">
              <span><a href="https://medium.com/about">Start Reading</a></span>
            </div>
          </div>
        </div>
        <div className="right">
          <img src={image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
