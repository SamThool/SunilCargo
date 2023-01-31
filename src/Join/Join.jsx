import React from "react";
import "./Join.css";

const Join = () => {
  return (
    <div className="join" id="Join">
      <div className="box">
        <h1>
          Join Developers <br />
          Community
        </h1>
        <form action="">
          <span>Email : </span>
          <input type="email" placeholder="ABC@mail.com" />
          <span>Password : </span>
          <input type="pass" placeholder="*  *  *  *  *  *  *" />
          <button type="submit"> Join </button>
        </form>
      </div>
    </div>
  );
};

export default Join;
