import React from 'react';
import Footer from '../components/Footer';
import Gallery from '../components/Gallery';
import Nav from '../components/Nav';
import homeImage from "../images/home.png"
const Home = () => {
    return (
        <div>
            <Nav/>
            <main>
               <section className='backgroundImageSection'>
                   <img src={homeImage} alt="home cover" />
                   <h1>Chez vous, partout et ailleurs</h1>
               </section>
               <section className='allGallery'> <Gallery/> </section>        
            </main>
            <Footer/>
        </div>
       
        
    );
};

export default Home;