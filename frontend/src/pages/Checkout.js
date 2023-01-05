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
    let orderDetails = {cartItems, cartSubtotal, deliveryInfo, deliveryStatus: "UNDELIVERED", paymentStatus: "UNPAID"};
    
    (async () => {
      try {
        const res = await productAxiosInstance.post('/order', orderDetails)
        console.log(res.data);
        console.log('proceeding to payment');
        // go to payment
        let handler = window.PaystackPop.setup({
          key: 'pk_test_0e5f4cfe0f60cbc0b25995c05a75a448b88c1896', // Replace with your public key
          email: deliveryInfo.email,
          amount: (cartSubtotal + 1500) * 100, // subtotal + delivery fee multiplied by 100 to convert to base currency (kobo)
          ref: ''+res.data.id, // generates a pseudo-unique reference. Please replace with a reference you generated. Or remove the line entirely so our API will generate one for you
          // label: "Optional string that replaces customer email",
          onClose: function(){
            alert('payment unsuccessful, try later');
          },
          callback: function(response){
            let message = 'Payment complete! Reference: '+response.reference;
            alert(message);
            
            productAxiosInstance.put(`/order/update-payment/${res.data.id}`)
            .then(res => console.log(res.data))
            .catch(err => console.info(err))
            
            window.localStorage.setItem('dona-cart-items', JSON.stringify([]))
            changeCartItems([])
            window.location.href = '/'
          }
        });
        handler.openIframe();

      }catch(err) {
        console.log(err)
      }
    })()
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