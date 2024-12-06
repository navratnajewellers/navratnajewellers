import { Link, useParams } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import {
  Accordion,
  Breadcrumb,
  Button,
  Col,
  Grid,
  Loader,
  Message,
  Row,
  SelectPicker,
  Text,
  useToaster,
} from 'rsuite';
import GoldImageCarousol from './GoldImageCarousol';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useProfile } from '../../context/profile.context';
import { useCart } from '../../context/Cart.context';

const data = [1, 2, 3, 4, 5, 10].map(item => ({
  label: item,
  value: item,
}));

const Product = () => {
  const toaster = useToaster();
  const { productName } = useParams();

  // console.log(productName);

  const [priceData, setPriceData] = useState(null);
  const [productData, setProductData] = useState(null);
  const [productNotFound, setProductNotFound] = useState(null);

  const [cartQuantity, setCartQuantity] = useState(0);

  // for checking that user is login
  const { userData } = useProfile();

  // const { cartData, setCartData } = useCart();
  const { setCartData } = useCart();

  const priceBreak = {
    productPrice: 1,
    makingCharge: 1,
    subTotal: 1,
    gst: 1,
    grand_total: 1,
  };

  // for display notification message
  const displayMessage = (type, message) => {
    toaster.push(
      <Message showIcon type={type} closable>
        <strong>{message}</strong>
      </Message>,
      { placement: 'topCenter', duration: 2000 }
    );
  };

  useEffect(() => {
    // Clearing previous data to empty useState
    setPriceData(null);
    setProductData(null);

    // fetching price of gold from database to update page details
    const handlePrice = async () => {
      try {
        const response = await axios.get(
          'http://127.0.0.1/testing/test/gold_rate.php'
        );

        // console.log(response.data);
        setPriceData(response.data.record);
      } catch (error) {
        console.log(error);
      }
    };

    handlePrice();

    //fetching product details from database using weight from gram quantity geting from page
    const fetchProduct = async () => {
      try {
        const response = await axios.post(
          'http://127.0.0.1/testing/test/product-byName.php',
          {
            productName: productName,
          }
        );

        // console.log(response.data);

        if (response.data.status === 'success') {
          setProductData(response.data.productData);
        }

        if (response.data.status === 'error') {
          setProductNotFound(response.data.message);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchProduct();

    // updating the local cart data if user is not login
    // if (userData.id === '' && cartData.quantity !== 0) {
    //   console.log('local storage get updated');

    //   //localStorage.setItem('cart', JSON.stringify(cartData));
    // }

    return () => {};
  }, [productName]);

  const handleQuantityChange = e => {
    setCartQuantity(e);
    // console.log({ event: e, cartQuantity: cartQuantity });
  };

  // displaying the various data on console
  // console.log(gramQt, priceData, productData, productNotFound);

  if (cartQuantity === 0 || cartQuantity == null) {
    setCartQuantity(1);
    // console.log('quantity is empty, so it get set to default 1');
  }

  const handleAddToCart = async () => {
    if (userData.id && productData.product_id) {
      // console.log('user is log in');
      // console.log('quantity add to cart is' + cartQuantity);

      try {
        const response = await axios.post(
          'http://127.0.0.1/testing/test/update_cart.php',
          {
            user_id: userData.id,
            product_id: productData.product_id,
            quantity: cartQuantity,
            price: priceBreak.grand_total * cartQuantity,
          }
        );

        // console.log(response.data);

        if (response.status === 200) {
          displayMessage('info', 'Cart Updated');

          // updating the cart
          //const previousQuantity = cartData.quantity;
          setCartData(val => ({
            ...val,
            product_id: productData.product_id,
            quantity: val.quantity + cartQuantity,
            price: val.price + priceBreak.grand_total * cartQuantity,
          }));
        }
      } catch (error) {
        console.log(error);

        displayMessage('eror', error);
      }
    } else {
      // console.log('user is not log in');

      const hashedLocalUserId = JSON.parse(localStorage.getItem('localCart'));

      try {
        const response = await axios.post(
          'http://127.0.0.1/testing/local-cart/update_local-cart.php',
          {
            user_id: hashedLocalUserId,
            product_id: productData.product_id,
            quantity: cartQuantity,
            price: priceBreak.grand_total * cartQuantity,
          }
        );

        // console.log(response.data);

        if (response.status === 200) {
          displayMessage('info', 'local Cart Updated');

          // updating the cart
          //const previousQuantity = cartData.quantity;
          setCartData(val => ({
            ...val,
            product_id: productData.product_id,
            quantity: val.quantity + cartQuantity,
            price: val.price + priceBreak.grand_total * cartQuantity,
          }));
        }
      } catch (error) {
        console.log(error);

        displayMessage('eror', error);
      }
    }
  };

  // console.log({ userData: userData, productData: productData });
  // console.log({ cartQuantity: cartQuantity, cartData: cartData });

  return (
    <div>
      <div className="header-container margin-t10">
        <Header />
      </div>

      {!productData || !priceData ? (
        <div className="loader-default-container dis-flex">
          {productNotFound === null ? (
            <Loader content="Loading..." vertical />
          ) : (
            <h2 style={{ fontFamily: 'cursive' }}>
              This product has been deleted.
            </h2>
          )}
        </div>
      ) : (
        <div>
          <div className="breadcrumb-container">
            <Breadcrumb>
              <Breadcrumb.Item>
                <Link to="/">Home</Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                <Link to="/products">Products</Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item active>
                {productData.metal_type} Coin {productData.weight} Gram
              </Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <div className="dis-none">
            {
              (priceBreak.productPrice =
                priceData.price_1_gram_24K * productData.weight)
            }
            {(priceBreak.makingCharge = priceBreak.productPrice * 0.08)}
            {
              (priceBreak.subTotal =
                priceBreak.productPrice + priceBreak.makingCharge)
            }
            {(priceBreak.gst = Math.round(priceBreak.subTotal * 0.03))}
            {
              (priceBreak.grand_total = Math.round(
                priceBreak.subTotal + priceBreak.gst
              ))
            }
          </div>
          <div>
            <Grid fluid>
              <Row className="show-grid">
                <Col
                  xs={24}
                  sm={24}
                  md={10}
                  lg={10}
                  className="grid-gold-image"
                >
                  <div className="product-carousel-container">
                    <GoldImageCarousol productData={productData} />
                  </div>
                </Col>
                <Col
                  xs={24}
                  sm={24}
                  md={14}
                  lg={14}
                  className="grid-gold-content"
                >
                  <div className="gold-detail-container">
                    <div className="product-title">
                      <h4 className="textCenter">{productData.name}</h4>
                    </div>
                    <div className="textCenter product-price">
                      <h2>
                        <span>Price: </span>
                        <span>₹ {priceBreak.grand_total}</span>
                      </h2>
                    </div>
                    <div className="quantity-cart-container dis-flex">
                      <SelectPicker
                        label="Quantity"
                        data={data}
                        searchable={true}
                        style={{ width: 224 }}
                        placeholder="Select Quantity"
                        onChange={handleQuantityChange}
                        defaultValue={cartQuantity}
                      />
                      <Button
                        className="add-to-card"
                        onClick={() => handleAddToCart()}
                      >
                        Add to Card
                      </Button>
                    </div>
                    <div className="product-details">
                      <div className="product-heading textCenter">
                        <h3>Jewellery Details</h3>
                      </div>
                      <div>
                        <Accordion defaultActiveKey={1} bordered>
                          <Accordion.Panel header="METAL DETAILS" eventKey={1}>
                            <table className="table table-borderless text-center margin-t20 margin-b20">
                              <thead>
                                <tr>
                                  <th>Metal Type</th>
                                  <th>Karat</th>
                                  <th>Weight</th>
                                  <th>Color</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>{productData.metal_type}</td>
                                  <td>{productData.karat}</td>
                                  <td>
                                    {productData.weight}{' '}
                                    {productData.weight_type}
                                  </td>
                                  <td>{productData.color}</td>
                                </tr>
                              </tbody>
                            </table>
                          </Accordion.Panel>
                          <Accordion.Panel header="DESCRIPTION" eventKey={2}>
                            <div className="margin-t20 margin-b20">
                              <h4 className="margin-b10">
                                {productData.weight} gram 24 Karat{' '}
                                {productData.metal_type} Coin
                              </h4>
                              <Text>{productData.description}</Text>
                            </div>
                          </Accordion.Panel>
                          <Accordion.Panel header="PRICE BREAK" eventKey={3}>
                            <table className="table table-responsive table-hover price-break-table margin-t20 margin-b20">
                              <thead className="table-dark">
                                <tr>
                                  <th>Product Details</th>
                                  <th>Rate</th>
                                  <th>Weight</th>
                                  <th>Value</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>{productData.karat} Gold Coin</td>
                                  <td>₹ {priceData.price_1_gram_24K}/g</td>
                                  <td>{productData.weight} g</td>
                                  <td>₹ {priceBreak.productPrice}</td>
                                </tr>
                                <tr>
                                  <td>Making Charges</td>
                                  <td>-</td>
                                  <td>-</td>
                                  <td>₹ {priceBreak.makingCharge}</td>
                                </tr>
                                <tr>
                                  <td>Sub Total</td>
                                  <td>-</td>
                                  <td>{productData.weight}g Gross Wt.</td>
                                  <td>₹ {priceBreak.subTotal}</td>
                                </tr>
                                <tr>
                                  <td>GST</td>
                                  <td>-</td>
                                  <td>-</td>
                                  <td>₹ {priceBreak.gst}</td>
                                </tr>
                                <tr className="table-active table-grand-total ">
                                  <td
                                    colSpan="3"
                                    style={{
                                      textAlign: 'left',
                                      paddingLeft: '10%',
                                    }}
                                  >
                                    Grand Total
                                  </td>
                                  <td>₹ {priceBreak.grand_total}</td>
                                </tr>
                              </tbody>
                            </table>
                          </Accordion.Panel>
                        </Accordion>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Grid>
          </div>
          <div className="assurance margin-t50 margin-b50">
            <div className="textCenter">
              <h2>The Navratna Assurance</h2>
              <p>Crafted by Experts, Cherished by You.</p>
            </div>
            <div className="assurance-item-container dis-flex margin-t50 textCenter">
              <div className="assurance-item dis-flex">
                <div className="imageWrapper">
                  <img src="/purity-logo.png" alt="purity logo"></img>
                </div>
                <div className="margin-t20">
                  <h4>The Purity Guarantee</h4>
                </div>
              </div>
              <div className="assurance-item dis-flex">
                <div className="imageWrapper">
                  <img src="/trust-logo.png" alt="trust logo"></img>
                </div>
                <div className="margin-t20">
                  <h4>Complete Transparency and Trust</h4>
                </div>
              </div>
              <div className="assurance-item dis-flex">
                <div className="imageWrapper">
                  <img src="/mmtc-certified.jpg" alt="trust logo"></img>
                </div>
                <div className="margin-t20">
                  <h4>MMTRC Certified Gold</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="margin-t50">
        <Footer />
      </div>
    </div>
  );
};

export default Product;
