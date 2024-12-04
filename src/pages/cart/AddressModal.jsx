import { useState } from 'react';
import { Button, Form, Modal } from 'rsuite';

const AddressModal = () => {
  const [isAddressModalOpen, setIsAddressModal] = useState(false);

  const [address, setAddress] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleSignUpClose = () => {
    setIsAddressModal(false);
  };

  const handleSignUp = () => {
    setIsAddressModal(false);
  };

  const handleModal = () => {
    setIsAddressModal(true);
  };

  console.log(address);

  return (
    <div>
      <Modal open={isAddressModalOpen} onClose={handleSignUpClose} size="xs">
        <Modal.Header className="modal-custom-header">
          <Modal.Title>New User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form fluid onChange={setAddress} formValue={address}>
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
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleSignUp} appearance="primary">
            Confirm
          </Button>
          <Button onClick={handleSignUpClose} appearance="subtle">
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
      <Button onClick={handleModal}>Open Modal</Button>
    </div>
  );
};

export default AddressModal;
