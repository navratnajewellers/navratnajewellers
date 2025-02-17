import axios from 'axios';
import { useEffect, useState } from 'react';
import { useServerLink } from '../context/server.context';
import { Accordion, Button, Loader } from 'rsuite';
import AdminOrderGrid from './orderGrid/AdminOrderGrid';
import AdminUserAddressModel from './admin-modal/AdminUserAddressModel';

const addressDefault = {
  username: '',
  mobile: '',
  address1: '',
  address2: '',
  country: 'India',
  city: '',
  state: '',
  pincode: '',
  landmark: '',
};

const OrderListGrid = () => {
  const { serverLink } = useServerLink();
  const [isOrderLoading, setIsOrderLoading] = useState(true);

  // order details with order items too
  const [orderData, setOrderData] = useState(null);

  // to limit the result order list
  const [orderLimit, setOrderLimit] = useState(5);

  // user address modal in AdminOrderGrid
  const [userAddress, setUserAddress] = useState(addressDefault);
  const [isAddressModalOpen, setIsAddressModalOpen] = useState(false);

  useEffect(() => {
    const getOrderDetails = async () => {
      setIsOrderLoading(true);

      try {
        const response = await axios.post(
          `${serverLink}/testing/admin/order/get_order_details.php`,
          {
            protectionId: 'Nav##$56',
          }
        );

        // console.log(response.data);

        if (response.status === 200 && response.data.status == 'success') {
          setOrderData(response.data.record);

          setIsOrderLoading(false);
        }
      } catch (error) {
        console.log(error);
      }
    };

    getOrderDetails();
  }, [serverLink]);

  // set the limit of order
  const handleNoOfOrder = () => {
    setOrderLimit('all');
  };

  return (
    <div>
      {isOrderLoading ? (
        <div className="height-width-full dis-flex">
          <Loader content="Loading..." vertical size="md" />
        </div>
      ) : (
        <div className="padding-lr5">
          <div>
            <h3 className="textCenter margin-t30 margin-b50 main-color">
              Orders Details
            </h3>
          </div>
          <div>
            <h4
              className={`margin-b20 textCenter  ${orderLimit === 5 ? '' : 'dis-none'} `}
            >
              Last five order Details :
            </h4>

            {orderLimit !== 'all' ? (
              <Accordion defaultActiveKey={1} bordered>
                {orderData?.slice(0, 5).map(data => (
                  <AdminOrderGrid
                    key={data.order_id}
                    orderData={data}
                    setUserAddress={setUserAddress}
                    setIsAddressModalOpen={setIsAddressModalOpen}
                  />
                ))}
              </Accordion>
            ) : (
              <Accordion defaultActiveKey={1} bordered>
                {orderData?.map(data => (
                  <AdminOrderGrid
                    key={data.order_id}
                    orderData={data}
                    setUserAddress={setUserAddress}
                    setIsAddressModalOpen={setIsAddressModalOpen}
                  />
                ))}
              </Accordion>
            )}
          </div>
          <div
            className={`margin-t20 ${orderLimit !== 'all' ? '' : 'dis-none'}`}
          >
            <Button onClick={() => handleNoOfOrder()} appearance="primary">
              See all orders
            </Button>
          </div>
          <div>
            <AdminUserAddressModel
              userAddress={userAddress}
              isAddressModalOpen={isAddressModalOpen}
              setIsAddressModalOpen={setIsAddressModalOpen}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderListGrid;
