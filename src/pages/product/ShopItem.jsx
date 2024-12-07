import { Link } from 'react-router-dom';
import { FlexboxGrid } from 'rsuite';

const ShopItem = ({ productDetail, priceData }) => {
  // console.log(productDetail, priceData);

  return (
    <>
      <FlexboxGrid.Item colspan={6} className="product-item-container">
        <Link className="dis-link-style" to={`/shop/${productDetail.name}`}>
          <div>
            <div className="imageWrapper">
              <img
                src={
                  productDetail.product_img1
                    ? productDetail.product_img1
                    : '/24K_1_gram_gold_coin.jpeg'
                }
                alt="24K_1_gram_gold_coin"
              ></img>
            </div>
            <div>
              <h5> {productDetail.name} </h5>
              <h4>
                ₹{' '}
                {productDetail.metal_type === 'Gold'
                  ? priceData?.g * productDetail.weight
                  : priceData?.s * productDetail.weight}{' '}
              </h4>
            </div>
          </div>
        </Link>
      </FlexboxGrid.Item>
    </>
  );
};

export default ShopItem;
