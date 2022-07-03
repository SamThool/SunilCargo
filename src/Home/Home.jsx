import React from "react";
import "./Home.css";
import DRLimg from "../Resources/dark_lap.jpg";

const Home = () => {
  return (
    <div className="home" id="Home">
      <div className="h-left">
        <img src={DRLimg} alt="Dark Room Laptop" />
      </div>
      <div className="h-right">
        <h1>
          Hi ! I Am <br />
          <span> SAM </span>. I Am A <span> MERN Stack Developer</span> And Also
          A <br /> <span> Student.</span> <br /> Scroll Down
          <i class="material-icons ">arrow_downward</i>
        </h1>
      </div>
    </div>
  );
};

export default Home;
