import React from "react";
import "./Home.css";
import img1 from "../../assets/Gallery/evoke-resize/Overview/_MG_0556-1.jpg";
import img2 from "../../assets/Gallery/evoke-resize/Overview/IMG_3856-1.jpg";
import img3 from "../../assets/Gallery/evoke-resize/Overview/_MG_9963-1.jpg";
import img4 from "../../assets/Gallery/evoke-resize/Overview/IMG_4013-1.jpg";
import img5 from "../../assets/Gallery/evoke-resize/Overview/IMG_3613-1.jpg";
import img6 from "../../assets/Gallery/evoke-resize/Overview/_MG_5659-1.jpg";
import img7 from "../../assets/Gallery/evoke-resize/Overview/_MG_0005-1.jpg";
import img8 from "../../assets/Gallery/evoke-resize/Overview/IMG_1614-1.jpg";
import img9 from "../../assets/Gallery/evoke-resize/Overview/IMG_1661-1.jpg";
import img10 from "../../assets/Gallery/evoke-resize/Overview/IMG_4098-1.jpg";
import img11 from "../../assets/Gallery/evoke-resize/Overview/_MG_8954-1.jpg";

const Test = () => {
  return (
    <div className="home">
      <div className="first-row">
        <img src={img1} alt="" />
        <img src={img2} alt="" />
        <img src={img3} alt="" />
      </div>
      <div className="second-row">
        <img src={img4} alt="" />
        <img src={img5} alt="" />
      </div>
      <div className="third-row">
        <img src={img11} alt="" />
        <img src={img6} alt="" />
        <img src={img7} alt="" />
      </div>
      <div className="fourth-row">
        <div className="left">
          <img src={img8} alt="" />
        </div>
        <div className="right">
          <img src={img9} alt="" />
          <img src={img10} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Test;
