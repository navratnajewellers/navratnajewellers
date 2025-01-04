import { Link } from 'react-router-dom';

const HomeProducts = () => {
  return (
    <div className="home-products-container">
      <div className="home-products pos-rel">
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
      </div>
      <div className="home-products pos-rel">
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
      </div>
    </div>
  );
};

export default HomeProducts;
