import React from "react";
import "../Wedding/WeddingImages.css";

const GradImages = (props) => {
  const { GradSlides, onClick } = props;

  const handleClickImage = (index) => {
    onClick(index);
  };

  return (
    <div className="images-container">
      {GradSlides.map((GradSlides, index) => {
        return (
          <div
            onClick={() => handleClickImage(index)}
            key={index}
            className="image"
          >
            <img src={GradSlides.src} />
          </div>
        );
      })}
    </div>
  );
};

export default GradImages;
