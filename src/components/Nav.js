import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from "../images/LOGO.png";

const Nav = () => {
    return (
       <header>
                 <a href="/"><img className='logoNav' src={Logo} alt="Logo Kasa" /></a>
           <nav className='nav'>
               <NavLink to={"/"}>Accueil</NavLink>
               <NavLink to={"/propos"}>A Propos</NavLink>
           </nav>
       </header>
    );
};

export default Nav;