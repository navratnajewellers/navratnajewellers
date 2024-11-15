import { Button } from 'rsuite';

const TestConnection = () => {
  const handleClick = () => {
    fetch('http://127.0.0.1/testing/testing_login.php')
      .then(response => response.json())
      .then(body => console.log(body));
  };

  return (
    <div>
      <h1>Testing Page</h1>
      <Button onClick={() => handleClick()}>Fetch data</Button>
    </div>
  );
};

export default TestConnection;
