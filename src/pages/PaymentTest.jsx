import axios from 'axios';
import { Button, ButtonToolbar, Container, Form, Row, Schema } from 'rsuite';
import AddressModal from './cart/AddressModal';
import { useServerLink } from '../context/server.context';

const PaymentTest = () => {
  const { serverLink } = useServerLink();

  const initiatePayment = async () => {
    try {
      // Step 1: Get the order ID from your PHP backend
      const response = await axios.post(
        `${serverLink}/testing/RazorPay/create_order.php`,
        {
          amount: 50000,
        }
      );

      console.log(response);
      console.log(response.data);

      // Step 2: Open Razorpay payment dialog
      const options = {
        key: 'rzp_test_lMFRdd0BJJlHeu', // Replace with your Key ID
        amount: 50000, // Amount in paise
        currency: 'INR',
        name: 'Your Company Name',
        description: 'Test Transaction',
        order_id: response.data.order_id,
        handler: function (response) {
          // Step 3: Handle payment success
          alert(
            `Payment Successful! Payment ID: ${response.razorpay_payment_id}`
          );
        },
        prefill: {
          name: 'Your Customer Name',
          email: 'customer@example.com',
          contact: '9999999999',
        },
        theme: {
          color: '#3399cc',
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error('Payment initiation failed:', error);
    }
  };

  const handleMoveCartToOrder = async (status, orderId, price, user_id) => {
    try {
      const response = await axios.post(
        `${serverLink}/testing/payment-update/update_order_items.php`,
        {
          status: status,
          user_id: user_id,
          orderId: orderId,
          goldPrice: price,
        }
      );

      console.log(response);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handlegetAddress = async userId => {
    try {
      const response = await axios.post(
        `${serverLink}/testing/addresses/fetch_address.php`,
        {
          userId: userId,
        }
      );

      console.log(response);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // modal functions
  const { StringType } = Schema.Types;
  const model = Schema.Model({
    name: StringType().isRequired('This field is required.'),
    email: StringType()
      .isEmail('Please enter a valid email address.')
      .isRequired('This field is required.'),
  });

  return (
    <div>
      <Button onClick={initiatePayment}>Pay Rs. 500</Button>
      <Button
        onClick={() =>
          handleMoveCartToOrder('success', 'order_PT1EW5TFPf0IRA', 7898, 4)
        }
      >
        Move from cart to Order item
      </Button>
      <Button onClick={() => handlegetAddress(5)}>Get Address</Button>
      <Container>
        <Row>
          <Form model={model}>
            <Form.Group controlId="name">
              <Form.ControlLabel>Username</Form.ControlLabel>
              <Form.Control name="name" />
            </Form.Group>
            <Form.Group controlId="email">
              <Form.ControlLabel>Email</Form.ControlLabel>
              <Form.Control name="email" />
            </Form.Group>

            <ButtonToolbar>
              <Button appearance="primary" type="submit">
                Submit
              </Button>
            </ButtonToolbar>
          </Form>
        </Row>
        <Row>
          <AddressModal />
        </Row>
      </Container>
    </div>
  );
};

export default PaymentTest;
