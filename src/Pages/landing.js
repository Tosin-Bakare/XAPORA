import React from 'react';
import { Link } from "react-router-dom";
import Directory from '../components/directory/directory.component';
import '../assets/xapora.css'

function Landing() {
    return (
    <>
        {/* hero box  */}
        <div class="hero-box">
            <div class="hero-text">
                <p>SPRING/SUMMER COLLECTION 2020</p>
                <h1>GET UP TO 30% OFF <br /> CHRISTMAS ARRIVALS.</h1>
                <Link to="/shop">
                <button>SHOP NOW</button>
                </Link>
            </div>
        </div>
        {/* hero box ends */}

        {/* bottom box */}
        {/* <div class="bottomBox">
            <div class="cards">
                <div class="card1">
                    <p>WOMEN'S</p>
                </div>
                <div class="card2">
                    <p>ACCESSORIES</p>
                </div>
                <div class="card3">
                    <p>MEN'S</p>
                </div>
            </div>
        </div> */}
        {/* bottom box ends */}
        <div class="image-gallery" />
        <div className="shop">
        <Directory />
        </div>
        <div class="footer">
            <Link to="mailto:xapora.co@gmail.com"><i class="fa fa-envelope"></i></Link>
            <Link to="#"><i class="fa fa-facebook-f"></i></Link>
            <Link to="#"><i class="fa fa-twitter"></i></Link>
            <Link to="#"><i class="fa fa-instagram"></i></Link>
            <Link to="#"><i class="fa fa-whatsapp"></i></Link>
        </div>
    </>
    )
}

export default Landing;