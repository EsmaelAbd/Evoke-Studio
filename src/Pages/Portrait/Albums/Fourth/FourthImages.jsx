import React, { useEffect } from "react";
import "./FourthImages.css";

const FourthImages = (props) => {
  // ---------- this function relocates the scroll bar when navigating between links
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { FourthSlides, onClick } = props;

  const handleClickImage = (index) => {
    onClick(index);
  };

  return (
    <div className="fourth-images-container">
      {FourthSlides.map((FourthSlides, index) => {
        return (
          <div
            onClick={() => handleClickImage(index)}
            key={index}
            className="fourth-image"
          >
            <img src={FourthSlides.src} />
          </div>
        );
      })}
    </div>
  );
};

export default FourthImages;
