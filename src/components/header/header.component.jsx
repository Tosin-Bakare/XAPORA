import React from 'react';
import { Link } from 'react-router-dom';
import XaporaLogo from '../../assets/images/XAPORA TRANSPERENT 3.png'

import './header.styles.scss';

const Header = () => (
     <nav>
     <div class="logo">
         <Link to="/">
         <img src={XaporaLogo} width="200px" alt="Xapora logo" />
         </Link>
     </div>
     <ul>
         <li class="navItem"><Link to="/shop">SHOP</Link></li>
         <li class="navItem"><Link to="/aboutus">ABOUT US</Link></li>
         <li class="navItem"><Link to="/blog">BLOG</Link></li>
         <li class="navItem"><Link to="/contact">CONTACT</Link></li>
         <li class="navItem"><Link to="/admin"><i class="fa fa-user"></i></Link></li>
         <li class="navItem"><i class="fa fa-shopping-cart"></i></li>
     </ul>
 </nav>
);

export default Header;