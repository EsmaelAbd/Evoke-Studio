import React, { useEffect } from "react";
import "./SixthImages.css";

const SixthImages = (props) => {
  // ---------- this function relocates the scroll bar when navigating between links
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { SixthSlides, onClick } = props;

  const handleClickImage = (index) => {
    onClick(index);
  };

  return (
    <div className="sixth-images-container">
      {SixthSlides.map((SixthSlides, index) => {
        return (
          <div
            onClick={() => handleClickImage(index)}
            key={index}
            className="sixth-image"
          >
            <img src={SixthSlides.src} />
          </div>
        );
      })}
    </div>
  );
};

export default SixthImages;
