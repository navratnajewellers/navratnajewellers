import { Button } from 'rsuite';

const TestConnection = () => {
  const handleClick = async () => {
    // fetch('http://127.0.0.1/testing/testing_login.php')
    //   .then(response => response.json())
    //   .then(body => console.log(body));

    const response = await fetch('http://127.0.0.1/testing/testing_login.php');

    const body = response.json();

    console.log(body);
  };

  return (
    <div>
      <h1>Testing Page</h1>
      <Button onClick={() => handleClick()}>Fetch data</Button>
    </div>
  );
};

export default TestConnection;
