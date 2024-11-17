import React, { useEffect } from "react";
import "./Home.css";
import HeroBG from "../../Gallery/ny6to4itoey-1.jpg";
import rightThumbnai from "../../Gallery/evoke-resize/portrait/_MG_0534-1.jpg";
import leftThumbnail from "../../Gallery/evoke-resize/portrait/IMG_3659-1.jpg";
import WeddingBG from "../../Gallery/evoke-resize/wedding/IMG_6469-11-1.jpg";
import { useNavigate } from "react-router-dom";

const Home = () => {
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
          <p>feel free to reach us through our social-media platform</p>
          <p>
            for more info <button>Click Here</button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
