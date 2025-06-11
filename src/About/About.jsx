import React from "react";
import nagpur from "../Resources/Deekhshabhoomi.jpg";
import raipur from "../Resources/Raipur.jpg";
import mumbai from "../Resources/GWOF.jpg";
import amhadabad from "../Resources/amhadabad.jpg";
import "./About.css";

const About = () => {
  return (
    <div className="about" id="About">
      <div className="Con1">Our Network</div>
      <div className="Con2">
        <div className="block1">
          <img src={mumbai} alt="" className="city" />
          <h2>Mumbai</h2>
        </div>
        <div className="block2">
          <img src={nagpur} alt="" className="city" />
          <h2>Nagpur</h2>
        </div>
        <div className="block3">
          <img src={raipur} alt="" className="city" />
          <h2>Raipur</h2>
        </div>
        <div className="block4">
          <img src={amhadabad} alt="" className="city" />
          <h2>Ahmedabad</h2>
        </div>
      </div>
      <div className="Con3">
        <a href="tel:+919326071728">
          <button>Contact Us</button>
        </a>
      </div>

      {/* <div className="a-left">
        <h1> About Me </h1>
        <h2>
          Hey ! I Am A Student pursuing BSC in computer Science with Decent
          Skills . Here are some of the Technologies I Am Familier and worked
          With .
        </h2>
      </div>
      <div className="a-right">
        <span>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" />
        </span>
        <span>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" />
        </span>
        <span>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" />
        </span>
        <span>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original-wordmark.svg" />
        </span>
        <span>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg" />
        </span>
        <span>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg" />
        </span>
        <span>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" />
        </span>
        <span>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />
        </span>
        <span>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg" />
        </span>
        <span>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/handlebars/handlebars-original-wordmark.svg" />
        </span>
        <span>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original-wordmark.svg" />
        </span>
        <span>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg" />
        </span>
        <span>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" />
        </span>
        <span>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg" />
        </span>
        <span>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" />
        </span>
        <span>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
        </span>
        <p></p>
        <span>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg" />
        </span>
        <span>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" />
        </span>
      </div> */}
    </div>
  );
};

export default About;
