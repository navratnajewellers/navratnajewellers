import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

const HomeProducts = () => {
  return (
    <div className="home-products-container">
      <motion.div
        className="home-products pos-rel"
        initial={{ opacity: 0, translateY: 120 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 1 }}
      >
        <Link to="/product/gold-coin">
          <div className="imageWrapper">
            <img
              src="/images/gold-coin.png"
              alt="Gold Coin"
              loading="lazy"
            ></img>
          </div>
          <div className="dis-flex home-product-name pos-abs">
            <span>Gold Coins</span>
          </div>
        </Link>
      </motion.div>
      <motion.div
        className="home-products pos-rel"
        initial={{ opacity: 0, translateY: 120 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 1 }}
      >
        <Link to="/product/silver-coin">
          <div className="imageWrapper">
            <img
              src="/images/silver-coins.png"
              alt="Silver Coin"
              loading="lazy"
            ></img>
          </div>
          <div className="dis-flex home-product-name pos-abs">
            <span>Silver Coins</span>
          </div>
        </Link>
      </motion.div>
    </div>
  );
};

export default HomeProducts;
