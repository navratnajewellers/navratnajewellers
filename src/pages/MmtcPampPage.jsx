import { Affix, Carousel, Divider } from 'rsuite';
import Header from '../components/Header';
import HomeProducts from '../components/home/HomeProducts';
import HomeConnectUs from '../components/home/HomeConnectUs';
import { GiJewelCrown } from '@react-icons/all-files/gi/GiJewelCrown';
import { Helmet } from 'react-helmet-async';
import Footer from '../components/Footer';
import '../styles/Home.css';

const MmtcPampPage = () => {
  // move to top of window when user on different section of other page
  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

  return (
    <div>
      <Helmet>
        <title>MMTC PAMP | Navratna Jewellers</title>
        <meta
          name="keywords"
          content="jewellery, gold, silver, gold coin, silver coin, Navratna Jewellers, coin, Jewellers"
        />
        <meta
          name="description"
          content="Navratna Jewellers in Ranchi is one of the leading businesses in the Gold, Silver and Diamond Jewellery Showrooms. Also known for Jewellery Showrooms, Gold Jewellery Showrooms, Diamond Jewellery Showrooms, Coin Dealers, Silver Jewellery Showrooms, Gold Coin Dealers, Silver Coin Dealers and much more. Find Address, Contact Number, Reviews & Ratings, Photos, Maps of Navratna Jewellers, Ranchi."
        />
        <meta
          name="Jewellery"
          content="Buy the Gold or SIlver Coins at best price"
        />
      </Helmet>
      <div className="header-container">
        <Affix className="fixed-header padding-t10 ">
          <Header />
        </Affix>
      </div>
      <div className="main-carousel">
        <Carousel autoplay shape="bar" className="custom-slider">
          <a href="" className="dis-block">
            <img
              loading="lazy"
              className="height-width-100"
              src="/images/banner-image1.jpg"
              alt="Carosuel Image"
              height="250"
            />
          </a>
          <a href="" className="dis-block">
            <img
              loading="lazy"
              className="height-width-100"
              src="/images/banner-image2.jpg"
              alt="Carosuel Image"
              height="250"
            />
          </a>
          <a href="" className="dis-block">
            <img
              loading="lazy"
              className="height-width-100"
              src="/images/banner-image1.jpg"
              alt="Carosuel Image"
              height="250"
            />
          </a>
          <a href="" className="dis-block">
            <img
              loading="lazy"
              className="height-width-100"
              src="/images/banner-image2.jpg"
              alt="Carosuel Image"
              height="250"
            />
          </a>
          <a href="" className="dis-block">
            <img
              loading="lazy"
              className="height-width-100"
              src="/images/banner-image1.jpg"
              alt="Carosuel Image"
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

export default MmtcPampPage;
