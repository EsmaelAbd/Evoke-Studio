import Eighth from "./Albums/Eighth/Eighth";
import Fifth from "./Albums/Fifth/Fifth";
import First from "./Albums/First/First";
import Fourth from "./Albums/Fourth/Fourth";
import Nineth from "./Albums/Nineth/Nineth";
import Second from "./Albums/Second/Second";
import Seventh from "./Albums/Seventh/Seventh";
import Sixth from "./Albums/Sixth/Sixth";
import Third from "./Albums/Third/Third";
import "./Portrait.css";

const Portrait = () => {
  return (
    <div className="portrait">
      <First />
      <Second />
      <Third />
      <Fourth />
      <Fifth />
      <Sixth />
      <Seventh />
      <Nineth />
      <Eighth />
    </div>
  );
};

export default Portrait;
