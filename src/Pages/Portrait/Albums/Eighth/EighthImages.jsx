import React, { useEffect } from "react";
import "./EighthImages.css";

const EighthImages = (props) => {
  // ---------- this function relocates the scroll bar when navigating between links
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { EighthSlides, onClick } = props;

  const handleClickImage = (index) => {
    onClick(index);
  };

  return (
    <div className="eighth-images-container">
      {EighthSlides.map((EighthSlides, index) => {
        return (
          <div
            onClick={() => handleClickImage(index)}
            key={index}
            className="eighth-image"
          >
            <img src={EighthSlides.src} />
          </div>
        );
      })}
    </div>
  );
};

export default EighthImages;
