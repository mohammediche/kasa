import React, { useState } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import background from "../images/APropos.png";
import chevron from "../images/chevron.svg";

const APropos = () => {
  const [show, setshow] = useState();

  const dropDownContent = (i) => {
    console.log(i);
    if (show === i) {
      console.log(i);
      return setshow(null);
    }
    setshow(i);
  };
  const data = [
    {
      titre: "Fiabilité",
      contenu:
        "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.",
    },
    {
      titre: "Respect",
      contenu:
        "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
    },
    {
      titre: "Service",
      contenu:
        "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
    },
    {
      titre: "Responsabilité",
      contenu:
        "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
    },
  ];

  return (
    <div>
      <Nav />
      <main>
        <section className="backgroundImageSection">
          <img src={background} alt="un beau paysage " />
        </section>

        <section className="container-APropos">
          {/* <Dropdown showContent= {[buttonName, contentDropDown]}/> */}
          {/* showContent= {[contentDropDown]} */}

          {/* Fiabilité */}
          {data.map((element, i) => {
            return (
              <article className="contentAPropos" key={i}>
                <button onClick={() => dropDownContent(i)}>
                  <span>{element.titre}</span>
                  <img src={chevron} alt="chevron" className={show === i ? "chevronTop" : "chevronBottom"} />
                </button>
                <div className={show === i ? "content openDropDown" : "content"}>
                  <p>{element.contenu}</p>
                </div>
              </article>
            );
          })}
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default APropos;
