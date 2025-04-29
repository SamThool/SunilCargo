import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home" id="Home">
      {/* <div className="h-left">
        <img src={DRLimg} alt="Dark Room Laptop" />
      </div> */}
      <div className="h-right">
        <h1>
          Our Logistics <br /> Service
        </h1>
        <a href="tel:+919326071728">
          <button>Contact Us</button>
        </a>
      </div>
    </div>
  );
};

export default Home;
