import { Link } from 'react-router-dom';
import PageNotFound404 from '../assets/404-page-not-found.jpg';
import { Helmet } from 'react-helmet-async';

const PageNotFound = () => {
  setTimeout(() => {
    window.location.replace('/');
  }, 5000);

  return (
    <div className="height-width-100">
      <Helmet>
        <title>Page not Found</title>
      </Helmet>
      <div>
        <img src={PageNotFound404} alt="404 page not found" width={720}></img>
      </div>
      <h1></h1>
      <Link to="/">
        <h4 className="textCenter">Go to Home Page</h4>
      </Link>
    </div>
  );
};

export default PageNotFound;
