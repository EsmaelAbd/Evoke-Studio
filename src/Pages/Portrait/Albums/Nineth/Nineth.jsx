import React, { useEffect, useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/counter.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import {
  Counter,
  Fullscreen,
  Thumbnails,
  Slideshow,
} from "yet-another-react-lightbox/plugins";
import NinethImages from "./NinethImages";
import { NinethSlides } from "./NinethSildes";

const Nineth = () => {
  // ---------- this function relocates the scroll bar when navigating between links
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // const [open, setopen] = useState(false);
  const [index, setindex] = useState(-1);
  const slideshowRef = React.useRef(null);

  return (
    <div>
      <NinethImages
        NinethSlides={NinethSlides}
        onClick={(currentIndex) => setindex(currentIndex)}
      />

      <Lightbox
        // open={open}
        // close={() => setopen(false)}
        index={index}
        open={index >= 0}
        close={() => setindex(-1)}
        slides={NinethSlides}
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

export default Nineth;
