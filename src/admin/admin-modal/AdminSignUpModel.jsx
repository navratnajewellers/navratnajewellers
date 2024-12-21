import { useRef, useState } from 'react';
import { Button, Form, Modal, Schema } from 'rsuite';
import { useServerLink } from '../../context/server.context';
import { useDisplayMessage } from '../../context/message.context';

// model schema to check required data to be fill in form
const { StringType } = Schema.Types;

const adminSignupModel = Schema.Model({
  name: StringType().isRequired('Name is required'),
  email: StringType()
    .isEmail('Enter a valid email')
    .isRequired('Email is required'),
  password: StringType()
    .minLength(6, 'Password should be atleast six character long')
    .isRequired('Password is required'),
  secretKey: StringType().isRequired('Key is required'),
});

const AdminSignUpModel = ({ isAdminSignUpOpen, setIsAdminSignUp }) => {
  const adminSignupRef = useRef();

  const { serverLink } = useServerLink();
  const { displayMessage } = useDisplayMessage();

  const [signupFormValue, setSignupFormValue] = useState({
    name: '',
    email: '',
    password: '',
    secretKey: '',
  });

  const handleAdminSignUpClose = () => {
    setIsAdminSignUp(false);
    setSignupFormValue({
      name: '',
      email: '',
      password: '',
      secretKey: '',
    });
  };

  const handleAdminSignup = async e => {
    if (adminSignupRef.current.check()) {
      e.preventDefault();

      try {
        const response = await fetch(
          `${serverLink}/testing/admin/admin_new_register.php`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              username: signupFormValue.name,
              password: signupFormValue.password,
              email: signupFormValue.email,
              secretKey: signupFormValue.secretKey,
              protectionId: 'Nav##$56',
            }),
          }
        );

        const data = await response.json();

        // console.log('sign up : -', data);

        if (
          data.error ===
          `SQLSTATE[23000]: Integrity constraint violation: 1062 Duplicate entry '${signupFormValue.email}' for key 'ad_email'`
        ) {
          displayMessage('error', 'Email already exists');
        }

        if (data.message) {
          displayMessage('info', data.message);
        }

        if (data.status === 'success') {
          handleAdminSignUpClose();
        }
      } catch (error) {
        displayMessage('error', 'An error occurred during signup.');
        console.log(error);
      }
    } else {
      displayMessage('warning', 'Fill all the required data');
    }
  };

  //   console.log(signupFormValue);

  return (
    <div>
      <Modal
        open={isAdminSignUpOpen}
        onClose={handleAdminSignUpClose}
        size="xs"
      >
        <Modal.Header className="modal-custom-header">
          <Modal.Title>Admin Registration</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form
            fluid
            onChange={setSignupFormValue}
            formValue={signupFormValue}
            model={adminSignupModel}
            ref={adminSignupRef}
          >
            <Form.Group controlId="name-9">
              <Form.ControlLabel>Username</Form.ControlLabel>
              <Form.Control name="name" />
              <Form.HelpText>Required</Form.HelpText>
            </Form.Group>
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
            <Form.Group controlId="secretKey-9">
              <Form.ControlLabel>Secret Key</Form.ControlLabel>
              <Form.Control
                name="secretKey"
                type="password"
                autoComplete="off"
              />
              <Form.HelpText>Required</Form.HelpText>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleAdminSignup} appearance="primary">
            Confirm
          </Button>
          <Button onClick={handleAdminSignUpClose} appearance="subtle">
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AdminSignUpModel;
