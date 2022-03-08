import React from "react";
// import { Link } from "react-router-dom";

import "./footer.styles.css";

const Footer = () => (
  <div className="footer">
    <a target="_blank" href="mailto:xapora.co@gmail.com">
      <i className="fa fa-envelope"></i>
    </a>
    <a  target="_blank" href="https://facebook.com/">
      <i className="fa fa-facebook-f"></i>
    </a>
    <a  target="_blank" href="https://twitter.com/XaporaF">
      <i className="fa fa-twitter"></i>
    </a>
    <a  target="_blank" href="#">
      <i className="fa fa-instagram"></i>
    </a>
    <a  target="_blank" href="https://wa.me/message/GMMCIYRPIEG4I1">
      <i className="fa fa-whatsapp"></i>
    </a>
  </div>
);

export default Footer;
