import React, { useEffect } from "react";
import "./SecondImages.css";

const SecondImages = (props) => {
  // ---------- this function relocates the scroll bar when navigating between links
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { SecondSlides, onClick } = props;

  const handleClickImage = (index) => {
    onClick(index);
  };

  return (
    <div className="second-w-images-container">
      {SecondSlides.map((SecondSlides, index) => {
        return (
          <div
            onClick={() => handleClickImage(index)}
            key={index}
            className="second-w-image"
          >
            <img src={SecondSlides.src} />
          </div>
        );
      })}
    </div>
  );
};

export default SecondImages;
