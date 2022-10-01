import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Footer from "../components/Footer";
import GalleryCarousel from "../components/GalleryCarousel";
import Nav from "../components/Nav";
import chevron from "../images/chevron.svg";

const FicheLogement = () => {
  const { articleId } = useParams();
  const Navigate = useNavigate();
  const [data, setData] = useState({});
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const fullStar = "★";
  const emptyStar = "☆";

  useEffect(() => {
    axios
      .get("/kasa/db.json")
      .then((res) => {
        /** Si l'id client n'existe pas, on redirige vers la page 404 **/
        const dataClient = res.data.find((oneData) => {
          return oneData.id === articleId;
        });
        if (!dataClient) {
          Navigate("*");
        }
        setData(dataClient);
      })
      .catch((error) => console.log(error));
  }, [articleId]);

  return (
    <div>
      <Nav />
      <main>
        <GalleryCarousel data={data.pictures} />

        <section className="flex-ContentLogement">
          <div className="contentLogement">
            <h1>{data.title}</h1>
            <h2>{data.location}</h2>
            <div className="tags">
              {data.tags &&
                data.tags.map((tag, key) => {
                  return <span key={key}>{tag}</span>;
                })}
            </div>
          </div>

          <div id="user">
            {data.host && (
              <div className="infoUser">
                <h2>{data.host.name}</h2>
                <img src={data.host.picture} alt={data.host.name} />
              </div>
            )}

            <div className="stars">
              <span>{fullStar.repeat(data.rating) + emptyStar.repeat(5 - data.rating)}</span>
            </div>
          </div>
        </section>

        <section className="allContentDescriptionEquipements">
          <article className="description">
            <button
              onClick={() => {
                setShow1(!show1);
              }}
            >
              <span>Description</span>
              <img src={chevron} alt="chevron" className={show1 ? "chevronTop" : "chevronBottom"} />
            </button>
            {show1 && (
              <div className="descriptionContent">
                <p>{data.description}</p>
              </div>
            )}
          </article>

          <article className="equipments">
            <button
              onClick={() => {
                setShow(!show);
              }}
            >
              <span>Équipements</span>
              <img src={chevron} alt="chevron" className={show ? "chevronTop" : "chevronBottom"} />
            </button>

            {show && (
              <div className="equipmentsContent">
                {data.equipments &&
                  data.equipments.map((equipment, key) => {
                    return <p key={key}>{equipment}</p>;
                  })}
              </div>
            )}
          </article>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default FicheLogement;
