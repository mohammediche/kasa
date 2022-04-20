import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from "../images/LOGO.png";

const Nav = () => {
    return (
       <header>
                 <a href="/kasa"><img className='logoNav' src={Logo} alt="Logo Kasa" /></a>
           <nav className='nav'>
               <NavLink to={"/kasa/"}>Accueil</NavLink>
               <NavLink to={"/propos"}>A Propos</NavLink>
           </nav>
       </header>
    );
};

export default Nav;