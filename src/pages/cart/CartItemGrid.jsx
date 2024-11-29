import { useState } from 'react';
import CartItem from './CartItem';

const CartItemGrid = ({ priceData, cartProduct, setGrand_total }) => {
  const [newCartproduct, setNewCartProduct] = useState(cartProduct);

  // updating the price for the grand total price
  const priceDetails = {
    productPrice: 1,
    makingCharge: 1,
    subTotal: 1,
    gst: 1,
    grand_total: 1,
  };

  newCartproduct.map(data => {
    priceDetails.productPrice =
      priceData.price_1_gram_24K * data.weight * data.quantity;
    priceDetails.makingCharge = priceDetails.productPrice * 0.08;
    priceDetails.subTotal =
      priceDetails.productPrice + priceDetails.makingCharge;
    priceDetails.gst = priceDetails.subTotal * 0.03;
    priceDetails.grand_total = Math.round(
      priceDetails.grand_total + priceDetails.subTotal + priceDetails.gst
    );
  });

  setGrand_total(priceDetails.grand_total);

  // copy data from cartitem here

  const updateCart = async (
    cartId,
    actionType,
    productPrice = 0,
    quantity = 0
  ) => {
    console.log({
      cartId: cartId,
      actionType: actionType,
      productPrice: productPrice,
      quantity: quantity,
    });

    // cheacking filter
    if (actionType === 'remove') {
      // const upadteCartProduct = newCartproduct.filter(data => data !== data);
      // setNewCartProduct(upadteCartProduct);
      console.log('inside the remove action type');

      console.log(typeof cartId);

      setNewCartProduct(val => val.filter(data => data.id !== cartId));
    } else if (actionType === 'increaseDecreaseQuantity') {
      console.log('inside the cart quantity action type');

      //   setNewCartProduct(val =>
      //     val.map(data => {
      //       return data.id == cartId
      //         ? { ...data, quantity: quantity, price: grand_total * quantity }
      //         : data;
      //     })
      //   );
    }

    console.log({ cartProduct, newCartproduct });

    // try {
    //   const response = await axios.post(
    //     'http://127.0.0.1/testing/cart/delete_original_cart.php',
    //     {
    //       cart_id: cartId,
    //       action_type: actionType,
    //       product_price: productPrice,
    //       quantity: quantity,
    //     }
    //   );

    //   // console.log(response.data.message);
    //   console.log(response.data);

    //   if (response.status === 200) {
    //     // setCartProduct(response.data.record);
    //     // setIsCartLoading(false);
    //     setCartProduct(val => val.filter(data => data.id === cartId))

    //     setCartProduct(val => val.map(data => {
    //       if(data.id === cartId){
    //         return({...data,
    //           quantity: quantity,
    //         price: grand_total * quantity,
    //         })

    //       }else {
    //         return({...data})
    //       }
    //     }))
    //   }
    // } catch (error) {
    //   console.log(error);
    // }
  };

  // to delete the product from cart
  const handleRemoveCartProduct = async cartId => {
    console.log('remove the cart product with id ' + cartId);

    updateCart(cartId, 'remove');
  };

  //to increase cart quantity
  const handleIncreaseCart = cartId => {
    console.log('in increase cart quantity with cart id ' + cartId);

    // const previousQuantity = cartData.quantity + 1;
    // updateCart(
    //   cartId,
    //   'increaseDecreaseQuantity',
    //   grand_total,
    //   previousQuantity
    // );
  };

  //to decrease cart quantity
  const handleDecreaseCart = cartId => {
    console.log('in decrease cart quantity with cart id ' + cartId);

    // const previousQuantity = cartData.quantity - 1;
    // updateCart(
    //   cartId,
    //   'increaseDecreaseQuantity',
    //   grand_total,
    //   previousQuantity
    // );
  };

  // copy end

  return (
    <div>
      {newCartproduct.map(data => (
        <CartItem
          key={data.id}
          cartData={data}
          priceData={priceData}
          cartProduct={cartProduct}
          handleRemoveCartProduct={handleRemoveCartProduct}
          handleIncreaseCart={handleIncreaseCart}
          handleDecreaseCart={handleDecreaseCart}
        />
      ))}
    </div>
  );
};

export default CartItemGrid;
