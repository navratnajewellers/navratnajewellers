import { Link } from 'react-router-dom';
import { FlexboxGrid } from 'rsuite';

const ShopItem = () => {
  return (
    <>
      <FlexboxGrid.Item colspan={6} className="product-item-container">
        <Link className="dis-link-style">
          <div>
            <div className="imageWrapper">
              <img
                src="/24K_1_gram_gold_coin.jpeg"
                alt="24K_1_gram_gold_coin"
              ></img>
            </div>
            <div>
              <h5>Traditional Temple Gold Bangle</h5>
              <h4>₹ 67118</h4>
            </div>
          </div>
        </Link>
      </FlexboxGrid.Item>
    </>
  );
};

export default ShopItem;
