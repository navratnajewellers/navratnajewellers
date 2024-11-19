import { Link } from 'react-router-dom';

const HomeProducts = () => {
  return (
    <div className="home-products-container">
      <div className="home-products">
        <div className="imageWrapper">
          <img src="/fod-gold-coins.jpeg"></img>
        </div>
        <div className="dis-flex home-product-name">
          <Link to="/product/mangalsutra">Gold Coins</Link>
        </div>
      </div>
      <div className="home-products">
        <div className="imageWrapper">
          <img src="/Pure-Silver-Coin---10-gm.jpeg"></img>
        </div>
        <div className="dis-flex home-product-name">
          <Link to="/product/mangalsutra">Silver Coins</Link>
        </div>
      </div>
    </div>
  );
};

export default HomeProducts;
