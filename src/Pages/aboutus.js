import React from 'react';

function Aboutus() {
    return (<>
        <nav>
            <div class="logo">
                <img src="./images/XAPORA TRANSPERENT 3.png" width="200px" alt="xaporalogo" />
            </div>
            <ul>
                <li class="navItem"><a href="http://127.0.0.1:5500/index.html">HOME</a></li>
                <li class="navItem"><a href="#">SHOP</a></li>
                <li class="navItem"><a href="#">ABOUT US</a></li>
                {/* <li class="navItem"><a href="#">PAGES</a></li> */}
                <li class="navItem"><a href="#">BLOG</a></li>
                <li class="navItem"><a href="#">CONTACT</a></li>
                <li class="navItem"><a href="#"><i class="fa fa-user"></i></a></li>
                <li class="navItem"><a href="#"><i class="fa fa-shopping-cart"></i></a></li>
            </ul>
        </nav>
        <div class="ABOUT">
            <h2>ABOUT US</h2>
            <p>XAPORA is inspired by every woman who loves to look good,
        <br />
        who appreciates fashion and who would dare to do more.
        <br /> STYLE FOR EVERYONE.</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br />
            Voluptatum quos repellendus porro eius quibusdam ipsam cumque voluptate,<br />
             excepturi nisi aspernatur magnam iste quo animi atque dolore cupiditate cum neque amet!</p>
        </div>
        <div class="CEO">
            <img src="./images/mypotrait.jpeg" alt="My potrait" />
            <div class="ceo-info">
                <h4>OLUWATOSIN ADENIKE BAKARE CEO &amp; <br />CREATIVE DIRECTOR</h4>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>
                <p>Tempora quasi inventore ex nisi enim, corporis earum beatae, accusamus repudiandae quibusdam fug</p>
                <p>a doloribus, sed necessitatibus eaque! Fuga ea possimus quasi cupiditate.</p>
            </div>
        </div>

        <div class="footer">
            <a href="mailto:xapora.co@gmail.com"><i class="fa fa-envelope"></i></a>
            <a href="#"><i class="fa fa-facebook-f"></i></a>
            <a href="#"><i class="fa fa-twitter"></i></a>
            <a href="#"><i class="fa fa-instagram"></i></a>
            <a href="#"><i class="fa fa-whatsapp"></i></a>
        </div>
        <p>&copy;</p>
    </>)
}

export default Aboutus;