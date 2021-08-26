import React from 'react'
import './Footer.css'
import { FaLinkedin, FaInstagram, FaTwitter, FaFacebookSquare, FaYoutube, FaArrowRight } from 'react-icons/fa';

function Footer() {
    return (
        <div className="footerContainer">
            <div className="footerMenu">
                <div>
                    <h2>PREVIOUS COLLECTIONS</h2>
                    <p>Winter 2020</p>
                    <p>Summer 2020</p>
                </div>
                <div>
                    <h2>HELP</h2>
                    <p>Curstomer support</p>
                    <p>Terms and conditions</p>
                    <p>Privacy</p>
                </div>
                <div>
                    <h2>CONTACT US</h2>
                    <p>info@pcs.com</p>
                    <p>MORE INFORMATION 
                        <FaArrowRight className="contactArrow"/>
                    </p>
                </div>
            </div>
            <div className="footerSocialMedia">
                <FaInstagram className="socialIcons"/>
                <FaTwitter className="socialIcons" />
                <FaFacebookSquare className="socialIcons" />
                <FaYoutube className="socialIcons" />
            </div>
            <div className="footerCopyrights">
                <div className="footerLogo">PCS</div>
                <p>Coded by Pedro Palencia 2021</p>
                <a href="https://www.linkedin.com/in/pedro-palencia/" target="_blank">
                    <FaLinkedin />
                </a>
            </div>
        </div>
    )
}

export default Footer
