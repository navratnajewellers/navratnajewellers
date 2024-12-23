import { useEffect, useState } from 'react';
import { useAdminProfile } from '../context/adminProfile.context';
import { Button, ButtonToolbar } from 'rsuite';
import AdminSignUpModel from './admin-modal/AdminSignUpModel';
import AdminResetPasswordModal from './admin-modal/AdminResetPasswordModal';

const AdminDashboard = () => {
  const { adminData, setAdminData } = useAdminProfile();

  const [greetingMessage, setGreetingMessage] = useState('');
  const [isAdminSignUpOpen, setIsAdminSignUp] = useState(false);

  // reset password
  const [isPasswordOpen, setIsPasswordOpen] = useState(false);

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

  // handle logout of admin
  const handleAdminLogout = () => {
    window.location.replace('/');

    // reset the admin data
    setTimeout(() => {
      setAdminData({
        id: '',
        username: '',
      });
    }, 100);
  };

  return (
    <div className="padding-lr5 margin-t30">
      <div>
        <h2 className="user-greeting-message">
          {greetingMessage}, {adminData.username} !{' '}
        </h2>
      </div>
      <div className="margin-t20">
        <ButtonToolbar>
          <Button appearance="primary" onClick={() => setIsAdminSignUp(true)}>
            Create new Admin
          </Button>
          <Button appearance="primary" onClick={() => setIsPasswordOpen(true)}>
            Change Password
          </Button>
          <Button onClick={() => handleAdminLogout()}>Logout</Button>
        </ButtonToolbar>
      </div>
      <div>
        <AdminSignUpModel
          isAdminSignUpOpen={isAdminSignUpOpen}
          setIsAdminSignUp={setIsAdminSignUp}
        />
      </div>
      <div>
        <AdminResetPasswordModal
          isPasswordOpen={isPasswordOpen}
          setIsPasswordOpen={setIsPasswordOpen}
          adminData={adminData}
        />
      </div>
    </div>
  );
};

export default AdminDashboard;
