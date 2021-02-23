import React from 'react';
import { Link } from "react-router-dom";
import MyPortrait from '../assets/images/mypotrait.jpeg'

function Aboutus() {
    return (
        <>
            <div className="ABOUT">
                <h2>ABOUT US</h2>
                <p>XAPORA is inspired by every woman who loves to look good,
        <br />
        who appreciates fashion and who would dare to do more.
        <br /> STYLE FOR EVERYONE.</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br />
            Voluptatum quos repellendus porro eius quibusdam ipsam cumque voluptate,<br />
             excepturi nisi aspernatur magnam iste quo animi atque dolore cupiditate cum neque amet!</p>
            </div>
            <div className="CEO">
                <img src={MyPortrait} alt="My potrait" />
                <div className="ceo-info">
                    <h4>OLUWATOSIN ADENIKE BAKARE CEO &amp; <br />CREATIVE DIRECTOR</h4>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>
                    <p>Tempora quasi inventore ex nisi enim, corporis earum beatae, accusamus repudiandae quibusdam fug</p>
                    <p>a doloribus, sed necessitatibus eaque! Fuga ea possimus quasi cupiditate.</p>
                </div>
            </div>

            <div className="footer">
                <a href="mailto:xapora.co@gmail.com"><i className="fa fa-envelope"></i></a>
                <a href="#"><i className="fa fa-facebook-f"></i></a>
                <a href="#"><i className="fa fa-twitter"></i></a>
                <a href="#"><i className="fa fa-instagram"></i></a>
                <a href=""><i className="fa fa-whatsapp"></i></a>
            </div>
            <p>&copy;</p>
        </>)
}

export default Aboutus;