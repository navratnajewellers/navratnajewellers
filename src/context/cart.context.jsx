import { createContext, useContext, useEffect, useState } from 'react';
import { useProfile } from './profile.context';
import axios from 'axios';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const { userData } = useProfile();
  const [cartData, setCartData] = useState({
    id: '',
    user_id: '',
    product_id: '',
    quantity: 0,
    price: 0,
  });

  useEffect(() => {
    if (userData.id) {
      console.log('user is login');

      const fetchCartData = async () => {
        try {
          const response = await axios.post(
            'http://127.0.0.1/testing/test/fetch_cart.php',
            {
              userId: userData.id,
            }
          );

          // console.log(response.data.message);
          console.log(response.data);

          if (response.data.status === 'success') {
            setCartData({
              id: response.data.record.id,
              user_id: response.data.record.user_id,
              product_id: response.data.record.product_id,
              quantity: response.data.record.quantity,
              price: response.data.record.price,
            });

            console.log('price get updated');
          } else if (response.data.status === 'error') {
            setCartData({
              id: '',
              user_id: userData.id,
              product_id: '',
              quantity: '',
              price: '',
            });

            console.log('only user_id get updated');
          }
        } catch (error) {
          console.log(error);
        }
      };

      fetchCartData();
    } else {
      console.log('user is not login');
    }
  }, [userData.id]);

  return (
    <CartContext.Provider value={{ cartData, setCartData }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
