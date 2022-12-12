import React, { useEffect, useState } from "react";
import {Routes, Route} from 'react-router'
import About from "./pages/About";
import Blog from "./pages/Blog";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Shop from "./pages/Shop";

export const AppContext = React.createContext();

function App() {
  const [state, setState] = useState({
    cartItems: [],
  })
  const {cartItems} = state;

  useEffect(() => {
    const cart_items = JSON.parse(window.localStorage.getItem('cart-items'))
    if (cart_items !== null) setState(state => ({...state, cartItems: cart_items}))
  }, [])

  const AddToCart = (itemReference, quantity, size) => {
    const cart_items = JSON.parse(window.localStorage.getItem('cart-items'))

    if (cart_items === null || cart_items.length === 0) { // cart-items has not been set in local storage   
      window.localStorage.setItem('cart-items', JSON.stringify([{itemReference, quantity, size}]))
      
      setState(state => ({
        ...state,
        cartItems: [...state.cartItems, itemReference]
      }))
    }else {
      let exist = false;
      cart_items.forEach(item => {
        if (item.itemReference === itemReference) {
          alert('item already in cart')
          exist = true
        }
      })

      if (!exist) {
        cart_items.push({itemReference, quantity, size})
        window.localStorage.setItem('cart-items', JSON.stringify(cart_items))

        setState(state => ({
          ...state,
          cartItems: [...state.cartItems, itemReference]
        }))
      }      
    }

  }

  return (
    <AppContext.Provider value={{
      cartItems,
      AddToCart
    }}>
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/shop' exact element={<Shop />} />
        <Route path='/blog' exact element={<Blog />} />
        <Route path='/about' exact element={<About />} />
        <Route path='/contact' exact element={<Contact />} />
        <Route path='/cart' exact element={<Cart />} />
      </Routes>
    </AppContext.Provider>
  );
}

export default App;
