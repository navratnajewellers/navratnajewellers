import axios from 'axios';
import { useRef, useState } from 'react';
import { Button, Form, Modal, Schema } from 'rsuite';
import { useServerLink } from '../../context/server.context';
import { useDisplayMessage } from '../../context/message.context';
import { useAdminProfile } from '../../context/adminProfile.context';

// model schema to check required data to be fill in form
const { StringType } = Schema.Types;

const adminLoginModel = Schema.Model({
  email: StringType()
    .isEmail('Enter a valid email')
    .isRequired('Email is required'),
  password: StringType().isRequired('Password is required'),
});

const AdminLoginModal = ({ isLoginOpen, setIsLoginOpen }) => {
  const adminLoginRef = useRef();

  const { serverLink } = useServerLink();
  const { displayMessage } = useDisplayMessage();

  const { setAdminData } = useAdminProfile();

  const [loginFormValue, setLoginFormValue] = useState({
    email: '',
    password: '',
  });

  const handleAdminLogin = async e => {
    // check if all the login model schema is fulfilled or not
    if (adminLoginRef.current.check()) {
      // console.log('form values are correct');

      e.preventDefault();
      try {
        const response = await axios.post(
          `${serverLink}/testing/admin/admin_verify_email_login.php`,
          {
            email: loginFormValue.email,
            password: loginFormValue.password,
            protectionId: 'Nav##$56',
          }
        );

        displayMessage('info', response.data.message);

        //check database message for successful login

        if (response.data.message === 'Login successful') {
          //   console.log(response.data);

          setAdminData({
            id: response.data.id,
            username: response.data.username,
          });

          setIsLoginOpen(false);
        }
      } catch (error) {
        displayMessage('error', 'An error occurred during login.');
        console.log(error);
      }
    } else {
      displayMessage('warning', 'Fill all the required data');
    }
  };

  return (
    <div>
      <Modal
        open={isLoginOpen}
        onClose={() =>
          displayMessage('warning', 'Login required to access admin panel')
        }
        size="xs"
      >
        <Modal.Header className="modal-custom-header">
          <Modal.Title>Admin Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form
            fluid
            onChange={setLoginFormValue}
            formValue={loginFormValue}
            model={adminLoginModel}
            ref={adminLoginRef}
          >
            <Form.Group controlId="email-9">
              <Form.ControlLabel>Email</Form.ControlLabel>
              <Form.Control name="email" type="email" />
              <Form.HelpText>Required</Form.HelpText>
            </Form.Group>
            <Form.Group controlId="password-9">
              <Form.ControlLabel>Password</Form.ControlLabel>
              <Form.Control
                name="password"
                type="password"
                autoComplete="off"
              />
              <Form.HelpText>Required</Form.HelpText>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleAdminLogin} appearance="primary">
            Login
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AdminLoginModal;
