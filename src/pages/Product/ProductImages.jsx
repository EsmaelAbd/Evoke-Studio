import React from "react";
import "./ProductImages.css";

const ProductImages = (props) => {
  const { ProductSlides, onClick } = props;

  const handleClickImage = (index) => {
    onClick(index);
  };

  return (
    <div className="images-container">
      {ProductSlides.map((ProductSlides, index) => {
        return (
          <div
            onClick={() => handleClickImage(index)}
            key={index}
            className="image"
          >
            <img src={ProductSlides.src} />
          </div>
        );
      })}
    </div>
  );
};

export default ProductImages;
