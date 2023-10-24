//import "./App.css";
// import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Announcements from "./components/Announcements";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes> */}
      <Home />
      <About />
      <Announcements />
      <Contact />
    </div>
  );
}

export default App;
