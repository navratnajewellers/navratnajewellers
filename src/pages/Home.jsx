import { Link } from 'react-router-dom';
import Header from '../components/Header';
import '../styles/Home.css';

const Home = () => {
  return (
    <>
      <h1>Home page</h1>
      <h4>Comming Soon...</h4>
      <p>
        <Link to="/contact">Contact Us</Link>{' '}
      </p>
      <Header />
    </>
  );
};

export default Home;
