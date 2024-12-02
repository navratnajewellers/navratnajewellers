import {
  Breadcrumb,
  Button,
  Col,
  Container,
  Divider,
  Loader,
  Message,
  Row,
  useToaster,
} from 'rsuite';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { useProfile } from '../context/profile.context';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
// import CartItem from './cart/CartItem';
import CartItemGrid from './cart/CartItemGrid';

const Cart = () => {
  const toaster = useToaster();

  // for checking that user is login
  const { userData } = useProfile();
  const [isPriceLoading, setIsPriceLoading] = useState(true);
  const [isCartLoading, setIsCartLoading] = useState(true);

  const [priceData, setPriceData] = useState(null);
  const [cartProduct, setCartProduct] = useState(null);

  // to be set by the CartItemGrid
  const [grand_total, setGrand_total] = useState(0);

  // to display message
  const displayMessage = (type, message, duration = 2000) => {
    toaster.push(
      <Message showIcon type={type} closable>
        <strong>{message}</strong>
      </Message>,
      { placement: 'topCenter', duration: duration }
    );
  };

  useEffect(() => {
    // console.log(userData);

    // getting the price of gold
    const getGoldPrice = async () => {
      setIsPriceLoading(true);

      try {
        const response = await axios.get(
          'http://127.0.0.1/testing/test/gold_rate.php'
        );

        // console.log(response.data);
        setPriceData(response.data.record);

        if (response.status === 200) {
          setIsPriceLoading(false);
          // console.log('price data is loaded');
        }
      } catch (error) {
        console.log(error);
      }
    };

    getGoldPrice();

    //check if user is login or not
    if (userData.id) {
      // console.log('user is login');

      const fetchCartData = async () => {
        setIsCartLoading(true);

        try {
          const response = await axios.post(
            'http://127.0.0.1/testing/cart/fetch_original_cart.php',
            {
              userId: userData.id,
            }
          );

          // console.log(response.data.message);
          // console.log(response.data);

          if (response.status === 200) {
            setCartProduct(response.data.record);
            setIsCartLoading(false);
          }
        } catch (error) {
          console.log(error);
        }
      };

      fetchCartData();
    } else {
      // console.log(' user data is empty and user is not login');

      const fetchLocalCartData = async () => {
        setIsCartLoading(true);

        try {
          const hashedLocalUserId = JSON.parse(
            localStorage.getItem('localCart')
          );

          const response = await axios.post(
            'http://127.0.0.1/testing/cart/fetch_local_cart.php',
            {
              localId: hashedLocalUserId,
            }
          );

          // console.log(response.data.message);
          // console.log(response.data);

          if (response.status === 200) {
            setCartProduct(response.data.record);
            setIsCartLoading(false);
          }
        } catch (error) {
          console.log(error);
        }
      };

      fetchLocalCartData();
    }
  }, [userData]);

  // console.log({
  //   isPriceLoading: isPriceLoading,
  //   isCartLoading: isCartLoading,
  //   priceData: priceData,
  //   cartProduct: cartProduct,
  // });

  const handleCheckout = () => {
    if (userData.id) {
      displayMessage('info', 'payment step is on the way');
    } else {
      displayMessage(
        'error',
        'you need to login first before payemnt process',
        4000
      );
    }
  };

  return (
    <div>
      <div className="header-container margin-t10">
        <Header />
      </div>
      <div>
        <div className="breadcrumb-container">
          <Breadcrumb>
            <Breadcrumb.Item>
              <Link to="/">Home</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <Link to="/products">Products</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item active>Cart</Breadcrumb.Item>
          </Breadcrumb>
        </div>
        {isPriceLoading || isCartLoading ? (
          <div className="loader-default-container dis-flex">
            <Loader content="Loading..." vertical />
          </div>
        ) : (
          <div className="cart-container">
            <Container>
              <Row>
                <Col
                  xs={24}
                  sm={24}
                  md={16}
                  lg={16}
                  className="cart-information-container"
                >
                  <CartItemGrid
                    priceData={priceData}
                    cartProduct={cartProduct}
                    setGrand_total={setGrand_total}
                    userData={userData}
                  />
                  <Divider />
                </Col>
                <Col
                  xs={24}
                  sm={24}
                  md={8}
                  lg={8}
                  className="order-summery-container"
                >
                  <div className="order-summary">
                    <div>
                      <h4 className="main-color margin-b10">ORDER SUMMARY</h4>
                    </div>
                    <div className="table-responsive">
                      <table className="table table-borderless order-summary-table">
                        <tbody>
                          <tr>
                            <td>Sub Total</td>
                            {/* <td>₹ {priceDetails.grand_total}</td> */}
                            <td>₹ {grand_total}</td>
                          </tr>
                          <tr>
                            <td>Discount</td>
                            <td>- ₹ 0</td>
                          </tr>
                          <tr>
                            <td>Delivery Charge</td>
                            <td>FREE</td>
                          </tr>
                          <tr>
                            <td>TOTAL (Incl of all Taxes.)</td>
                            {/* <td>₹ {priceDetails.grand_total}</td> */}
                            <td>₹ {grand_total}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="dis-flex">
                      <Button
                        className="proceed-to-checkout"
                        onClick={() => handleCheckout()}
                      >
                        Proceed to Checkout
                      </Button>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        )}
      </div>
      <div className="dis-flex dis-none ">
        <img src="/empty-cart-no-empty.png" alt="Empty cart"></img>
        <h1>Cart is Empty</h1>
        <div>
          <Button
            onClick={() =>
              displayMessage('info', 'The message appears on the top.')
            }
            appearance="primary"
          >
            Push
          </Button>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Cart;
