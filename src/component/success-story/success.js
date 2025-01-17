import React from "react";
import "./success.css";
import success from "../../assets/success.png";

const Success = () => {
  return (
    <div className="success-main">
      <div className="success-inner">
        <h1 className="success-heading">
          Success <br />
          <span>Stories</span>{" "}
        </h1>
        <p className="success-descrip">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <img src={success} alt="" />
    </div>
  );
};

export default Success;