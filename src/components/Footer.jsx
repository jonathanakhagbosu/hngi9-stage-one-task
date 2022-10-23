import React from "react";
import zuri from "../assets/Vector.png";
import i4g from "../assets/I4G.png";

const Footer = () => {
  return (
    <footer>
      <img src={zuri} alt="" />
      <p className="footer__text">HNG Internship 9 Frontend Task</p>
      <img src={i4g} alt="" />
    </footer>
  );
};

export default Footer;
