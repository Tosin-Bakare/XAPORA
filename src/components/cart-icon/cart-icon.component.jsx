import React from "react";
import { connect } from 'react-redux';

import { toggleCartHidden } from '../../redux/cart/cart.actions';

import { ReactComponent as ShoppingIcon } from "../../assets/images/shopping-bag.svg.svg";
import "./cart-icon.styles.scss";

const CartIcon = ({ toggleCartHidden }) => (
  <li className="cart-icon navItem" onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">0</span>
  </li>
);

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(
    null,
    mapDispatchToProps
    )(CartIcon);
