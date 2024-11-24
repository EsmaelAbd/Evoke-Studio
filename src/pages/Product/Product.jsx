import React, { useState } from "react";
import "./Product.css";
import ProductImages from "./ProductImages";
import { ProductSlides } from "./ProductSlides";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/counter.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import {
  Counter,
  Fullscreen,
  Thumbnails,
} from "yet-another-react-lightbox/plugins";

const Product = () => {
  const [index, setindex] = useState(-1);

  return (
    <div>
      <ProductImages
        ProductSlides={ProductSlides}
        onClick={(currentIndex) => setindex(currentIndex)}
      />
      <Lightbox
        // open={open}
        // close={() => setopen(false)}
        index={index}
        open={index >= 0}
        close={() => setindex(-1)}
        slides={ProductSlides}
        plugins={[Counter, Fullscreen, Thumbnails]}
      />
    </div>
  );
};

export default Product;
