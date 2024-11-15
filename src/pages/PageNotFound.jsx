import { Link } from 'react-router-dom';
import PageNotFound404 from '../assets/404-page-not-found.jpg';

const PageNotFound = () => {
  return (
    <div>
      <div>
        <img src={PageNotFound404} alt="404 page not found" width={720}></img>
      </div>
      <h1></h1>
      <h4>
        <Link to="/">Go to Home Page</Link>
      </h4>
    </div>
  );
};

export default PageNotFound;
