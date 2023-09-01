import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from "./pages/Home"
import Navbar from './components/Navbar';
import React from "react";
import "./styles/colors.css"
import OurStory from './pages/OurStory';
import Menu from './pages/Menu';
import Contact from './pages/Contact';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/story",
      element: <OurStory />
    },
    {
      path: "/menu",
      element: <Menu />
    },
    {
      path: "/contact",
      element: <Contact />
    }
  ]);

  return (
    <body>
      <RouterProvider router={router} />
    </body>
  );
}

export default App;
