import "./App.css";
import { Routes, Route } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Policy from "./Policy";
import Home from "./Home";
import Login from "./Login";
import PageNotFound from "./PageNotFound";
import Register from "./Register";
import UserLogged from "../private_routes/UserLogged";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<UserLogged />}>
        <Route path="" element={<Contact />} />
      </Route>
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/policy" element={<Policy />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
