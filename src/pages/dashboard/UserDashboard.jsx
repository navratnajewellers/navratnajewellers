import { Breadcrumb, Loader } from 'rsuite';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useProfile } from '../../context/profile.context';

const UserDashboard = () => {
  const { userData } = useProfile();

  const [isDashboardLoading, setIsDashboardLoading] = useState(true);
  const [isUserLogin, setIsUserLogin] = useState(false);

  const [greetingMessage, setGreetingMessage] = useState('');

  useEffect(() => {
    if (userData.id) {
      setIsUserLogin(true);
      setIsDashboardLoading(false);
    } else {
      setIsUserLogin(false);
      setIsDashboardLoading(false);
    }

    // checking the date and time
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
  }, [userData.id]);

  // console.log(userData);

  return (
    <div>
      <div className="header-container margin-t10">
        <Header />
      </div>
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
          <div>
            <div>
              <h2>
                {greetingMessage}, {userData.username} !{' '}
              </h2>
            </div>
            <div>
              <div>
                <h4>Your Orders</h4>
              </div>
            </div>
          </div>
        ) : (
          <div className="loader-default-container dis-flex">
            <h3 style={{ fontFamily: 'cursive' }}>
              Login to see your Dashboard
            </h3>
            <div className="dis-none">
              {setTimeout(() => {
                window.location.replace(`/`);
              }, 4000)}
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
