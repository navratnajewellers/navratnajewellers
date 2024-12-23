import axios from 'axios';
import { useState } from 'react';
import {
  Accordion,
  Button,
  Loader,
  Placeholder,
  Tag,
  TagGroup,
  Text,
} from 'rsuite';
import { useServerLink } from '../../context/server.context';
import OrderItemGrid from '../../pages/dashboard/OrderItemGrid';
// import AdminUserAddressModel from '../admin-modal/AdminUserAddressModel';

// const addressDefault = {
//   username: '',
//   mobile: '',
//   address1: '',
//   address2: '',
//   country: 'India',
//   city: '',
//   state: '',
//   pincode: '',
//   landmark: '',
// };

const AdminOrderGrid = ({
  orderData,
  setUserAddress,
  setIsAddressModalOpen,
}) => {
  // console.log(orderData);

  const { serverLink } = useServerLink();

  const [orderItemData, setOrderItemData] = useState(null);

  const [delivery_status, setDeliveryStatus] = useState(null);

  const [userDetails, setUserDetails] = useState({
    username: '',
    email: '',
  });

  const [isUserLoading, setIsUserLoading] = useState(true);

  // const [userAddress, setUserAddress] = useState(addressDefault);
  // const [isAddressModalOpen, setIsAddressModalOpen] = useState(false);

  const handleOrder = event => {
    // console.log(event);

    const getOrderItemDetails = async () => {
      try {
        setDeliveryStatus(null);

        const response = await axios.post(
          `${serverLink}/testing/dashboard/fetch_order_item.php`,
          {
            orderId: event,
            protectionId: 'Nav##$56',
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

    // console.log({ delivery_status: delivery_status });

    const getUserDetails = async () => {
      setIsUserLoading(true);

      try {
        const response = await axios.post(
          `${serverLink}/testing/admin/order/get_user.php`,
          {
            orderId: event,
            protectionId: 'Nav##$56',
          }
        );

        // console.log(response.data);

        // setting delivery status to block cancel order button
        if (response.data.status === 'success') {
          setUserDetails({
            username: response.data.username,
            email: response.data.email,
          });

          // setting the user address for viewing
          setUserAddress(val => ({
            ...val,
            username: response.data.username,
            mobile: response.data.userAddress.phone_number,
            address1: response.data.userAddress.address_line_1,
            address2: response.data.userAddress.address_line_2,
            country: response.data.userAddress.country,
            city: response.data.userAddress.city,
            state: response.data.userAddress.state,
            pincode: response.data.userAddress.postal_code,
          }));

          setIsUserLoading(false);
        }
      } catch (error) {
        console.log(error);
      }
    };

    getUserDetails();
  };

  const handleCancelOrder = orderId => {
    // console.log(orderId);

    const getOrderItemDetails = async () => {
      try {
        const response = await axios.post(
          `${serverLink}/testing/dashboard/cancel_order.php`,
          {
            order_id: orderId,
            updated_status: 'order-cancel',
            protectionId: 'Nav##$56',
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
  // console.log(userAddress);

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
            <Text>Payment Status: {orderData.status} </Text>
          </div>
        }
        eventKey={orderData.order_id}
        onSelect={handleOrder}
        className="order-container"
      >
        {isUserLoading ? (
          <div>
            <Loader center content="Loading..." />
          </div>
        ) : (
          <div className="margin-t10 margin-b20">
            <TagGroup>
              <Tag size="lg" color="blue">
                <span>
                  Customer Name: <strong> {userDetails.username} </strong>
                </span>
              </Tag>
              <Tag size="lg" color="blue">
                <span>
                  Customer Email: <strong>{userDetails.email}</strong>{' '}
                </span>
              </Tag>
            </TagGroup>
            <div className="margin-t20">
              <Button
                appearance="primary"
                onClick={() => setIsAddressModalOpen(true)}
              >
                View User Address
              </Button>
            </div>
          </div>
        )}
        {orderItemData ? (
          orderItemData.map(data => (
            <OrderItemGrid key={data.id} orderItemData={data} />
          ))
        ) : (
          <Placeholder.Paragraph
            graph="square"
            active
            className="margin-t10 margin-b20 padding-lr5 "
            rows={5}
          />
        )}
        <div
          className={
            delivery_status === 'order-cancel' || delivery_status == null
              ? 'dis-none'
              : ''
          }
        >
          <Button onClick={() => handleCancelOrder(orderData.order_id)}>
            Cancel Order
          </Button>
        </div>
      </Accordion.Panel>
      {/* <AdminUserAddressModel
        userAddress={userAddress}
        isAddressModalOpen={isAddressModalOpen}
        setIsAddressModalOpen={setIsAddressModalOpen}
      /> */}
    </div>
  );
};

export default AdminOrderGrid;
