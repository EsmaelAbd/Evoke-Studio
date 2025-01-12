import React, { useEffect } from "react";
import "./FirstImages.css";

const FirstImages = (props) => {
  // ---------- this function relocates the scroll bar when navigating between links
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { FirstSlides, onClick } = props;

  const handleClickImage = (index) => {
    onClick(index);
  };

  return (
    <div className="first-images-container">
      {FirstSlides.map((FirstSlides, index) => {
        return (
          <div
            onClick={() => handleClickImage(index)}
            key={index}
            className="first-image"
          >
            <img src={FirstSlides.src} />
          </div>
        );
      })}
    </div>
  );
};

export default FirstImages;
