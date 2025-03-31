import { Link } from 'react-router-dom';
import { useScroll, useMotionValueEvent } from 'motion/react';
import { useState } from 'react';
import AnimatedText from './AnimatedText';
import '../styles/newHeader.css';

const NewHeader = () => {
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

  return (
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
  );
};

export default NewHeader;
