import React from "react";
import First from "./Albums/First/First";
import Second from "./Albums/Second/Second";
import Third from "./Albums/Third/Third";
import Fourth from "./Albums/Fourth/Fourth";
import Fifth from "./Albums/Fifth/Fifth";
import Sixth from "./Albums/Sixth/Sixth";
import Seventh from "./Albums/Seventh/Seventh";
// import Lightbox from "yet-another-react-lightbox";
// import "yet-another-react-lightbox/styles.css";
// import "yet-another-react-lightbox/plugins/counter.css";
// import "yet-another-react-lightbox/plugins/thumbnails.css";
// import {
//   Counter,
//   Fullscreen,
//   Thumbnails,
//   Slideshow,
// } from "yet-another-react-lightbox/plugins";
// import WeddingImages from "./WeddingImages";
// import { WeddingSlides } from "./WeddingSlides";

const Wedding = () => {
  // ---------- this function relocates the scroll bar when navigating between links
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);

  // // const [open, setopen] = useState(false);
  // const [index, setindex] = useState(-1);
  // const slideshowRef = React.useRef(null);

  return (
    <div>
      {/* <WeddingImages
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
        plugins={[Counter, Fullscreen, Thumbnails, Slideshow]}
        slideshow={{ ref: slideshowRef }}
        on={{
          click: () => {
            (slideshowRef.current?.playing
              ? slideshowRef.current?.pause
              : slideshowRef.current?.play)?.();
          },
        }}
      /> */}
      <First />
      <Second />
      <Third />
      <Fourth />
      <Fifth />
      <Sixth />
      <Seventh />
    </div>
  );
};

export default Wedding;
