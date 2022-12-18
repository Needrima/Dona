import React, { useEffect, useState } from "react";
import {Routes, Route} from 'react-router'
import About from "./pages/About";
import Blog from "./pages/Blog";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import SingleProduct from "./pages/SingleProduct";

export const AppContext = React.createContext();

function App() {
  const [state, setState] = useState({
    cartItems: [],
  })

  useEffect(() => {
    const cart_items = JSON.parse(window.localStorage.getItem('cart-items'))
    if (cart_items !== null) setState(state => ({...state, cartItems: cart_items}))
  }, [])

  const {cartItems} = state;

  const setCartItems = (data) => {
    setState(state => ({
        ...state,
        cartItems: [...state.cartItems, data]
    }))
  }

  const AddToCart = (itemReference, quantity, size) => {
    const cart_items = JSON.parse(window.localStorage.getItem('cart-items'))

    if (cart_items === null || cart_items.length === 0) { // cart-items has not been set in local storage or has been set with no data
      window.localStorage.setItem('cart-items', JSON.stringify([{itemReference, quantity, size}]))
      setCartItems({itemReference, quantity, size})
    }else {
      let exist = false;
      cart_items.forEach(item => {
        if (item.itemReference === itemReference) {
          alert('item already in cart')
          exist = true
          return
        }
      })

      if (!exist) {
        cart_items.push({itemReference, quantity, size})
        window.localStorage.setItem('cart-items', JSON.stringify(cart_items))
        setCartItems({itemReference, quantity, size})
      }      
    }
  }

  const RemoveFromCart = (reference) => {
    const remainingItems = cartItems.filter( item => item.itemReference !== reference)
    window.localStorage.setItem('cart-items', JSON.stringify(remainingItems))
    setCartItems(remainingItems)
  }

  return (
    <AppContext.Provider value={{
      cartItems,
      AddToCart,
      RemoveFromCart,
    }}>
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/shop' exact element={<Shop />} />
        <Route path='/shop/single/:id' exact element={<SingleProduct />} />
        <Route path='/blog' exact element={<Blog />} />
        <Route path='/about' exact element={<About />} />
        <Route path='/contact' exact element={<Contact />} />
        <Route path='/cart' exact element={<Cart />} />
      </Routes>
    </AppContext.Provider>
  );
}

export default App;
