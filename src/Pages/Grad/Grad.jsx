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
import GradImages from "./GradImages";
import { GradSlides } from "./GradSlides";
import "./Grad.css";

const Grad = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // const [open, setopen] = useState(false);
  const [index, setindex] = useState(-1);
  const slideshowRef = React.useRef(null);

  return (
    <div className="grad">
      <GradImages
        GradSlides={GradSlides}
        onClick={(currentIndex) => setindex(currentIndex)}
      />
      <Lightbox
        // open={open}
        // close={() => setopen(false)}
        index={index}
        open={index >= 0}
        close={() => setindex(-1)}
        slides={GradSlides}
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

export default Grad;
