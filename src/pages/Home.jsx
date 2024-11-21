import { Carousel, Divider } from 'rsuite';
import Header from '../components/Header';
import '../styles/Home.css';
import { GiJewelCrown } from '@react-icons/all-files/gi/GiJewelCrown';
import HomeProducts from '../components/home/HomeProducts';
import HomeConnectUs from '../components/home/HomeConnectUs';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <div className="header-container margin-t10">
        <Header />
      </div>
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
        <div>
          <h2 className="textCenter fraunces-font main-color">
            Shop By Category
          </h2>
        </div>
        <Divider>
          <GiJewelCrown />
        </Divider>
        <div className="margin-t50">
          <HomeProducts />
        </div>
      </div>
      <div className="home-connect-us margin-b60">
        <div>
          <h2 className="textCenter fraunces-font main-color">
            Connect with Us
          </h2>
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
    </>
  );
};

export default Home;
