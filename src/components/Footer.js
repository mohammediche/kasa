import React from 'react';
import LOGO from "../images/LOGO-white.png";

const Footer = () => {
    return (
        <footer className='footer'>
            <img className='logoFooter' src={LOGO} alt="logo du site" /><br/>
            <span>{(new Date().getFullYear())} Kasa, All rights reserved</span>
        </footer>
    );
};

export default Footer;