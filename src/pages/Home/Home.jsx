import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import HeroBG from "../../Gallery/ny6to4itoey-1.jpg";
import rightThumbnai from "../../Gallery/evoke-resize/portrait/_MG_0534-1.jpg";
import leftThumbnail from "../../Gallery/evoke-resize/portrait/IMG_3659-1.jpg";
import WeddingBG from "../../Gallery/evoke-resize/wedding/IMG_6469-11-1.jpg";
import firstRow1 from "../../Gallery/evoke-resize/portrait/_MG_4915-1.jpg 1.jpg";
import firstRow2 from "../../Gallery/evoke-resize/portrait/_MG_5624-1.jpg";
import firstRow3 from "../../Gallery/evoke-resize/portrait/IMG_3830-1.jpg";
import secondRow1 from "../../Gallery/evoke-resize/product/_MG_8997-1.jpg";
import secondRow2 from "../../Gallery/evoke-resize/product/_MG_9894-1.jpg";
import secondRow3 from "../../Gallery/evoke-resize/product/_MG_8941-11.jpg";
import thirdRow1 from "../../Gallery/evoke-resize/wedding/_MG_9963-1.jpg";
import thirdRow2 from "../../Gallery/evoke-resize/wedding/IMG_1606-1.jpg";
import thirdRow3 from "../../Gallery/evoke-resize/wedding/IMG_8057-1.jpg";

const Home = () => {
  // ---------- the function to show albums from each side
  useEffect(() => {
    const albumsSection = document.getElementById("album");

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show-side");
          observer.unobserve(entry.target);
        }
      });
    });

    observer.observe(albumsSection);

    return () => {
      observer.disconnect();
    };
  }, []);

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/portrait");
  };
  return (
    <div className="home">
      {/* Hero Section */}
      <div className="hero">
        <img src={HeroBG} alt="" />
        <div className="hero-content">
          <h1>Evoke Studio</h1>
          <div className="hero-images">
            <div className="first-row">
              <img src={firstRow1} />
              <img src={firstRow2} />
              <img src={firstRow3} />
            </div>
            <div className="second-row">
              <img src={secondRow1} />
              <img src={secondRow2} />
              <img src={secondRow3} />
            </div>
            <div className="third-row">
              <img src={thirdRow1} />
              <img src={thirdRow3} />
              <img src={thirdRow2} />
            </div>
          </div>
        </div>
      </div>

      {/* Second Section - Portrait */}
      <div className="albums" id="album">
        <div className="left-side">
          <h1>Studio Portrait</h1>
          <div className="img-p">
            <img src={leftThumbnail} alt="portrait photo" />
            <p>
              Step into a world where vintage meets modern in this indoor
              photoshoot.
            </p>
          </div>
        </div>
        <div className="right-side">
          <div className="img-p">
            <img src={rightThumbnai} alt="portrait photo" />
            <p>
              The soft, golden glow of the lighting bathes each image in a cozy
              warmth, evoking a sense of nostalgia and timeless beauty.
            </p>
          </div>
          <div className="button">
            <button onClick={handleNavigate}>Explore More</button>
          </div>
        </div>
      </div>

      {/* Third Section - Wedding */}

      <div className="wedding">
        <div className="img">
          <img src={WeddingBG} alt="" />
        </div>
        <div className="title-and-button">
          <h1>
            Your wedding is a personal story that we are there to document.
          </h1>
        </div>
      </div>

      {/* Fourth Section */}

      <div className="book-now">
        <div className="in-border">
          <h1>Book your own portrait photogprahy session</h1>
        </div>
        <p>feel free to reach us through our social-media platform</p>
        <p>
          for more info <button>Click Here</button>
        </p>
      </div>
    </div>
  );
};

export default Home;
