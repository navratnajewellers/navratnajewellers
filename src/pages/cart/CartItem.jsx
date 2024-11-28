import { Button, Col, Container, Divider, Row } from 'rsuite';
// import { MdDelete } from "@react-icons/all-files/md/MdDelete";
import TrashIcon from '@rsuite/icons/Trash';

const CartItem = () => {
  return (
    <div className="cart-product-container">
      <Divider />
      <div>
        <Container>
          <Row>
            <Col
              xs={7}
              sm={7}
              md={7}
              lg={7}
              className="cart-product-img-container"
            >
              <div className="imageWrapper">
                <img
                  src="/24K_1_gram_gold_coin.jpeg"
                  alt="24 Karat Gold Coin"
                ></img>
              </div>
            </Col>
            <Col
              xs={12}
              sm={12}
              md={12}
              lg={12}
              className="order-product-info-container"
            >
              <div>
                <h4 className="margin-t10">
                  2 gram 24 Karat Gold Coin with Lakshmi Ganesha Motif
                </h4>
                <h4 className="margin-t5 margin-b20">₹ 17402</h4>
              </div>
              <div className="margin-b10">
                <Button startIcon={<TrashIcon />}>Remove</Button>
              </div>
            </Col>
            <Col
              xs={5}
              sm={5}
              md={5}
              lg={5}
              className="order-product-btn-container"
            >
              <div>
                <Button className="product-add-cart_btn">-</Button>
                <span className="product-cart-quantity">1</span>
                <Button className="product-add-cart_btn">+</Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default CartItem;
