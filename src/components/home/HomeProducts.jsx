import { Link } from 'react-router-dom';

const HomeProducts = () => {
  return (
    <div className="home-products-container">
      <div className="home-products pos-rel">
        <Link to="/product/gold-coins">
          <div className="imageWrapper">
            <img src="/fod-gold-coins.jpeg"></img>
          </div>
          <div className="dis-flex home-product-name pos-abs z-10">
            <span>Gold Coins</span>
          </div>
        </Link>
      </div>
      <div className="home-products pos-rel">
        <Link to="/product/silver-coins">
          <div className="imageWrapper">
            <img src="/Pure-Silver-Coin---10-gm.jpeg"></img>
          </div>
          <div className="dis-flex home-product-name pos-abs z-10">
            <span>Silver Coins</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default HomeProducts;
