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
  Row,
  SelectPicker,
  Text,
} from 'rsuite';
import GoldImageCarousol from './GoldImageCarousol';
import { useEffect, useState } from 'react';
import axios from 'axios';

const data = ['1', '2', '3', '4', '5', '10'].map(item => ({
  label: item,
  value: item,
}));

const GoldCoinPage = () => {
  const { gramQt } = useParams();

  const [priceData, setPriceData] = useState(null);
  const [productData, setProductData] = useState(null);
  const [productNotFound, setProductNotFound] = useState(null);

  useEffect(() => {
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
          'http://127.0.0.1/testing/test/product.php',
          {
            weight: gramQt,
          }
        );

        console.log(response.data);

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

    return () => {};
  }, [gramQt]);

  const handleQuantityChange = e => {
    console.log({ event: e });
  };

  console.log(gramQt, priceData, productData, productNotFound);

  return (
    <div>
      <div className="header-container margin-t10">
        <Header />
      </div>
      <div className="breadcrumb-container">
        <Breadcrumb>
          <Breadcrumb.Item>
            <Link to="/">Home</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link to="/products">Products</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item active>Gold Coin {gramQt} Gram</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      {productData === null || productData === 'undefined' ? (
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
                    <GoldImageCarousol />
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
                        <span>₹ 8768</span>
                      </h2>
                    </div>
                    <div className="quantity-cart-container dis-flex">
                      <SelectPicker
                        label="Quantity"
                        data={data}
                        searchable={false}
                        style={{ width: 224 }}
                        placeholder="Select Quantity"
                        onChange={handleQuantityChange}
                      />
                      <Button className="add-to-card">Add to Card</Button>
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
                                {gramQt} gram 24 Karat Gold Coin
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
                                  <td>
                                    ₹{' '}
                                    {priceData.price_1_gram_24K *
                                      productData.weight}
                                  </td>
                                </tr>
                                <tr>
                                  <td>Making Charges</td>
                                  <td>-</td>
                                  <td>-</td>
                                  <td>
                                    ₹{' '}
                                    {priceData.price_1_gram_24K *
                                      productData.weight *
                                      0.08}
                                  </td>
                                </tr>
                                <tr>
                                  <td>Sub Total</td>
                                  <td>-</td>
                                  <td>{productData.weight}g Gross Wt.</td>
                                  <td>
                                    ₹{' '}
                                    {priceData.price_1_gram_24K *
                                      productData.weight +
                                      priceData.price_1_gram_24K *
                                        productData.weight *
                                        0.08}
                                  </td>
                                </tr>
                                <tr>
                                  <td>GST</td>
                                  <td>-</td>
                                  <td>-</td>
                                  <td>
                                    ₹{' '}
                                    {(priceData.price_1_gram_24K +
                                      priceData.price_1_gram_24K *
                                        productData.weight *
                                        0.08) *
                                      0.03}
                                  </td>
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
                                  <td>
                                    ₹{' '}
                                    {priceData.price_1_gram_24K +
                                      priceData.price_1_gram_24K *
                                        productData.weight *
                                        0.08 +
                                      priceData.price_1_gram_24K * 0.03}
                                  </td>
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

export default GoldCoinPage;
