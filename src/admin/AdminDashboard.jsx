import { useEffect, useState } from 'react';
import { useAdminProfile } from '../context/adminProfile.context';
import { Button } from 'rsuite';
import AdminSignUpModel from './admin-modal/AdminSignUpModel';

const AdminDashboard = () => {
  const { adminData } = useAdminProfile();

  const [greetingMessage, setGreetingMessage] = useState('');
  const [isAdminSignUpOpen, setIsAdminSignUp] = useState(false);

  useEffect(() => {
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
  }, []);

  return (
    <div className="padding-lr5 margin-t30">
      <div>
        <h2 className="user-greeting-message">
          {greetingMessage}, {adminData.username} !{' '}
        </h2>
      </div>
      <div className="margin-t20">
        <Button appearance="primary" onClick={() => setIsAdminSignUp(true)}>
          Create new Admin
        </Button>
      </div>
      <div>
        <AdminSignUpModel
          isAdminSignUpOpen={isAdminSignUpOpen}
          setIsAdminSignUp={setIsAdminSignUp}
        />
      </div>
    </div>
  );
};

export default AdminDashboard;
