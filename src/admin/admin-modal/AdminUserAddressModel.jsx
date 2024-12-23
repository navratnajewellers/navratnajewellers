import { Button, Form, Modal } from 'rsuite';

const AdminUserAddressModel = ({
  userAddress,
  isAddressModalOpen,
  setIsAddressModalOpen,
}) => {
  const handleAddressModelClose = () => {
    // console.log('address model close');
    setIsAddressModalOpen(false);
  };

  return (
    <div>
      <div>
        <Modal
          open={isAddressModalOpen}
          onClose={handleAddressModelClose}
          size="xs"
        >
          <Modal.Header className="modal-custom-header">
            <Modal.Title>{userAddress.username}&apos;s Address</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form formValue={userAddress} disabled>
              <Form.Group controlId="mobile-9">
                <Form.ControlLabel>Mobile Number</Form.ControlLabel>
                <Form.Control name="mobile" type="number" />
              </Form.Group>
              <Form.Group controlId="address1-9">
                <Form.ControlLabel>Addrees Line 1</Form.ControlLabel>
                <Form.Control name="address1" />
              </Form.Group>
              <Form.Group controlId="address2-9">
                <Form.ControlLabel>Addrees Line 2</Form.ControlLabel>
                <Form.Control name="address2" />
              </Form.Group>
              <Form.Group controlId="country-9">
                <Form.ControlLabel>Country</Form.ControlLabel>
                <Form.Control name="country" />
              </Form.Group>
              <Form.Group controlId="city-9">
                <Form.ControlLabel>City</Form.ControlLabel>
                <Form.Control name="city" />
              </Form.Group>
              <Form.Group controlId="state-9">
                <Form.ControlLabel>State</Form.ControlLabel>
                <Form.Control name="state" />
              </Form.Group>
              <Form.Group controlId="pincode-9">
                <Form.ControlLabel>Postal Code</Form.ControlLabel>
                <Form.Control name="pincode" type="number" />
              </Form.Group>
              <Form.Group controlId="landmark-9">
                <Form.ControlLabel>Landmark</Form.ControlLabel>
                <Form.Control name="landmark" />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={handleAddressModelClose} appearance="subtle">
              Cancel
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default AdminUserAddressModel;
