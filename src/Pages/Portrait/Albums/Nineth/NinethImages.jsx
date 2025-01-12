import React, { useEffect } from "react";
import "./NinethImages.css";

const NinethImages = (props) => {
  // ---------- this function relocates the scroll bar when navigating between links
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { NinethSlides, onClick } = props;

  const handleClickImage = (index) => {
    onClick(index);
  };

  return (
    <div className="nineth-images-container">
      {NinethSlides.map((NinethSlides, index) => {
        return (
          <div
            onClick={() => handleClickImage(index)}
            key={index}
            className="nineth-image"
          >
            <img src={NinethSlides.src} />
          </div>
        );
      })}
    </div>
  );
};

export default NinethImages;
