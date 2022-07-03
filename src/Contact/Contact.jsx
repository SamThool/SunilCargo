import React from "react";
import sam from "../Resources/sam.jpg";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact" id="Contact">
      <div className="c-left">
        <div className="concard">
          <div className="des"> +91 93700 48698 </div>
          <div className="c-img">
            <i class="fa-brands fa-whatsapp"></i>
          </div>
        </div>
        <div className="concard">
          <div className="des"> samthool@outlook.com </div>
          <div className="c-img">
            <i class="fa-regular fa-envelope"></i>
          </div>
        </div>
        <div className="concard">
          <div className="des"> github.com/SamThool </div>
          <div className="c-img">
            <i class="fa-brands fa-github"></i>
          </div>
        </div>
      </div>
      <div className="c-center">
        <img src={sam} alt="sam" />
      </div>
      <div className="c-right">
        <div className="concard">
          <div className="des"> samthool02 </div>
          <div className="c-img">
            <i class="fa-brands fa-instagram"></i>
          </div>
        </div>
        <div className="concard">
          <div className="des"> ThoolSamy </div>
          <div className="c-img">
            <i class="fa-brands fa-twitter"></i>
          </div>
        </div>
        <div className="concard">
          <div className="des"> samyak-thool </div>
          <div className="c-img">
            <i class="fa-brands fa-linkedin-in"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
