import { Accordion, Affix, Breadcrumb, Loader } from 'rsuite';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useProfile } from '../../context/profile.context';
import axios from 'axios';
import UserOrderGrid from './UserOrderGrid';
import { useServerLink } from '../../context/server.context';

const UserDashboard = () => {
  const { userData } = useProfile();

  const { serverLink } = useServerLink();

  const [isDashboardLoading, setIsDashboardLoading] = useState(true);
  const [isUserLogin, setIsUserLogin] = useState(false);

  const [greetingMessage, setGreetingMessage] = useState('');

  // order details with order items too
  const [orderData, setOrderData] = useState(null);

  useEffect(() => {
    if (userData.id) {
      setIsUserLogin(true);
      setIsDashboardLoading(false);
    } else {
      setIsUserLogin(false);
      setIsDashboardLoading(false);
    }

    // checking the date and time
    const getGreetingMessage = () => {
      const todayDate = new Date();

      if (todayDate.getHours() < 12) {
        setGreetingMessage('Good Morning');
      } else if (todayDate.getHours() >= 12 && todayDate.getHours() < 16) {
        setGreetingMessage('Good Afternoon');
      } else if (todayDate.getHours() >= 16 && todayDate.getHours() <= 23) {
        setGreetingMessage('Good Evening');
      } else {
        setGreetingMessage('Good Night');
      }
    };

    getGreetingMessage();

    if (userData.id) {
      const getOrderDetails = async () => {
        try {
          const response = await axios.post(
            `${serverLink}/testing/dashboard/fetch_order.php`,
            {
              userId: userData.id,
            }
          );

          // console.log(response.data);
          setOrderData(response.data.record);
        } catch (error) {
          console.log(error);
        }
      };

      getOrderDetails();
    }
  }, [userData.id, serverLink]);

  const handleReference = () => {
    // window.location.replace(`/`);
    setTimeout(() => {
      // console.log('user is ' + userData.id);

      if (!userData.id) {
        setTimeout(() => {
          //window.location.replace(`/`);
        }, 4000);
      }
    }, 4000);
  };

  // console.log(userData);;
  // console.log(orderData);
  // console.log(userData.id);

  return (
    <div>
      <Affix className="fixed-header">
        <div className="header-container margin-t10">
          <Header />
        </div>
      </Affix>
      <div className="breadcrumb-container">
        <Breadcrumb>
          <Breadcrumb.Item>
            <Link to="/">Home</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item active>Dashboard</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div>
        {isDashboardLoading ? (
          <div className="loader-default-container dis-flex">
            <Loader content="Loading..." vertical />
          </div>
        ) : isUserLogin ? (
          <div className="dashboard-container">
            <div>
              <h2 className="user-greeting-message">
                {greetingMessage}, {userData.username} !{' '}
              </h2>
            </div>
            <div>
              <div>
                <h4 className="textCenter margin-t30 margin-b50 main-color">
                  Your Orders
                </h4>
              </div>
              <div>
                <Accordion defaultActiveKey={1} bordered>
                  {orderData?.toReversed().map(data => (
                    <UserOrderGrid key={data.order_id} orderData={data} />
                  ))}
                </Accordion>
              </div>
            </div>
          </div>
        ) : (
          <div className="loader-default-container dis-flex">
            <h3 style={{ fontFamily: 'cursive' }}>
              Login to see your Dashboard
            </h3>
            <div className="dis-none">
              {!userData.id ? handleReference() : ''}
            </div>
          </div>
        )}
      </div>
      <div className="margin-t50">
        <Footer />
      </div>
    </div>
  );
};

export default UserDashboard;
