import axios from 'axios';
import { useEffect, useState } from 'react';
import { Avatar, Tag, TagGroup, useMediaQuery } from 'rsuite';
import { useServerLink } from '../../context/server.context';

const OrderItemGrid = ({ orderItemData }) => {
  const [productData, setProductData] = useState(null);

  const { serverLink } = useServerLink();

  const [isMobile] = useMediaQuery('(max-width: 600px)');

  useEffect(() => {
    //fetching product details from database using weight from gram quantity geting from page
    const fetchProduct = async () => {
      try {
        const response = await axios.post(
          `${serverLink}/testing/test/product-ById.php`,
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
  }, [orderItemData.product_id_oi, serverLink]);

  // console.log(orderItemData);
  // console.log(productData);

  return (
    <>
      {productData ? (
        <div className="order-product-container">
          <Avatar
            src={productData.product_img1}
            alt={productData.name}
            size={isMobile ? 'xxl' : 'xxl'}
            className="order-product-image"
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
                className="order-product-status"
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
