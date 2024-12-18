import {
  Affix,
  Breadcrumb,
  Button,
  Col,
  Container,
  Divider,
  Loader,
  Message,
  Modal,
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
import AddressModal from './cart/AddressModal';
import { useServerLink } from '../context/server.context';

const YOUR_RAZORPAY_KEY_ID = null;

const addresDefault = {
  status: 'notFound',
  mobile: '',
  address1: '',
  address2: '',
  country: 'India',
  city: '',
  state: '',
  pincode: '',
  landmark: '',
};

const Cart = () => {
  const toaster = useToaster();

  const { serverLink } = useServerLink();

  // for checking that user is login
  const { userData } = useProfile();
  const [isPriceLoading, setIsPriceLoading] = useState(true);
  const [isCartLoading, setIsCartLoading] = useState(true);

  const [priceData, setPriceData] = useState(null);
  const [cartProduct, setCartProduct] = useState(null);

  // to be set by the CartItemGrid
  const [grand_total, setGrand_total] = useState(0);

  // check address
  const [address, setAddress] = useState(addresDefault);

  const [isAddressLoading, setIsAddressLoading] = useState(true);
  const [isAddressModalOpen, setIsAddressModal] = useState(false);

  const [userEmail, setUserEmail] = useState(null);

  const [isPaymentOptionOpen, setIsPaymentOptionOpen] = useState(false);

  const [isPaymentLoading, setIsPaymentLoading] = useState(false);

  // const navigate = useNavigate();

  // to display message
  const displayMessage = (type = 'info', message, duration = 2000) => {
    toaster.push(
      <Message showIcon type={type} closable>
        <strong>{message}</strong>
      </Message>,
      { placement: 'topCenter', duration: duration }
    );
  };

  useEffect(() => {
    // load razorpay payment script on cart page load
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    document.body.appendChild(script);

    // console.log(userData);

    // getting the price of gold
    const getGoldPrice = async () => {
      setIsPriceLoading(true);

      try {
        const response = await axios.get(
          `${serverLink}/testing/test/gold_rate.php`
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
            `${serverLink}/testing/cart/fetch_original_cart.php`,
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

      // checking the status of the login user address
      const checkAddressStatus = async () => {
        setIsAddressLoading(true);
        try {
          const response = await axios.post(
            `${serverLink}/testing/addresses/fetch_address.php`,
            {
              userId: userData.id,
            }
          );

          if (response.status === 200) {
            // console.log(response);
            // console.log(response.data);

            if (response.data.status === 'notFound') {
              setAddress(val => ({
                ...val,
                status: response.data.status,
              }));
            } else if (response.data.status === 'found') {
              setAddress(val => ({
                ...val,
                status: response.data.status,
                mobile: response.data.mobile,
                address1: response.data.address1,
                address2: response.data.address2,
                country: response.data.country,
                city: response.data.city,
                state: response.data.state,
                pincode: response.data.pincode,
              }));

              setUserEmail(response.data.email);
            }

            setIsAddressLoading(false);
          }
        } catch (error) {
          console.log(error);
        }
      };

      checkAddressStatus();
    } else {
      // console.log(' user data is empty and user is not login');

      const fetchLocalCartData = async () => {
        setIsCartLoading(true);

        try {
          const hashedLocalUserId = JSON.parse(
            localStorage.getItem('localCart')
          );

          const response = await axios.post(
            `${serverLink}/testing/cart/fetch_local_cart.php`,
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

    return () => {
      // resetting the default value of address on returning of useEffect
      setAddress(addresDefault);

      // remove the razorpay payment script on leaving cart page
      document.body.removeChild(script);
    };
  }, [userData, serverLink]);

  // console.log({
  //   isPriceLoading: isPriceLoading,
  //   isCartLoading: isCartLoading,
  //   priceData: priceData,
  //   cartProduct: cartProduct,
  // });

  // moving the cart item to order_item
  const handleMoveCartToOrder = async (status, orderId) => {
    try {
      const response = await axios.post(
        `${serverLink}/testing/payment-update/update_order_items.php`,
        {
          status: status,
          user_id: userData.id,
          orderId: orderId,
          goldPrice: priceData.price_1_gram_24K,
          silverPrice: priceData.price_1_gram_24K_s,
        }
      );

      // console.log(response);
      // console.log(response.data);

      if (
        response.status === 200 &&
        response.data.message == 'Order has been placed successfuly'
      ) {
        // console.log(response.data.message);
        // window.location.href = '/';

        displayMessage('success', 'Your order is placed successfully', 2000);

        setTimeout(() => {
          setIsPaymentLoading(false);
          window.location.href = '/';
        }, 2000);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Payment logic
  // updated code

  const handlePayment = async () => {
    // checking the razorpay key before starting payment process
    if (YOUR_RAZORPAY_KEY_ID == null) {
      displayMessage('info', 'Set the razor key to continue', 3000);
      return;
    }

    try {
      // Step 1: Fetch Order ID from the backend
      const response = await axios.post(
        `${serverLink}/testing/RazorPay/updated_create_order.php`,
        {
          amount: grand_total * 100,
          user_id: userData.id,
        }
      );

      // console.log(response.data);

      if (!response.data.order_id) {
        throw new Error('Failed to create order!');
      }

      // key: 'YOUR_RAZORPAY_KEY_ID'
      // Step 2: Initialize Razorpay
      const options = {
        key: YOUR_RAZORPAY_KEY_ID, // Replace with your Razorpay Key ID
        amount: response.data.amount,
        currency: 'INR',
        name: 'Navratna Jewellers',
        description: 'Test Transaction',
        order_id: response.data.order_id, // Pass order_id from backend
        handler: async function (response) {
          // console.log(response);

          // Step 4: Verify payment
          // send order_id, payment_id, and signature for verification of payment
          const verification = await axios.post(
            `${serverLink}/testing/RazorPay/verify_payment.php`,
            {
              ...response,
            }
          );
          // console.log(verification.data);

          if (verification.data.status === 'success') {
            handleMoveCartToOrder(
              verification.data.status,
              verification.data.orderId
            );
          }

          // console.log("Payment verification:", verification.data);
        },
        prefill: {
          name: userData.username,
          email: userEmail,
          contact: address.mobile,
        },
        notes: {
          address: 'Razorpay Corporate Office',
        },
        theme: {
          color: '#3399cc',
        },
        modal: {
          ondismiss: async function () {
            //payment cancel logic here
            // console.log('Payment has been canceled by user');

            try {
              const paymentCancel = await axios.post(
                `${serverLink}/testing/payment-update/delete-order1.php`,
                {
                  orderId: response.data.order_id,
                }
              );
              // console.log(paymentCancel.data);

              if (paymentCancel.data.status === 'success') {
                displayMessage('info', 'Order has been canceled');
                setIsPaymentLoading(false);
              }
            } catch (error) {
              console.log(error);
            }

            // setIsPaymentLoading(false);
          },
        },
      };

      // previous prefill
      // prefill: {
      //   name: 'John Doe',
      //   email: 'johndoe@example.com',
      //   contact: '9999999999',
      // },

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error) {
      console.error('Payment initiation failed:', error);
    }
  };

  // handle cash on delivery payment

  const handleCashOnDelivery = async () => {
    try {
      // Step 1: Fetch Order ID from the backend
      const response = await axios.post(
        `${serverLink}/testing/RazorPay/updated_create_order.php`,
        {
          amount: grand_total * 100,
          user_id: userData.id,
        }
      );

      console.log(response.data);

      if (!response.data.order_id) {
        throw new Error('Failed to create order!');
      } else {
        handleMoveCartToOrder('COD', response.data.order_id);
      }
    } catch (error) {
      console.error('Payment initiation failed:', error);
    }
  };

  const handleCheckout = () => {
    // console.log({
    //   username: userData.username,
    //   userMobile: address.mobile,
    //   userEmailId: userEmail,
    // });

    if (userData.id) {
      // displayMessage('info', 'payment step is on the way');

      //handlePayment();

      // checking the address status
      if (!isAddressLoading && address.status === 'found') {
        // displayMessage('info', 'Address is fill already proceed with payment');
        // console.log(address);

        setIsPaymentOptionOpen(true);

        // payment logic is handle by payment option modal (note: important)

        // handlePayment();
      } else if (!isAddressLoading && address.status === 'notFound') {
        displayMessage('info', 'Addrees need to fill first');
        // console.log(address);

        setIsAddressModal(true);
      }
    } else {
      displayMessage(
        'error',
        'you need to login first before payemnt process',
        4000
      );

      // navigate('/');
      setTimeout(() => {
        window.location.href = '/';
      }, 4000);
    }
  };

  // payment option modal

  const handlePaymentOptionClose = () => {
    setIsPaymentOptionOpen(false);
  };

  // Call for online payment logic
  const handleOnlinePayment = () => {
    handlePayment();

    handlePaymentOptionClose();
    setIsPaymentLoading(true);
  };

  // Call for cash on delivery payment logic
  const handleCodPayment = () => {
    handleCashOnDelivery();

    handlePaymentOptionClose();
    setIsPaymentLoading(true);
  };

  return (
    <div>
      <Affix className="fixed-header">
        <div className="header-container margin-t10">
          <Header />
        </div>
      </Affix>
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
                  <Divider
                    className={grand_total === 0 ? 'dis-none-imp' : ''}
                  />
                </Col>
                <Col
                  xs={24}
                  sm={24}
                  md={8}
                  lg={8}
                  className="order-summery-container"
                >
                  <div
                    className={`order-summary ${grand_total === 0 ? 'dis-none' : ''}`}
                  >
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
                        disabled={grand_total === 0 ? true : false}
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
      <div>
        <Footer />
      </div>
      <div>
        <AddressModal
          isAddressModalOpen={isAddressModalOpen}
          setIsAddressModal={setIsAddressModal}
          address={address}
          setAddress={setAddress}
          userData={userData}
          displayMessage={displayMessage}
        />
      </div>
      <div>
        <Modal
          backdrop="static"
          role="alertdialog"
          open={isPaymentOptionOpen}
          onClose={handlePaymentOptionClose}
          size="xs"
          className="payment-option-modal"
        >
          <Modal.Header>
            <Modal.Title>Choose payment option!</Modal.Title>
          </Modal.Header>
          <Modal.Body></Modal.Body>
          <Modal.Footer>
            <Button onClick={handleOnlinePayment} appearance="primary">
              Pay Online
            </Button>
            <Button onClick={handleCodPayment} appearance="subtle">
              Cash on Delivery
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
      <div>
        <Modal backdrop="false" size="full" open={isPaymentLoading}>
          <Modal.Body>
            <div className="height-width-100 dis-flex">
              <Loader content="Loading..." vertical />
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
};

export default Cart;
