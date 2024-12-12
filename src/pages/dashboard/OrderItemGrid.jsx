import axios from 'axios';
import { useEffect, useState } from 'react';
import { Avatar, Tag, TagGroup } from 'rsuite';

const OrderItemGrid = ({ orderItemData }) => {
  const [productData, setProductData] = useState(null);

  useEffect(() => {
    //fetching product details from database using weight from gram quantity geting from page
    const fetchProduct = async () => {
      try {
        const response = await axios.post(
          'http://127.0.0.1/testing/test/product-ById.php',
          {
            productId: orderItemData.product_id_oi,
          }
        );

        // console.log(response.data);

        if (response.data.status === 'success') {
          setProductData(response.data.productData);
        }

        if (response.data.status === 'error') {
          // setProductNotFound(response.data.message);
        }
      } catch (error) {
        console.log(error);
      }
    };

    if (orderItemData?.product_id_oi) {
      fetchProduct();
    }
  }, [orderItemData.product_id_oi]);

  // console.log(orderItemData);
  // console.log(productData);

  return (
    <>
      {productData ? (
        <div className="order-product-container">
          <Avatar
            src={productData.product_img1}
            alt={productData.name}
            size="xxl"
          />
          <div className="order-product-detail">
            <h6 className="margin-b20 main-color">{productData.name}</h6>

            <TagGroup>
              <Tag size="lg">
                <span>
                  Price: <strong> {orderItemData.price_oi} </strong>
                </span>
              </Tag>
              <Tag size="lg">
                <span>
                  Quantity: <strong>{orderItemData.quantity_oi}</strong>{' '}
                </span>
              </Tag>
              <Tag
                size="lg"
                color={
                  orderItemData.delivery_status == 'order-cancel'
                    ? 'red'
                    : 'green'
                }
              >
                <span>
                  Status: <strong>{orderItemData.delivery_status}</strong>{' '}
                </span>
              </Tag>
            </TagGroup>
          </div>
        </div>
      ) : (
        ''
      )}
    </>
  );
};

export default OrderItemGrid;
