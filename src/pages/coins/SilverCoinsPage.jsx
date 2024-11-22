import { Link, useParams } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import {
  Accordion,
  Breadcrumb,
  Button,
  Col,
  Grid,
  Row,
  SelectPicker,
  Text,
} from 'rsuite';
import GoldImageCarousol from './GoldImageCarousol';

const data = ['1', '2', '3', '4', '5', '10'].map(item => ({
  label: item,
  value: item,
}));

const SilverCoinsPage = () => {
  const params = useParams();
  console.log(params);

  const handleQuantityChange = e => {
    console.log({ event: e });
  };

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
          <Breadcrumb.Item active>
            Gold Coin {params.gramQt} Gram
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div>
        <Grid fluid>
          <Row className="show-grid">
            <Col xs={24} sm={24} md={10} lg={10} className="grid-gold-image">
              <div className="product-carousel-container">
                <GoldImageCarousol />
              </div>
            </Col>
            <Col xs={24} sm={24} md={14} lg={14} className="grid-gold-content">
              <div className="gold-detail-container">
                <div className="product-title">
                  <h4 className="textCenter">
                    1 gram 24 Karat silver Coin with Lakshmi Ganesha Motif
                  </h4>
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
                              <td>Silver</td>
                              <td>24K</td>
                              <td>1 Gram</td>
                              <td>Gray</td>
                            </tr>
                          </tbody>
                        </table>
                      </Accordion.Panel>
                      <Accordion.Panel header="DESCRIPTION" eventKey={2}>
                        <div className="margin-t20 margin-b20">
                          <h4 className="margin-b10">
                            1 gram 24 Karat Silver Coin
                          </h4>
                          <Text>
                            This 24 Karat Navratna silver coin is the perfect
                            investment for you. The tail also features the
                            silver purity and the weight of the coin. With a
                            plain rim, the coin highlights a serrated pattern
                            along its edge. The high-polished finish adds a
                            lustrous appeal to the coin.
                          </Text>
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
                              <td>24KT Silver Coin</td>
                              <td>₹ 7881.82/g</td>
                              <td>1.000g</td>
                              <td>₹ 7881</td>
                            </tr>
                            <tr>
                              <td>Making Charges</td>
                              <td>-</td>
                              <td>-</td>
                              <td>₹ 630</td>
                            </tr>
                            <tr>
                              <td>Sub Total</td>
                              <td>-</td>
                              <td>1g Gross Wt.</td>
                              <td>₹ 8512</td>
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
                              <td>₹ 8768</td>
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
      <div className="assurance margin-t30 margin-b30">
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
      <div className="margin-t50">
        <Footer />
      </div>
    </div>
  );
};

export default SilverCoinsPage;
