import React from "react";
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

const Header = ({ currentUser, hidden }) => (
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
      <CartIcon />
    </ul>
    {hidden ? null : <CartDropdown />}

    <Link
      className="harmburgericon"
      //onClick={}
    >
      <i className="fa fa-bars"></i>
    </Link>
  </nav>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
