import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../components/Nav';

const Undefined = () => {
    
    return (
        <div className='undefinedPage'>
            <Nav/>
             <div className='centerPageUndefined'>
               <span>404</span>
               <h1>Oups! La page que vous demandez n'existe pas.</h1>
               <Link to={"/"}>Retourner sur la page d'accueil</Link>
             </div>
        </div>
    );
};

export default Undefined;