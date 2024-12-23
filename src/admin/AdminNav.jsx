import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Nav } from 'rsuite';

const AdminNav = () => {
  const [active, setActive] = useState('dashboard');

  // console.log('inside the nav dashboard');

  return (
    <div className="margin-b20">
      <h2 className="textCenter main-color margin-t20 margin-b30 ">
        Navratna Jewellers Admin Panel
      </h2>
      <div>
        <Nav appearance="tabs" activeKey={active} onSelect={setActive}>
          <Nav.Item eventKey="dashboard" as={Link} to="/nav-admin">
            Admin Dashboard
          </Nav.Item>
          <Nav.Item eventKey="change-rate" as={Link} to="/admin/change-rate">
            Change Rate
          </Nav.Item>
          <Nav.Item eventKey="order-details" as={Link} to="/admin/order-list">
            Order Details
          </Nav.Item>
          <Nav.Item
            eventKey="website-status"
            as={Link}
            to="/admin/website-status"
          >
            Website Status
          </Nav.Item>
        </Nav>
      </div>
    </div>
  );
};

export default AdminNav;
