import { Button, Table, Text } from 'rsuite';
import Footer from '../components/Footer';
import Header from '../components/Header';
import axios from 'axios';

const GoldRate = () => {
  const handlePrice = async () => {
    try {
      const response = await axios.get(
        'http://127.0.0.1/testing/test/test.php'
      );

      console.log({ response });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <div>
          <Text>
            From Everyday Elegance To Bridal Grace, Cherish Every Moment With
            Tanishq’s Auspicious Gold Jewellery
          </Text>
          <Text>
            Tanishq offers a captivating collection of meticulously crafted gold
            pieces, each one whispering tales of tradition and heritage. Explore
            our diverse collection and discover pieces that resonate with your
            unique story as we believe that gold is a language for everyone.
            It&apos;s more than just an ornament; it is a conversation starter,
            a confidence booster, and a treasured companion that elevates your
            everyday moments. Visit Tanishq today and together, let&lsquo;s
            create a story that shines as brightly as you do.
          </Text>
        </div>
        <div>
          <Button onClick={() => handlePrice()}>Retrive Price</Button>
        </div>
        <div>
          <Table></Table>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default GoldRate;
