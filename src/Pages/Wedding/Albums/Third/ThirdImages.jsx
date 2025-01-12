import React, { useEffect } from "react";
import "./ThirdImages.css";

const ThirdImages = (props) => {
  // ---------- this function relocates the scroll bar when navigating between links
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { ThirdSlides, onClick } = props;

  const handleClickImage = (index) => {
    onClick(index);
  };

  return (
    <div className="third-w-images-container">
      {ThirdSlides.map((ThirdSlides, index) => {
        return (
          <div
            onClick={() => handleClickImage(index)}
            key={index}
            className="third-w-image"
          >
            <img src={ThirdSlides.src} />
          </div>
        );
      })}
    </div>
  );
};

export default ThirdImages;
