import React, { useEffect } from "react";
import "./SeventhImages.css";

const SeventhImages = (props) => {
  // ---------- this function relocates the scroll bar when navigating between links
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { SeventhSlides, onClick } = props;

  const handleClickImage = (index) => {
    onClick(index);
  };

  return (
    <div className="seventh-w-images-container">
      {SeventhSlides.map((SeventhSlides, index) => {
        return (
          <div
            onClick={() => handleClickImage(index)}
            key={index}
            className="seventh-w-image"
          >
            <img src={SeventhSlides.src} />
          </div>
        );
      })}
    </div>
  );
};

export default SeventhImages;
