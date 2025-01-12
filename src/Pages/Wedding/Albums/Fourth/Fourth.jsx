import React, { useEffect, useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import FourthImages from "./FourthImages";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/counter.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import {
  Counter,
  Fullscreen,
  Thumbnails,
  Slideshow,
} from "yet-another-react-lightbox/plugins";
import { FourthSlides } from "./FourthSlides";

const Fourth = () => {
  // ---------- this function relocates the scroll bar when navigating between links
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // const [open, setopen] = useState(false);
  const [index, setindex] = useState(-1);
  const slideshowRef = React.useRef(null);

  return (
    <div>
      <FourthImages
        FourthSlides={FourthSlides}
        onClick={(currentIndex) => setindex(currentIndex)}
      />

      <Lightbox
        // open={open}
        // close={() => setopen(false)}
        index={index}
        open={index >= 0}
        close={() => setindex(-1)}
        slides={FourthSlides}
        plugins={[Counter, Fullscreen, Thumbnails, Slideshow]}
        slideshow={{ ref: slideshowRef }}
        on={{
          click: () => {
            (slideshowRef.current?.playing
              ? slideshowRef.current?.pause
              : slideshowRef.current?.play)?.();
          },
        }}
      />
    </div>
  );
};

export default Fourth;
