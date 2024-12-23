import { useRef, useState } from 'react';
import { Button, Form, Modal, Schema } from 'rsuite';
import { useDisplayMessage } from '../../context/message.context';
import axios from 'axios';
import { useServerLink } from '../../context/server.context';

const { StringType } = Schema.Types;

const passwordModel = Schema.Model({
  password: StringType()
    .minLength(6, 'Password should be six character long')
    .isRequired('Password is required'),
  rePassword: StringType()
    .minLength(6, 'Password should be six character long')
    .isRequired('Password is required'),
});

const AdminResetPasswordModal = ({
  isPasswordOpen,
  setIsPasswordOpen,
  adminData,
}) => {
  const { serverLink } = useServerLink();
  const { displayMessage } = useDisplayMessage();

  const adminPasswordRef = useRef();

  const [passwordFormValue, setPasswordFormValue] = useState({
    password: '',
    rePassword: '',
  });

  // password logic here start
  const handlePasswordModelClose = () => {
    //reset the password form value
    setPasswordFormValue(val => ({
      ...val,
      password: '',
      rePassword: '',
    }));

    // close the password model
    setIsPasswordOpen(false);
  };

  // change password
  const handlePassword = () => {
    if (adminPasswordRef.current.check()) {
      // console.log(passwordFormValue);

      if (passwordFormValue.password === passwordFormValue.rePassword) {
        // console.log('you can change password');

        const changePassword = async () => {
          try {
            const response = await axios.post(
              `${serverLink}/testing/admin/change_admin_password.php`,
              {
                adminId: adminData.id,
                password: passwordFormValue.password,
                protectionId: 'Nav##$56',
              }
            );

            console.log(response.data);
            if (response.data.status == true) {
              displayMessage(
                'success',
                'Password has been changed successfully',
                2000
              );

              handlePasswordModelClose();
            }
          } catch (error) {
            console.log(error);
          }
        };

        changePassword();
      } else {
        // console.log('Password and Rewrite password must be same');
        displayMessage('warning', 'Password and Rewrite password must be same');
      }
    } else {
      displayMessage('warning', 'Fill all the required fields');
    }
  };

  // console.log(adminData);

  return (
    <div>
      <div>
        <Modal
          open={isPasswordOpen}
          onClose={handlePasswordModelClose}
          size="xs"
        >
          <Modal.Header className="modal-custom-header">
            <Modal.Title>Set New Password</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form
              fluid
              onChange={setPasswordFormValue}
              formValue={passwordFormValue}
              model={passwordModel}
              ref={adminPasswordRef}
            >
              <Form.Group controlId="password-9">
                <Form.ControlLabel>Password</Form.ControlLabel>
                <Form.Control
                  name="password"
                  type="password"
                  autoComplete="off"
                />
                <Form.HelpText>Required</Form.HelpText>
              </Form.Group>
              <Form.Group controlId="rePassword-9">
                <Form.ControlLabel>Rewrite Password</Form.ControlLabel>
                <Form.Control
                  name="rePassword"
                  type="password"
                  autoComplete="off"
                />
                <Form.HelpText>Required</Form.HelpText>
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={handlePassword} appearance="primary">
              Confirm
            </Button>
            <Button onClick={handlePasswordModelClose} appearance="subtle">
              Cancel
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default AdminResetPasswordModal;
