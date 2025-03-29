// now home page content moved to mmtc-pamp page
import '../styles/Home.css';

//new home page style
import '../styles/newHome.css';

import Contact from './Contact';
import { useWebStatus } from '../context/status.context';
import { Helmet } from 'react-helmet-async';
import { Button, Carousel, Panel } from 'rsuite';
import { FaMapMarkerAlt } from '@react-icons/all-files/fa/FaMapMarkerAlt';
import { FaPhoneAlt } from '@react-icons/all-files/fa/FaPhoneAlt';
import { FaEnvelope } from '@react-icons/all-files/fa/FaEnvelope';
import { Link } from 'react-router-dom';
import { useScroll, useMotionValueEvent } from 'motion/react';
import { useState } from 'react';
import AnimatedText from '../components/AnimatedText';
import ProductCarousel from '../components/newHome/ProductCarousel';
import Testimonials from '../components/newHome/Testimonials';
import HomeBlog from '../components/newHome/HomeBlog';
import AstroGem from '../components/newHome/AstroGem';

// @react-icons/all-files/io/IoIosHeartEmpty

const Home = () => {
  // move to top of window when user on different section of other page
  // window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

  const { scrollY } = useScroll(); // Framer Motion scroll tracking
  const [direction, setDirection] = useState('Idle');
  const [lastScroll, setLastScroll] = useState(0);

  useMotionValueEvent(scrollY, 'change', latest => {
    if (latest > lastScroll) {
      setDirection('Down');
    } else if (latest < lastScroll) {
      setDirection('Up');
    }
    setLastScroll(latest);
  });

  console.log({ direction, lastScroll });

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
      {/* <div>
        <a href="/mmtc-pamp">MMTC PAMP</a>
      </div> */}

      <div
        className={`h-sec1-header-container ${direction == 'Up' || direction == 'Idle' ? 'head-dir-up' : 'head-dir-down'}`}
      >
        <div className=" h-sec1-logo-container dis-flex ">
          <Link to="/" className="dis-block">
            <div className="imageWrapper">
              <img
                src="/nav-jew-logo.jpg"
                loading="lazy"
                alt="Navratna Jewellers Logo"
              ></img>
            </div>
          </Link>
        </div>
        <div className="h-sec1-collection-container dis-flex ">
          <a href="#" className="default-remove-a">
            <AnimatedText text="Collections" />
          </a>
          <a href="mmtc-pamp" className="default-remove-a">
            <AnimatedText text="Shop Now" />
          </a>
          <a href="#" className="default-remove-a">
            <AnimatedText text="Blog" />
          </a>
          <a href="#" className="default-remove-a">
            <AnimatedText text="About Us" />
          </a>
        </div>
        <div className="h-sec1-contact-container dis-flex ">
          <a href="#" className="default-remove-a">
            Contact Us
          </a>
        </div>
      </div>
      <div className="home-section1-container">
        <Carousel
          autoplay
          style={{
            height: '100vh',
          }}
        >
          <Link
            style={{
              // border: 'solid 2px red',
              background: 'transparent',
            }}
            className=" h-sec1-carousel dis-flex"
            to="#"
          >
            <div className="h-sec1-carousel-bg-img imageWrapper ">
              <img
                src="/images/home-page-assests/438264547_846103974202968_892064003090336676_n.jpg"
                alt="Image 1"
              />
            </div>
            <div className="h-sec1-carousel-content">
              {/* <h4>Heading</h4>
              <p>Paragraph</p> */}
            </div>
          </Link>
          <Link
            style={{
              // border: 'solid 2px red',
              background: 'transparent',
            }}
            className=" h-sec1-carousel dis-flex"
            to="#"
          >
            <div className="h-sec1-carousel-bg-img imageWrapper ">
              <img
                src="/images/home-page-assests/450585018_893059906174041_8330071302460358246_n.jpg"
                alt="Image 1"
              />
            </div>
            <div className="h-sec1-carousel-content">
              {/* <h4>Heading</h4>
              <p>Paragraph</p> */}
            </div>
          </Link>
          <Link
            style={{
              // border: 'solid 2px red',
              background: 'transparent',
            }}
            className=" h-sec1-carousel dis-flex"
            to="#"
          >
            <div className="h-sec1-carousel-bg-img imageWrapper ">
              <img
                src="/images/home-page-assests/470240447_1006331214846909_9027560875682736872_n.jpg"
                alt="Image 1"
              />
            </div>
            <div className="h-sec1-carousel-content">
              {/* <h4>Heading</h4>
              <p>Paragraph</p> */}
            </div>
          </Link>
          <Link
            style={{
              // border: 'solid 2px red',
              background: 'transparent',
            }}
            className=" h-sec1-carousel dis-flex"
            to="#"
          >
            <div className="h-sec1-carousel-bg-img imageWrapper ">
              <img
                src="/images/home-page-assests/464080990_965911652222199_4277463662035696964_n.jpg"
                alt="Image 1"
              />
            </div>
            <div className="h-sec1-carousel-content">
              {/* <h4>Heading</h4>
              <p>Paragraph</p> */}
            </div>
          </Link>
          <Link
            style={{
              // border: 'solid 2px red',
              background: 'transparent',
            }}
            className=" h-sec1-carousel dis-flex"
            to="#"
          >
            <div className="h-sec1-carousel-bg-img imageWrapper ">
              <img
                src="/images/home-page-assests/484290630_9495467980521313_2710749015271242633_n.jpg"
                alt="Image 1"
              />
            </div>
            <div className="h-sec1-carousel-content">
              {/* <h4>Heading</h4>
              <p>Paragraph</p> */}
            </div>
          </Link>
        </Carousel>
      </div>
      <div className="home-container">
        {/* Hero Section */}
        <div className="hero-section">
          <div className="hero-content">
            <h1>Timeless Elegance, Crafted for You</h1>
            <div className="hero-buttons">
              <Button appearance="primary">Shop Now</Button>
              <Button appearance="ghost">Explore Collections</Button>
            </div>
          </div>
        </div>

        {/* Featured Collections */}
        <section className="collections">
          <h2>Our Collections</h2>
          <div className="collection-grid">
            {['Gold', 'Silver', 'MMTC-PAMP'].map((category, index) => (
              <Panel
                key={index}
                shaded
                bordered
                bodyFill
                className="collection-card"
              >
                <img
                  src={`/images/home-page-assests/collection/${category.toLowerCase()}.jpg`}
                  alt={category}
                  className="collection-image"
                />
                <h3>{category} Collection</h3>
                <Button appearance="primary">View More</Button>
              </Panel>
            ))}
          </div>
        </section>

        <section>
          <div>
            <ProductCarousel title="New Arrivals" />
          </div>
        </section>

        {/* Astrological Gems Section */}
        <AstroGem />

        {/* Customer Testimonials */}
        <Testimonials />

        {/* Blog */}
        <HomeBlog />

        {/* Contact & Store Info */}
        <footer className="footer">
          <h2>Visit Us</h2>
          <div className="contact-info">
            <div>
              <FaMapMarkerAlt />
              <span>Beside Gurudwara, Main Road, Ranchi, India, Jharkhand</span>
            </div>
            <div>
              <FaPhoneAlt />
              <span>+91 98765 43210</span>
            </div>
            <div>
              <FaEnvelope />
              <span>contact@navratnajewellers.com</span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Home;
