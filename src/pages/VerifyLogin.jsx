import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useServerLink } from '../context/server.context';

const VerifyLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const { serverLink } = useServerLink();

  const handleLogin = async e => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${serverLink}/testing/verify_login.php`,
        {
          username,
          password,
        }
      );
      setMessage(response.data.message);
    } catch (error) {
      setMessage('An error occurred during login.');
      console.log(error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={e => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      {message && (
        <p>
          {message} <Link to="/">Home Page</Link>
        </p>
      )}
    </div>
  );
};

export default VerifyLogin;
