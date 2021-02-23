import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";
import XaporaLogo from "../../assets/images/XAPORA TRANSPERENT 3.png";

import "./header.styles.scss";

const Header = ({ currentUser }) => (
  <nav>
    <div className="logo">
      <Link to="/">
        <img src={XaporaLogo} width="200px" alt="Xapora logo" />
      </Link>
    </div>
    <ul>
      <li className="navItem">
        <Link to="/shop">SHOP</Link>
      </li>
      <li className="navItem">
        <Link to="/aboutus">ABOUT US</Link>
      </li>
      <li className="navItem">
        <Link to="/blog">BLOG</Link>
      </li>
      <li className="navItem">
        <Link to="/contact">CONTACT</Link>
      </li>
      {currentUser ? (
        <li className="navItem">
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        </li>
      ) : (
        <li className="navItem">
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        </li>
      )}
      <li className="navItem">
        <Link to="/admin">
          <i className="fa fa-user"></i>
        </Link>
      </li>
      <li className="navItem">
        <i className="fa fa-shopping-cart"></i>
      </li>
    </ul>
  </nav>
);

export default Header;
