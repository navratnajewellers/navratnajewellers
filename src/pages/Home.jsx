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
        <Carousel autoplay className="custom-slider">
          <img
            src="https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=1"
            height="250"
          />
          <img
            src="https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=2"
            height="250"
          />
          <img
            src="https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=3"
            height="250"
          />
          <img
            src="https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=4"
            height="250"
          />
          <img
            src="https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=5"
            height="250"
          />
        </Carousel>
      </div>
      <div className="shop-by-category">
        <div>
          <h1 className="textCenter">Shop By Category</h1>
        </div>
        <Divider>
          <GiJewelCrown />
        </Divider>
        <div>
          <HomeProducts />
        </div>
      </div>
      <div className="home-connect-us margin-b60">
        <div>
          <h1 className="textCenter">Connect with Us</h1>
        </div>
        <Divider>
          <GiJewelCrown />
        </Divider>
        <div>
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
