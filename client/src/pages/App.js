import "./App.css";
import { Routes, Route } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Policy from "./Policy";
import Home from "./Home";
import PageNotFound from "./PageNotFpund";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/policy" element={<Policy />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
