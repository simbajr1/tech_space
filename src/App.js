import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.js"; // Verify Navbar.js exists
import Footer from "./components/Footer.js";
import Home from "./pages/Home"; // Verify Home.js exists
import "./App.css"
import "./tailwind.css"

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
