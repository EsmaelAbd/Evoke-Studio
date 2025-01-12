import React, { useEffect } from "react";
import "./FifthImages.css";

const FifthImages = (props) => {
  // ---------- this function relocates the scroll bar when navigating between links
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { FifthSlides, onClick } = props;

  const handleClickImage = (index) => {
    onClick(index);
  };

  return (
    <div className="fifth-w-images-container">
      {FifthSlides.map((FifthSlides, index) => {
        return (
          <div
            onClick={() => handleClickImage(index)}
            key={index}
            className="fifth-w-image"
          >
            <img src={FifthSlides.src} />
          </div>
        );
      })}
    </div>
  );
};

export default FifthImages;
