import './App.css'
import React, { Suspense } from "react";
import { Routes, Route, Link } from "react-router-dom";

const Home = React.lazy(() => import("./components/Home"));
const About = React.lazy(() => import("./components/About"));
const Contact = React.lazy(() => import("./components/Contact"));

function App() {
  return (
    <div style={{ padding: "2px" }}>

      <nav>
        <Link to="/"  style={{ marginRight: "30px" }}>Home</Link> |{" "}
        <Link to="/about"  style={{ marginRight: "15px", marginLeft: "15px" }}>About</Link> |{" "}
        <Link to="/contact"  style={{ marginLeft: "30px" }}>Contact</Link>
      </nav>

      

      <Suspense fallback={<h3>Loading Page...</h3>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;


