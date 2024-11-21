import { Link, useParams } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import {
  Accordion,
  Breadcrumb,
  Button,
  Col,
  Grid,
  Placeholder,
  Row,
  SelectPicker,
} from 'rsuite';
import GoldImageCarousol from './GoldImageCarousol';

const data = ['1', '2', '3', '4', '5', '10'].map(item => ({
  label: item,
  value: item,
}));

const GoldCoinPage = () => {
  const { gramQt } = useParams();
  console.log(gramQt);

  const handleQuantityChange = e => {
    console.log({ event: e });
  };

  return (
    <div>
      <div className="header-container margin-t10">
        <Header />
      </div>
      <div>
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
      <div>
        <Grid fluid>
          <Row className="show-grid">
            <Col xs={10} sm={10} md={10} lg={10} className="grid-gold-image">
              <GoldImageCarousol />
            </Col>
            <Col xs={14} sm={14} md={14} lg={14} className="grid-gold-content">
              <div>
                <div>
                  <h4 className="textCenter">
                    1 gram 24 Karat Gold Coin with Lakshmi Ganesha Motif
                  </h4>
                </div>
                <div className="textCenter">
                  <h2>
                    <span>Price: </span>
                    <span>₹ 8768</span>
                  </h2>
                </div>
                <div>
                  <SelectPicker
                    label="Quantity"
                    data={data}
                    searchable={false}
                    style={{ width: 224 }}
                    placeholder="Select Quantity"
                    onChange={handleQuantityChange}
                  />
                  <Button>Add to Card</Button>
                </div>
                <div className="product-details">
                  <div>
                    <h3>Jewellery Details</h3>
                  </div>
                  <div>
                    <h5>Product Details</h5>
                    <Accordion defaultActiveKey={1} bordered>
                      <Accordion.Panel header="Accordion Panel 1" eventKey={1}>
                        <Placeholder.Paragraph />
                      </Accordion.Panel>
                      <Accordion.Panel header="Accordion Panel 2" eventKey={2}>
                        <Placeholder.Paragraph />
                      </Accordion.Panel>
                      <Accordion.Panel header="Accordion Panel 3" eventKey={3}>
                        <Placeholder.Paragraph />
                      </Accordion.Panel>
                    </Accordion>
                  </div>
                  <div>
                    <h5>Price Break</h5>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Grid>
      </div>
      <div className="margin-t50">
        <Footer />
      </div>
    </div>
  );
};

export default GoldCoinPage;
