import { Link } from 'react-router-dom';

const HomeProducts = () => {
  return (
    <div className="home-products-container">
      <div className="home-products">
        <div className="imageWrapper">
          <img src="/festive-mangalsutra.jpeg"></img>
        </div>
        <div className="dis-flex home-product-name">
          <Link to="/product/mangalsutra">Mangalsutra</Link>
        </div>
      </div>
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
          <img src="/festive-earrings.jpeg"></img>
        </div>
        <div className="dis-flex home-product-name">
          <Link to="/product/mangalsutra">Earrings</Link>
        </div>
      </div>
      <div className="home-products">
        <div className="imageWrapper">
          <img src="/festive-ring.jpeg"></img>
        </div>
        <div className="dis-flex home-product-name">
          <Link to="/product/mangalsutra">Rings</Link>
        </div>
      </div>
      <div className="home-products">
        <div className="imageWrapper">
          <img src="/festive-pendant.jpeg"></img>
        </div>
        <div className="dis-flex home-product-name">
          <Link to="/product/mangalsutra">Pendants</Link>
        </div>
      </div>
      <div className="home-products">
        <div className="imageWrapper">
          <img src="/festive-nosepin.jpeg"></img>
        </div>
        <div className="dis-flex home-product-name">
          <Link to="/product/mangalsutra">Nose Pins</Link>
        </div>
      </div>
      <div className="home-products">
        <div className="imageWrapper">
          <img src="/festive-chain.jpeg"></img>
        </div>
        <div className="dis-flex home-product-name">
          <Link to="/product/mangalsutra">Chains</Link>
        </div>
      </div>
      <div className="home-products">
        <div className="imageWrapper">
          <img src="/festive-bracelet.jpeg"></img>
        </div>
        <div className="dis-flex home-product-name">
          <Link to="/product/mangalsutra">Bracelets</Link>
        </div>
      </div>
      <div className="home-products">
        <div className="imageWrapper">
          <img src="/festive-bangle.jpeg"></img>
        </div>
        <div className="dis-flex home-product-name">
          <Link to="/product/mangalsutra">Bangles</Link>
        </div>
      </div>
      <div className="home-products">
        <div className="imageWrapper">
          <img src="/festive-necklace.jpeg"></img>
        </div>
        <div className="dis-flex home-product-name">
          <Link to="/product/mangalsutra">Neckwear</Link>
        </div>
      </div>
      <div className="home-products">
        <div className="imageWrapper">
          <img src="/festive-necklace-set.jpeg"></img>
        </div>
        <div className="dis-flex home-product-name">
          <Link to="/product/mangalsutra">Neckless Set</Link>
        </div>
      </div>
      <div className="home-products">
        <div className="imageWrapper">
          <img src="/festive-pendant-earring-set.jpeg"></img>
        </div>
        <div className="dis-flex home-product-name">
          <Link to="/product/mangalsutra">Pendent Sets</Link>
        </div>
      </div>
    </div>
  );
};

export default HomeProducts;
