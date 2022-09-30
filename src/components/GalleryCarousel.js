import React from "react";
import { useState } from "react";
import chevron from "../images/chevron.svg";

const GalleryCarousel = (props) => {
  const pictures = props.urlPictures;
  const [pictureUrl, setPictureUrl] = useState(pictures[0]);
  /***** next picture  ******/
  const nextPicture = () => {
    if (pictures) {
      for (let index = 0; index < pictures.length; index++) {
        const nextPictureUrl = pictures[index + 1];
        setPictureUrl(nextPictureUrl);
      }
    }
  };
  console.log(pictureUrl);
  //   const [pictureUrl, setPictureUrl] = useState(pictures && pictures[0]);

  //   console.log(pictureUrl);
  //   const nextPicture = () => {
  //     for (let index = 0; index < pictures.length; index++) {
  //       // const element = pictures[index];
  //       const nextPictureUrl = pictures[index + 1];
  //       console.log(nextPictureUrl);
  //       return setPictureUrl(nextPictureUrl);
  //     }
  //   };

  return (
    <section className="galeriePictures">
      {/* <img className="carousel" src={pictures ? pictureUrl : ""} alt={""} /> */}
      {/* {pictures &&
        pictures.map((urlPicture, key) => {
          return <img key={key} className="carousel" src={urlPicture} alt={""} />;
        })} */}
      <img src={chevron} alt="chevron" className={"chevronRight"} onClick={() => nextPicture()} />
      <img src={chevron} alt="chevron" className={"chevronLeft"} />
    </section>
  );
};

export default GalleryCarousel;
