import axios from 'axios';
import { Button } from 'rsuite';

const PaymentTest = () => {
  const initiatePayment = async () => {
    try {
      // Step 1: Get the order ID from your PHP backend
      const response = await axios.post(
        'http://127.0.0.1/testing/RazorPay/create_order.php',
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

  return (
    <div>
      <Button onClick={initiatePayment}>Pay Rs. 500</Button>
    </div>
  );
};

export default PaymentTest;
