import React from 'react';
import Gallery from '../components/Gallery';
import Nav from '../components/Nav';
import homeImage from "../images/home.png"
const Home = () => {
    return (
        <main>
            <Nav/>
            <section className='backgroundImageSection'>
                <img src={homeImage} alt="home cover" />
                <h1>Chez vous, partout et ailleurs</h1>
            </section>
            <section> <Gallery/> </section>

        </main>
    );
};

export default Home;