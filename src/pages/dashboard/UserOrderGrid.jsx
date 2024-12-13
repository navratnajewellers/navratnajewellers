import axios from 'axios';
import { useState } from 'react';
import { Accordion, Button, Placeholder, Text } from 'rsuite';
import OrderItemGrid from './OrderItemGrid';

const UserOrderGrid = ({ orderData }) => {
  // console.log(orderData);

  const [orderItemData, setOrderItemData] = useState(null);

  const [delivery_status, setDeliveryStatus] = useState(null);

  const handleOrder = event => {
    // console.log(event);

    const getOrderItemDetails = async () => {
      try {
        const response = await axios.post(
          'http://127.0.0.1/testing/dashboard/fetch_order_item.php',
          {
            orderId: event,
          }
        );

        // console.log(response.data);
        setOrderItemData(response.data.record);

        // setting delivery status to block cancel order button
        if (response.data.record) {
          setDeliveryStatus(response.data.record[0].delivery_status);
        }
      } catch (error) {
        console.log(error);
      }
    };

    getOrderItemDetails();
  };

  const handleCancelOrder = orderId => {
    // console.log(orderId);

    const getOrderItemDetails = async () => {
      try {
        const response = await axios.post(
          'http://127.0.0.1/testing/dashboard/cancel_order.php',
          {
            order_id: orderId,
            updated_status: 'order-cancel',
          }
        );

        // console.log(response.data);
        if (response.data.status == 'success') {
          setTimeout(() => {
            window.location.reload();
          }, 2000);
          // console.log(response.data.message);
        }
      } catch (error) {
        console.log(error);
      }
    };

    getOrderItemDetails();
  };

  // console.log(orderItemData);

  return (
    <div>
      <Accordion.Panel
        header={
          <div className="order-header-container">
            <div className="pos-rel">
              <div>Order-ID: {orderData.order_id}</div>
              <div className="order-date">
                <span className="order-date-heading">Date: </span>
                {orderData.order_date.slice(0, 10)}
              </div>
            </div>
            <Text>Total Price: {orderData.total_amount.slice(0, -3)} </Text>
          </div>
        }
        eventKey={orderData.order_id}
        onSelect={handleOrder}
        className="order-container"
      >
        {orderItemData ? (
          orderItemData.map(data => (
            <OrderItemGrid key={data.id} orderItemData={data} />
          ))
        ) : (
          <Placeholder.Paragraph />
        )}
        <div className={delivery_status == 'order-cancel' ? 'dis-none' : ''}>
          <Button onClick={() => handleCancelOrder(orderData.order_id)}>
            Cancel Order
          </Button>
        </div>
      </Accordion.Panel>
    </div>
  );
};

export default UserOrderGrid;
