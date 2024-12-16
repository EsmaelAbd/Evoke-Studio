import React, { useEffect } from "react";
import "./WeddingImages.css";

const WeddingImages = (props) => {
  // ---------- this function relocates the scroll bar when navigating between links
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { WeddingSlides, onClick } = props;

  const handleClickImage = (index) => {
    onClick(index);
  };

  return (
    <div className="images-container">
      {WeddingSlides.map((WeddingSlides, index) => {
        return (
          <div
            onClick={() => handleClickImage(index)}
            key={index}
            className="image"
          >
            <img src={WeddingSlides.src} />
          </div>
        );
      })}
    </div>
  );
};

export default WeddingImages;
