import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Container } from 'rsuite';

const TestConnection = () => {
  const [customer, setCustomer] = useState(null);

  const handleClick = async () => {
    try {
      const response = await fetch(
        'http://127.0.0.1/testing/testing_login.php'
      );

      const body = await response.json();
      console.log(body);

      if (body.success === true) {
        setCustomer(body.record);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Testing Page</h1>
      <Button onClick={() => handleClick()}>Fetch data</Button>
      <Container>
        <ul>
          {customer && customer.map(data => <li key={data.id}>{data.name}</li>)}
        </ul>
      </Container>
      <Container>
        <Link to="/test-connection/test-login">Test Login</Link>
        <Link to="/test-connection/verify-login">Verify Login</Link>
      </Container>
    </div>
  );
};

export default TestConnection;
