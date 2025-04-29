import React from "react";
import Truckkun from "../Resources/Truckkun.jpg";
import call from "../Resources/call.jpg";
import whatapp from "../Resources/whatsapp.jpg";
import insta from "../Resources/insta.jpg";
import facebook from "../Resources/facebook.jpg";
import mail from "../Resources/Apple_Mail-512.webp";
import "./Join.css";

const Join = () => {
  return (
    <div className="join" id="Join">
      <h1> Contact Us </h1>
      <div className="conmid">
        <div className="conl">
          <img src={Truckkun} alt="" />
        </div>
        <div className="conr">
          <a
            href="tel:+919326071728"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <img src={call} alt="" />
            <p>
              Call <br /> +91 93260 71728
            </p>
          </a>
          <a
            href="https://wa.me/919326071728"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <img src={whatapp} alt="" />
            <p>
              Whats App <br /> +91 93260 71728
            </p>
          </a>
          <a
            href="mailto:officialsunilcargo@gmail.com"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <img src={mail} alt="" />
            <p>
              Mail <br /> officialsunilcargo@gmail.com
            </p>
          </a>
          <a href="" style={{ textDecoration: "none", color: "inherit" }}>
            <img src={insta} alt="" />
            <p>
              Instagram <br /> SunilCargo.in
            </p>
          </a>
          <a href="" style={{ textDecoration: "none", color: "inherit" }}>
            <img src={facebook} alt="" />
            <p>
              Facebook <br /> SunilCargo.in
            </p>
          </a>
        </div>
      </div>
      <div className="conlas">
        Copyright © SunilCargo.in All rights reserved.
      </div>
    </div>
  );
};

export default Join;
