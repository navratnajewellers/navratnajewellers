import {
  Breadcrumb,
  Button,
  Col,
  Container,
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
import CartItem from './cart/CartItem';

const Cart = () => {
  const toaster = useToaster();

  // for checking that user is login
  const { userData } = useProfile();
  const [isLoading, setIsLoading] = useState(false);
  const [priceData, setPriceData] = useState(null);

  // to be deleted
  const [isUIUpadting] = useState(true);

  // to display message
  const displayMessage = (type, message) => {
    toaster.push(
      <Message showIcon type={type} closable>
        <strong>{message}</strong>
      </Message>,
      { placement: 'topCenter', duration: 2000 }
    );
  };

  useEffect(() => {
    console.log(userData);

    // getting the price of gold
    const getGoldPrice = async () => {
      setIsLoading(true);

      try {
        const response = await axios.get(
          'http://127.0.0.1/testing/test/gold_rate.php'
        );

        // console.log(response.data);
        setPriceData(response.data.record);

        if (response.status === 200) {
          setIsLoading(false);
          console.log('price data is loaded');
        }
      } catch (error) {
        console.log(error);
      }
    };

    // getGoldPrice();

    //check if user is login or not
    if (userData.id) {
      console.log('user is login');

      const fetchCartData = async () => {
        setIsLoading(true);

        try {
          const response = await axios.post(
            'http://127.0.0.1/testing/cart/fetch_original_cart.php',
            {
              userId: userData.id,
            }
          );

          // console.log(response.data.message);
          console.log(response.data);

          setIsLoading(false);
        } catch (error) {
          console.log(error);
        }
      };

      // fetchCartData();

      //only for the updating of UI, so diable the error
      if (!isUIUpadting) {
        getGoldPrice();
        fetchCartData();
        console.log({ isLoading: isLoading, priceData: priceData });
      }
    } else {
      console.log(' user data is empty and user is not login');
    }
  }, [userData]);

  //console.log({ isLoading: isLoading, priceData: priceData });

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
                <CartItem />
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
                    <h4>ORDER SUMMARY</h4>
                  </div>
                  <div>
                    <table className="table table-borderless order-summary-table">
                      <tbody>
                        <tr>
                          <td>Sub Total</td>
                          <td>₹ 26103</td>
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
                          <td>₹ 26103</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="dis-flex">
                    <Button>Proceed to Checkout</Button>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
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
