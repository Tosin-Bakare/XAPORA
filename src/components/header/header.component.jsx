import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import XaporaLogo from "../../assets/images/XAPORA TRANSPERENT 3.png";

import "./header.styles.scss";

const menu = [
  {
    title: "SHOP",
    link: "/shop",
  },
  {
    title: "ABOUT US",
    link: "/aboutus",
  },
  // {
  //   title: "BLOG",
  //   link: "/blog",
  // },
  {
    title: "CONTACT",
    link: "/contact",
  },
];
const Header = ({ currentUser, hidden }) => {
  const [menuToggle, setMenuToggle] = useState(false);

  return (
    <nav className={menuToggle && "navOpen"}>
      <div className="navflex">
        <div className="logo">
          <Link to="/">
            <img src={XaporaLogo} width="150px" alt="Xapora logo" />
          </Link>
        </div>
        <ul className="desktop">
          {menu.map((m, i) => (
            <li key={i} className="navItem">
              <Link to={m.link}>{m.title}</Link>
            </li>
          ))}
        </ul>
        {/* <>{currentUser ? (
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
      )}</> */}
        <li className="navItem">
          <CartIcon />
        </li>
        {hidden ? null : <CartDropdown />}
        <span style={{ zIndex: 1000 }}>
          {!menuToggle && (
            <i onClick={() => setMenuToggle(true)} className="fa fa-bars"></i>
          )}
          {menuToggle && (
            <i onClick={() => setMenuToggle(false)} className="fa fa-close"></i>
          )}
        </span>{" "}
      </div>
      <div style={{ display: menuToggle ? "block" : "none" }}>
        <ul className="mobile">
          {menu.map((m, i) => (
            <li key={i} onClick={() => setMenuToggle(!menuToggle)}>
              <Link to={m.link}>{m.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
