import React from "react";
import "./hero.css";
import mob1 from "../../assets/mob1.png"
import mob2 from "../../assets/mob2.png"
import mob3 from "../../assets/mob3.png"
import mob4 from "../../assets/mob4.png"
import mob5 from "../../assets/mob5.png"
import mob6 from "../../assets/mob6.png"
import mob7 from "../../assets/mob1.png"

const Hero = () => {
  return (
    <div className="main">
      <h1 className="hero-heading">
        The Punch Line to Explain <span>our Initiative</span> <br /> and the{" "}
        <span>USP</span> of the platform.
      </h1>
      <p className="hero-description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor <br /> incididunt ut labore et dolore magna aliqua.
      </p>
      <button className="hero-btn">Download</button>
      <div className="hero-img">
        <img className="hero-img-1" src={mob1} alt="" />
        <img className="hero-img-2" src={mob2} alt="" />
        <img className="hero-img-3" src={mob3} alt="" />
        <img className="hero-img-4" src={mob4} alt="" />
        <img className="hero-img-3" src={mob5} alt="" />
        <img className="hero-img-2" src={mob6} alt="" />
        <img className="hero-img-1" src={mob7} alt="" />
      </div>
    </div>
  );
};

export default Hero;
