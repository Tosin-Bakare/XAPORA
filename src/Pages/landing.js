import React from 'react';
// import Directory from '../components/directory/directory.component';
// import './homepage.styles.scss';

function Landing() {
    return (<>
        <nav>
            <div class="logo">
                <img src="./images/XAPORA TRANSPERENT 3.png" width="200px" alt="Xapora logo" />
            </div>
            <ul>
                <li class="navItem"><a href="#">HOME</a></li>
                <li class="navItem"><a href="#">SHOP</a></li>
                <li class="navItem"><a href="http://127.0.0.1:5500/aboutus.html">ABOUT US</a></li>
                {/* <li class="navItem"><a href="#">PAGES</a></li> */}
                <li class="navItem"><a href="#">BLOG</a></li>
                <li class="navItem"><a href="#">CONTACT</a></li>
                <li class="navItem"><a href="#"><i class="fa fa-user"></i></a></li>
                <li class="navItem"><a href="#"><i class="fa fa-shopping-cart"></i></a></li>
            </ul>
        </nav>

        {/* hero box  */}
        <div class="hero-box">
            <div class="hero-text">
                <p>SPRING/SUMMER COLLECTION 2020</p>
                <h1>GET UP TO 30% OFF <br /> CHRISTMAS ARRIVALS.</h1>
                <button>SHOP NOW</button>
            </div>
        </div>
        {/* hero box ends */}

        {/* bottom box */}
        <div class="bottomBox">
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
        </div>
        {/* bottom box ends */}
        <div class="image-gallery">
        </div>

        <div class="footer">
            <a href="mailto:xapora.co@gmail.com"><i class="fa fa-envelope"></i></a>
            <a href="#"><i class="fa fa-facebook-f"></i></a>
            <a href="#"><i class="fa fa-twitter"></i></a>
            <a href="#"><i class="fa fa-instagram"></i></a>
            <a href="#"><i class="fa fa-whatsapp"></i></a>
        </div>
    </>)

    // const HomePage = () => (
    //     <div className='HomePage'>
    //         <Directory />
    //     </div>
    // );

}

export default Landing;