import React, { useContext } from 'react'
import { AppContext } from '../App';
import { productAxiosInstance } from '../axios/axios';
import CheckoutLayout from '../components/CheckoutComponents/CheckoutLayout';
import Layout from '../components/Layout/Layout';

export const CheckoutContext = React.createContext();
const Checkout = () => {
  const {cartItems, cartSubtotal, changeCartItems} = useContext(AppContext);
  if (!cartItems || cartItems.length === 0) {
    window.location.href = '/cart'
  }

  const placeOrder = (deliveryInfo) => {
    let orderDetails = {cartItems, cartSubtotal, deliveryInfo}
    productAxiosInstance.post('/order', orderDetails)
    .then(res => {
      if (res.status === 200){ 
        console.log(res.data)

        // go to payment
        let handler = window.PaystackPop.setup({
          key: 'pk_test_0e5f4cfe0f60cbc0b25995c05a75a448b88c1896', // Replace with your public key
          //email: email,
          amount: (cartSubtotal + 1500) * 100, // subtotal + delivery fee multiplied by 100 to convert to base currency (kobo)
          ref: ''+res.data.id, // generates a pseudo-unique reference. Please replace with a reference you generated. Or remove the line entirely so our API will generate one for you
          label: "Optional string that replaces customer email",
          onClose: function(){
            alert('payment unsuccessful, try later');
            productAxiosInstance.delete(`/order/${res.data.id}`)
            .then(res => console.log(res.data))
            .catch(err => console.info(err))
          },
          callback: function(response){
            let message = 'Payment complete! Reference: '+response.reference;
            alert(message);
            window.localStorage.setItem('dona-cart-items', JSON.stringify([]))
            changeCartItems([])
            window.location.href = '/'
          }
        });
        handler.openIframe();
      }
    })
    .catch(err => console.info(err.response))
  }
  
  return (
    <Layout>
      <CheckoutContext.Provider value={{
        placeOrder
      }}>
        <CheckoutLayout />
      </CheckoutContext.Provider>
    </Layout>
  )
}

export default Checkout