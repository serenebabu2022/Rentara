import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NavBar from "./components/common/NavBar";
import ThemeConfig from "./theme";
import Footer from "./components/common/Footer";
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/about',
    element: <About />,
  },

  {
    path: '/contact',
    element: <Contact />,
  },
]);

function App() {
  return (
    <ThemeConfig>
      <div className="App">
        <NavBar />
        <div className="content">
          <RouterProvider router={router} />
        </div>
        <Footer />
      </div>
    </ThemeConfig>
  )
}
export default App;
