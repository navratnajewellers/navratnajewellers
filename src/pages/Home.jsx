import { Affix, Carousel, Divider, Loader } from 'rsuite';
// import Header from '../components/Header';
import '../styles/Home.css';
import { GiJewelCrown } from '@react-icons/all-files/gi/GiJewelCrown';
import HomeProducts from '../components/home/HomeProducts';
import HomeConnectUs from '../components/home/HomeConnectUs';
import Footer from '../components/Footer';
import { lazy, Suspense } from 'react';
import Contact from './Contact';
import { useWebStatus } from '../context/status.context';

const Header = lazy(() => import('../components/Header'));

const Home = () => {
  // move to top of window wgen user on different section of other page
  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

  const { isWebsiteOnUpdate } = useWebStatus();

  return isWebsiteOnUpdate ? (
    <div>
      <Contact />
    </div>
  ) : (
    <div>
      <Affix className="fixed-header">
        <div className="header-container margin-t10">
          <Suspense fallback={<Loader center content="Loading..." vertical />}>
            <Header />
          </Suspense>
          {/* <Header /> */}
        </div>
      </Affix>
      <div className="carousel">
        <Carousel autoplay shape="bar" className="custom-slider">
          <a href="" className="dis-block">
            <img
              className="height-width-100"
              src="https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=1"
              height="250"
            />
          </a>
          <a href="" className="dis-block">
            <img
              className="height-width-100"
              src="https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=2"
              height="250"
            />
          </a>
          <a href="" className="dis-block">
            <img
              className="height-width-100"
              src="https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=3"
              height="250"
            />
          </a>
          <a href="" className="dis-block">
            <img
              className="height-width-100"
              src="https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=4"
              height="250"
            />
          </a>
          <a href="" className="dis-block">
            <img
              className="height-width-100"
              src="https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=5"
              height="250"
            />
          </a>
        </Carousel>
      </div>
      <div className="shop-by-category">
        <div className="shop-category-header">
          <h2 className="textCenter fraunces-font main-color">
            Shop By Category
          </h2>
          <p className="textCenter padding-lr5">
            Browse through your favorite categories. We&apos;ve got them all!
          </p>
        </div>
        <Divider>
          <GiJewelCrown />
        </Divider>
        <div className="margin-t50">
          <HomeProducts />
        </div>
      </div>
      <div className="home-connect-us margin-t50 margin-b60">
        <div className="shop-category-header">
          <h2 className="textCenter fraunces-font main-color">
            Connect with Us
          </h2>
          <p className="textCenter padding-lr5 ">
            We are always available to guide you at your convenience.
          </p>
        </div>
        <Divider>
          <GiJewelCrown />
        </Divider>
        <div className="margin-t50">
          <HomeConnectUs />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
