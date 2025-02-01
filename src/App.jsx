import "./App.css";
import { Route, Routes } from "react-router";
import Home from "./Pages/Home/Home";
import NavBar from "./NavBar/NavBar";
import Portrait from "./Pages/Portrait/Portrait";
import Wedding from "./Pages/Wedding/Wedding";
// import Grad from "./Pages/Grad/Grad";
import Footer from "./Footer/Footer";
// import Test from "./test/test";

function App() {
  return (
    <>
      <div className="app">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          {/* <Route path="/" element={<Test />}></Route> */}
          <Route path="/portrait" element={<Portrait />}></Route>
          <Route path="/wedding" element={<Wedding />}></Route>
          {/* <Route path="/grad" element={<Grad />}></Route> */}
          <Route path="/about"></Route>
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
