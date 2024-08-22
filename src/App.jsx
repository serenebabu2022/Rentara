import React from "react";
import { Route, NavLink, HashRouter, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import NavBar from "./components/common/NavBar";
import ThemeConfig from "./theme";

function App() {
  return (
    <HashRouter>
      <ThemeConfig>
        <div className="App">
          <NavBar />
          <h1>A Simple SPA made using React</h1>
          <ul className="header">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
          <div className="content">
            <Routes>
              <Route exact path="/" element={<Home />}></Route>
              <Route exact path="/about" element={<About />}></Route>
              <Route exact path="/contact" element={<Contact />}></Route>
            </Routes>
          </div>
        </div>
      </ThemeConfig>
    </HashRouter>
  );
}
export default App;
