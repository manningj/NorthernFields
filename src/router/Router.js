import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home.js";
import About from "../pages/About.js";
import FAQ from "../pages/FAQ.js";
import Resources from "../pages/Resources.js";
import Photos from "../pages/Photos.js";
import Calendar from "../pages/Calendar.js";

import Header from "./Header.js";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/photos" element={<Photos />} />
        <Route path="/calendar" element={<Calendar />} />
      </Routes>
    </div>
  );
}
export default App;
