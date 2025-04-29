import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact" id="Contact">
      <h1>Main Office Location</h1>
      <div className="Con">

        <div className="block1">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d232.559216634001!2d79.10437235239678!3d21.15448884403935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1745912969986!5m2!1sen!2sin"
            style={{
              border: '2px solid grey',
              borderRadius: '12px'
            }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Map"
          ></iframe>
        </div>
        <div className="Block2">
         <h2> Location : </h2>
         <p>
          Ganjakhet Chowk , Itwari Nagar , Nagpur 440002.
         </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
