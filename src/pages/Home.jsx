import { Affix, Carousel, Divider } from 'rsuite';
import Header from '../components/Header';
import '../styles/Home.css';
import { GiJewelCrown } from '@react-icons/all-files/gi/GiJewelCrown';
import HomeProducts from '../components/home/HomeProducts';
import HomeConnectUs from '../components/home/HomeConnectUs';
import Footer from '../components/Footer';
import Contact from './Contact';
import { useWebStatus } from '../context/status.context';
import { Helmet } from 'react-helmet-async';

const Home = () => {
  // move to top of window when user on different section of other page
  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

  const { isWebsiteOnUpdate } = useWebStatus();

  return isWebsiteOnUpdate ? (
    <div>
      <Contact />
    </div>
  ) : (
    <div>
      <Helmet>
        <title>Navratna Jewellers</title>
        <meta
          name="keywords"
          content="jewellery, gold, silver, gold coin, silver coin, Navratna Jewellers, coin, Jewellers"
        />
        <meta
          name="description"
          content="Navratna Jewellers in Ranchi is one of the leading businesses in the Gold, Silver and Diamond Jewellery Showrooms. Also known for Jewellery Showrooms, Gold Jewellery Showrooms, Diamond Jewellery Showrooms, Coin Dealers, Silver Jewellery Showrooms, Gold Coin Dealers, Silver Coin Dealers and much more. Find Address, Contact Number, Reviews & Ratings, Photos, Maps of Navratna Jewellers, Ranchi."
        />

        {/* Open Graph Meta Tags (For Social Media) */}
        <meta property="og:title" content="Navratna Jewellers" />
        <meta
          property="og:description"
          content="Navratna Jewellers in Ranchi is one of the leading businesses in the Gold, Silver and Diamond Jewellery Showrooms. Also known for Jewellery Showrooms, Gold Jewellery Showrooms, Diamond Jewellery Showrooms, Coin Dealers, Silver Jewellery Showrooms, Gold Coin Dealers, Silver Coin Dealers and much more."
        />
        <meta
          property="og:image"
          content="https://navratnajewellers.in/nav-jew-logo.jpg"
        />
        <meta property="og:url" content="https://navratnajewellers.in/" />

        <meta
          name="Jewellery"
          content="Buy the Gold or SIlver Coins at best price"
        />
        <meta name="copyright" content="Navratna Jewellers" />
        <meta name="language" content="ES" />
        <meta name="robots" content="index,follow" />
        <meta
          name="author"
          content="Navratna Jewellers, navratnajewellers0@gmail.com"
        />

        <meta name="og:latitude" content="23.3630270297507" />
        <meta name="og:longitude" content="85.32573439587476" />
        <meta
          name="og:street-address"
          content="677, Mahatma Gandhi Main Rd, beside Gurudwara, Lower Bazaar"
        />
        <meta name="og:locality" content="Ranchi" />
        <meta name="og:region" content="JHARKHAND" />
        <meta name="og:postal-code" content="834001" />
        <meta name="og:country-name" content="INDIA" />
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

export default Home;
