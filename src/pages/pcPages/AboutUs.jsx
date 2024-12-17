import { Affix } from 'rsuite';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

const AboutUs = () => {
  return (
    <div>
      <Affix className="fixed-header">
        <div className="header-container margin-t10">
          <Header />
        </div>
      </Affix>
      <div className="margin-t50 margin-b100 textCenter ">
        <h3 className="main-color margin-b30 ">About Us</h3>
        <p>
          Designer jewellery collections, featuring exquisite designs that blend
          western and eastern culture while keeping pace with the ever-changing
          lifestyle of our trendsetters.
        </p>

        <p>
          Our fusion-inspired jewellery is meticulously handcrafted by our top
          notch artisans and craftsmen.
        </p>
      </div>
      <div className="margin-t50">
        <Footer />
      </div>
    </div>
  );
};

export default AboutUs;
