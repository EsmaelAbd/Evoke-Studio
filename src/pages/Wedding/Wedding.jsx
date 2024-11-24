import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/counter.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import {
  Counter,
  Fullscreen,
  Thumbnails,
} from "yet-another-react-lightbox/plugins";
import WeddingImages from "./WeddingImages";
import { WeddingSlides } from "./WeddingSlides";

const Wedding = () => {
  const [index, setindex] = useState(-1);
  return (
    <div>
      <WeddingImages
        WeddingSlides={WeddingSlides}
        onClick={(currentIndex) => setindex(currentIndex)}
      />
      <Lightbox
        // open={open}
        // close={() => setopen(false)}
        index={index}
        open={index >= 0}
        close={() => setindex(-1)}
        slides={WeddingSlides}
        plugins={[Counter, Fullscreen, Thumbnails]}
      />
    </div>
  );
};

export default Wedding;
