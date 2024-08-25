import React from "react";
import { Route, HashRouter, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NavBar from "./components/common/NavBar";
import ThemeConfig from "./theme";
import Footer from "./components/common/Footer";

function App() {
  return (
    <HashRouter>
      <ThemeConfig>
        <div className="App">
          <NavBar />
          <div className="content">
            <Routes>
              <Route exact path="/" element={<Home />}></Route>
              <Route exact path="/about" element={<About />}></Route>
              <Route exact path="/contact" element={<Contact />}></Route>
            </Routes>
          </div>
          <Footer />
        </div>
      </ThemeConfig>
    </HashRouter>
  );
}
export default App;
