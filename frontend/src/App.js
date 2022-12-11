import React from "react";
import {Routes, Route} from 'react-router'
import About from "./pages/About";
import Blog from "./pages/Blog";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Shop from "./pages/Shop";

function App() {
  return (
    <Routes>
      <Route path='/' exact element={<Home />} />
      <Route path='/shop' exact element={<Shop />} />
      <Route path='/blog' exact element={<Blog />} />
      <Route path='/about' exact element={<About />} />
      <Route path='/contact' exact element={<Contact />} />
      <Route path='/cart' exact element={<Cart />} />
    </Routes>
  );
}

export default App;
