import React from "react";
import { Link } from "react-router-dom";

import "./footer.styles.css";

const Footer = () => (
  <div className="footer">
    <Link to="mailto:xapora.co@gmail.com">
      <i className="fa fa-envelope"></i>
    </Link>
    <Link to="#">
      <i className="fa fa-facebook-f"></i>
    </Link>
    <Link to="#">
      <i className="fa fa-twitter"></i>
    </Link>
    <Link to="#">
      <i className="fa fa-instagram"></i>
    </Link>
    <Link to="#">
      <i className="fa fa-whatsapp"></i>
    </Link>
  </div>
);

export default Footer;
