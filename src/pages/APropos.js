import React, { useState } from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import background from "../images/APropos.png"
import chevron from "../images/chevron.svg";

const APropos = () => {

    const [show1, setShow1] = useState();
   

    const dropDownContent = (i)=>{
        setShow1(i)
    }

    
    return (
        <div>
             <Nav/>
             <main>
                <section className='backgroundImageSection'>
                  <img src={background} alt="un beau paysage " />
                  </section>

            <section className='container-APropos'>
                {/* <Dropdown showContent= {[buttonName, contentDropDown]}/> */}
                {/* showContent= {[contentDropDown]} */}
                 
                  {/* Fiabilité */}
                <article className='contentAPropos'>
                    <button onClick={()=> {dropDownContent(1)}}>
                        <span>Fiabilité</span>
                        <img src={chevron} alt="chevron" className={show1 ===1 ? "chevronTop": "chevronBottom"}/>
                    </button>
                    <div className={show1 === 1 ? "content openDropDown" : "content"}>
                        <p>Les annonces postées sur Kasa garantissent une fiabilité totale. 
                            Les photos sont conformes aux logements, et toutes les informations 
                            sont régulièrement vérifiées  par nos équipes.</p>
                    </div>
                </article>
                
                {/* Respect */}
                <article className='contentAPropos'>
                     <button onClick={()=> {dropDownContent(2)}}> 
                        <span>Respect</span>
                        <img src={chevron} alt="chevron" className={show1 === 2 ? "chevronTop": "chevronBottom"} />
                     </button>
              
                  
                        <div className={show1 === 2 ? "content openDropDown" : "content"}>
                         <p>La bienveillance fait partie des valeurs fondatrices de Kasa.
                              Tout comportement discriminatoire ou de perturbation du voisinage
                               entraînera une exclusion de notre plateforme.</p>        
                       </div>
                </article>

                    {/* Service */}
                    <article className='contentAPropos'>
                    <button onClick={()=> {dropDownContent(3)}}>
                        <span>Service</span>
                        <img src={chevron} alt="chevron" className={show1 === 3 ? "chevronTop": "chevronBottom"}/>
                    </button>
                   <div className={show1 === 3 ? "content openDropDown" : "content"}>
                        <p>Nos équipes se tiennent à votre disposition pour vous fournir
                             une expérience parfaite. N'hésitez pas à nous contacter si 
                             vous avez la moindre question.</p>
                    </div>
                </article>
                
                {/* Responsabilité */}
                <article className='contentAPropos'>
                     <button onClick={()=> {dropDownContent(4)}}> 
                        <span>Responsabilité</span>
                        <img src={chevron} alt="chevron" className={show1 === 4 ? "chevronTop": "chevronBottom"}/>
                     </button>
              
                    
                       <div  className={show1 === 4 ? "content openDropDown" : "content"}>
                         <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes 
                             que pour les voyageurs, chaque logement correspond aux critères 
                             de sécurité établis par nos services. En laissant une note aussi 
                             bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier 
                             que les standards sont bien respectés. Nous organisons également 
                             des ateliers sur la sécurité domestique pour nos hôtes.</p>        
                       </div>
                </article>
                
            </section>
              </main>

            <Footer/>
        </div>
    );
};

export default APropos;