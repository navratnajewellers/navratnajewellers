import axios from 'axios';
import { createContext, useContext, useEffect, useState } from 'react';

const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
  // const [profile, setProfile] = useState(false);
  const [userData, setUserData] = useState({
    id: '',
    username: '',
    sessionId: '',
  });

  useEffect(() => {
    const sessionId = sessionStorage.getItem('sessionId');

    if (sessionId == null || sessionId === '') {
      // console.log('session id is empty');
    } else {
      // verify the session id with database session id

      const updateUserData = async () => {
        try {
          const response = await axios.post(
            'http://127.0.0.1/testing/verify_session.php',
            {
              sessionId: sessionId,
            }
          );

          // console.log(response.data.message);
          // console.log(response.data);

          setUserData({
            id: response.data.id,
            username: response.data.username,
            sessionId: response.data.sessionId,
          });
        } catch (error) {
          console.log(error);
        }
      };

      updateUserData();

      // console.log('session id is not empty');
    }
  }, []);

  return (
    <ProfileContext.Provider value={{ userData, setUserData }}>
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfile = () => useContext(ProfileContext);
