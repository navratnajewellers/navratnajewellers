import { Outlet } from 'react-router-dom';
import AdminNav from './AdminNav';
import { useEffect, useState } from 'react';
import { useAdminProfile } from '../context/adminProfile.context';
import AdminLoginModal from './admin-modal/AdminLoginModal';
import { Loader } from 'rsuite';
import { Helmet } from 'react-helmet-async';

const AdminMainLayout = () => {
  // console.log('inside the main Layout');

  const { adminData } = useAdminProfile();

  const [isLoginOpen, setIsLoginOpen] = useState(false);

  useEffect(() => {
    if (!adminData.id) {
      setIsLoginOpen(true);
      // console.log('admin is not login');
    }
    //  else {
    //   console.log('admin is log in');
    // }

    return () => {};
  }, [adminData.id]);

  // console.log(adminData);

  return (
    <div>
      <Helmet>
        <title>Admin Panel</title>
      </Helmet>
      <div>
        {adminData.id ? (
          <div>
            <AdminNav />
            <Outlet />
          </div>
        ) : (
          <div className="height-width-full dis-flex">
            <Loader content="Loading..." vertical size="md" />
          </div>
        )}
      </div>
      <div>
        <AdminLoginModal
          isLoginOpen={isLoginOpen}
          setIsLoginOpen={setIsLoginOpen}
        />
      </div>
    </div>
  );
};

export default AdminMainLayout;
