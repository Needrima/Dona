import React, { useEffect, useState } from "react";
import {Routes, Route, useNavigate} from 'react-router'
import About from "./pages/About";
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
    const cart_items = JSON.parse(window.localStorage.getItem('dona-cart-items'))
    if (cart_items !== null) setState(state => ({...state, cartItems: cart_items}))
  }, [])

  const {cartItems} = state;

  // setCartItems adds a new item to cart. the item data is an object containing item id, quantity and size
  const setCartItems = (data) => {
    setState(state => ({
        ...state,
        cartItems: [...state.cartItems, data]
    }))
  }

  // changeCartItems changes the value of cartItems after 
  //other data like item price, sizes, image names and other data
  // has been added to each cart item
  const changeCartItems = (data) => {
    setState(state => ({
        ...state,
        cartItems: data
    }))
  }

  // sets the prop (quantity or size) of item with id 'id' to value 'value'
  const setItemProp = (id, prop, value) => {
    cartItems.forEach(item => {
      if (item.id === id) {
        switch (prop) {
          case 'quantity':
            value > 0 ? item['quantity'] = value : item['quantity'] = 1;
            item['subtotal'] = item['price'] * item['quantity'];
            break;
          case 'size':
            item['size'] = value;
        }
      }
    })

    changeCartItems(cartItems)
    window.localStorage.setItem('dona-cart-items', JSON.stringify(cartItems))
  }

  // adds a new item(item id, quantity and size) to cart items
  const AddToCart = (id, quantity, size) => {
    const cart_items = JSON.parse(window.localStorage.getItem('dona-cart-items'))

    if (cart_items === null || cart_items.length === 0) { // dona-cart-items has not been set in local storage or has been set with no data
      window.localStorage.setItem('dona-cart-items', JSON.stringify([{id, quantity, size}]))
      setCartItems({id, quantity, size})
    }else {
      let exist = false;
      cart_items.forEach(item => {
        if (item.id === id) {
          alert('item already in cart')
          exist = true
          return
        }
      })

      if (!exist) {
        cart_items.push({id, quantity, size})
        window.localStorage.setItem('dona-cart-items', JSON.stringify(cart_items))
        setCartItems({id, quantity, size})
      }      
    }
  }

  const navigate = useNavigate();

  const RemoveFromCart = (id) => {
    const remainingItems = cartItems.filter( item => item.id !== id)
    window.localStorage.setItem('dona-cart-items', JSON.stringify(remainingItems))
    changeCartItems(remainingItems)
    navigate('/cart')
  }

  return (
    <AppContext.Provider value={{
      cartItems,
      AddToCart,
      RemoveFromCart,
      changeCartItems,
      setItemProp,
    }}>
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/shop' exact element={<Shop />} />
        <Route path='/single/:id' exact element={<SingleProduct />} />
        {/* <Route path='/blog' exact element={<Blog />} /> */}
        <Route path='/about' exact element={<About />} />
        <Route path='/contact' exact element={<Contact />} />
        <Route path='/cart' exact element={<Cart />} />
      </Routes>
    </AppContext.Provider>
  );
}

export default App;
