import React from "react";
import First from "./Albums/First/First";
import Second from "./Albums/Second/Second";
import Third from "./Albums/Third/Third";
import Fourth from "./Albums/Fourth/Fourth";
import Fifth from "./Albums/Fifth/Fifth";
import Sixth from "./Albums/Sixth/Sixth";
import Seventh from "./Albums/Seventh/Seventh";
import "./Wedding.css";

const Wedding = () => {
  return (
    <div className="wedding">
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
