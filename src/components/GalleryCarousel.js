import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import chevron from "../images/chevron.svg";

const GalleryCarousel = (props) => {
  const [picturesUrl, setPictureUrl] = useState([]);
  const [currentPicture, setCurrentPicture] = useState(0);
  // if (pictures) {
  //   const urlPictures = pictures.pictures;
  //   setPictureUrl(urlPictures);
  // }
  useEffect(() => {
    // const picturesUrl = props.data;
    setPictureUrl(props.data);
  }, [props.data]);

  // à enlever après si c'est pas nécessaire
  if (!Array.isArray(props.data) || props.data.length <= 0) {
    return null;
  }
  /***** next picture  ******/
  const nextPicture = () => {
    setCurrentPicture(currentPicture === props.data.length - 1 ? 0 : currentPicture + 1);
  };
  /***** prev picture  ******/
  const prevPicture = () => {
    setCurrentPicture(currentPicture === 0 ? props.data.length - 1 : currentPicture - 1);
  };

  console.log(currentPicture);

  return (
    <section className="galeriePictures">
      {/* <img className="carousel" src={pictures ? pictureUrl : ""} alt={""} /> */}
      {picturesUrl &&
        picturesUrl.map((urlPicture, i) => {
          return currentPicture === i && <img key={i} className="carousel" src={urlPicture} alt={""} />;
        })}
      <img src={chevron} alt="chevron" className={"chevronRight"} onClick={nextPicture} />
      <img src={chevron} alt="chevron" className={"chevronLeft"} onClick={prevPicture} />
    </section>
  );
};

export default GalleryCarousel;
