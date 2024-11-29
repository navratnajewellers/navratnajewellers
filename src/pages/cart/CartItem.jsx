import { Button, Col, Container, Divider, Row } from 'rsuite';
import TrashIcon from '@rsuite/icons/Trash';
// import axios from 'axios';

const CartItem = ({
  cartData,
  priceData,
  handleRemoveCartProduct,
  handleDecreaseCart,
  handleIncreaseCart,
}) => {
  // setting the price of the product
  const productPrice = priceData.price_1_gram_24K * cartData.weight;
  const makingCharge = productPrice * 0.08;
  const subTotal = productPrice + makingCharge;
  const gst = subTotal * 0.03;
  const grand_total = Math.round(subTotal + gst);

  console.log({ cartData: cartData });

  // const updateCart = async (
  //   cartId,
  //   actionType,
  //   productPrice = 0,
  //   quantity = 0
  // ) => {
  //   console.log({
  //     cartId: cartId,
  //     actionType: actionType,
  //     productPrice: productPrice,
  //     quantity: quantity,
  //   });

  //   // cheacking filter
  //   if (actionType === 'remove') {
  //     // const upadteCartProduct = newCartproduct.filter(data => data !== data);
  //     // setNewCartProduct(upadteCartProduct);
  //     console.log('inside the remove action type');

  //     // setNewCartProduct(val => val.filter(data => data.id !== cartId));
  //   } else if (actionType === 'increaseDecreaseQuantity') {
  //     console.log('inside the cart quantity action type');

  //     setNewCartProduct(val =>
  //       val.map(data => {
  //         return data.id == cartId
  //           ? { ...data, quantity: quantity, price: grand_total * quantity }
  //           : data;
  //       })
  //     );
  //   }

  //   console.log({ cartProduct, newCartproduct });

  //   // try {
  //   //   const response = await axios.post(
  //   //     'http://127.0.0.1/testing/cart/delete_original_cart.php',
  //   //     {
  //   //       cart_id: cartId,
  //   //       action_type: actionType,
  //   //       product_price: productPrice,
  //   //       quantity: quantity,
  //   //     }
  //   //   );

  //   //   // console.log(response.data.message);
  //   //   console.log(response.data);

  //   //   if (response.status === 200) {
  //   //     // setCartProduct(response.data.record);
  //   //     // setIsCartLoading(false);
  //   //     setCartProduct(val => val.filter(data => data.id === cartId))

  //   //     setCartProduct(val => val.map(data => {
  //   //       if(data.id === cartId){
  //   //         return({...data,
  //   //           quantity: quantity,
  //   //         price: grand_total * quantity,
  //   //         })

  //   //       }else {
  //   //         return({...data})
  //   //       }
  //   //     }))
  //   //   }
  //   // } catch (error) {
  //   //   console.log(error);
  //   // }
  // };

  // // to delete the product from cart
  // const handleRemoveCartProduct = async cartId => {
  //   console.log('remove the cart product with id ' + cartId);

  //   updateCart(cartId, 'remove');
  // };

  // //to increase cart quantity
  // const handleIncreaseCart = cartId => {
  //   console.log('in increase cart quantity with cart id ' + cartId);

  //   const previousQuantity = cartData.quantity + 1;
  //   updateCart(
  //     cartId,
  //     'increaseDecreaseQuantity',
  //     grand_total,
  //     previousQuantity
  //   );
  // };

  // //to decrease cart quantity
  // const handleDecreaseCart = cartId => {
  //   console.log('in decrease cart quantity with cart id ' + cartId);

  //   const previousQuantity = cartData.quantity - 1;
  //   updateCart(
  //     cartId,
  //     'increaseDecreaseQuantity',
  //     grand_total,
  //     previousQuantity
  //   );
  // };

  return (
    <div className="cart-product-container">
      <Divider />
      <div>
        <Container>
          <Row>
            <Col
              xs={7}
              sm={7}
              md={7}
              lg={7}
              className="cart-product-img-container"
            >
              <div className="imageWrapper">
                <img
                  src={
                    cartData.product_img1
                      ? cartData.product_img1
                      : '/24K_1_gram_gold_coin.jpeg'
                  }
                  alt="24 Karat Gold Coin"
                ></img>
              </div>
            </Col>
            <Col
              xs={12}
              sm={12}
              md={12}
              lg={12}
              className="order-product-info-container"
            >
              <div>
                <h4 className="margin-t10">{cartData.name}</h4>
                <h4 className="margin-t5 margin-b20">₹ {grand_total}</h4>
              </div>
              <div className="margin-b10">
                <Button
                  startIcon={<TrashIcon />}
                  onClick={() => handleRemoveCartProduct(cartData.id)}
                >
                  Remove
                </Button>
              </div>
            </Col>
            <Col
              xs={5}
              sm={5}
              md={5}
              lg={5}
              className="order-product-btn-container"
            >
              <div>
                <Button
                  className="product-add-cart_btn"
                  onClick={() => handleDecreaseCart(cartData.id)}
                >
                  -
                </Button>
                <span className="product-cart-quantity">
                  {cartData.quantity}
                </span>
                <Button
                  className="product-add-cart_btn"
                  onClick={() => handleIncreaseCart(cartData.id)}
                >
                  +
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default CartItem;
