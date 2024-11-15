import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div>
      <h1>Contact Us</h1>
      <p>
        <Link to="/">Home</Link>
      </p>
      <p>
        <Link to="/gahvjhvas">unknown Page</Link>
      </p>
      <p>
        <Link to="/test-connection">Testing Page</Link>
      </p>
    </div>
  );
};

export default Contact;
