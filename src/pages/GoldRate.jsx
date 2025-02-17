import { Affix, Loader, Text } from 'rsuite';
import Footer from '../components/Footer';
import Header from '../components/Header';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useServerLink } from '../context/server.context';
import { useWebStatus } from '../context/status.context';
import { Helmet } from 'react-helmet-async';
// import { Helmet } from 'react-helmet';

const GoldRate = () => {
  // check the website update status
  const { isWebsiteOnUpdate } = useWebStatus();

  if (isWebsiteOnUpdate) {
    window.location.replace('/');
  }

  // move to top of window wgen user on different section of other page
  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

  const [priceData, setPriceData] = useState(null);

  const { serverLink } = useServerLink();

  useEffect(() => {
    const handlePrice = async () => {
      try {
        const response = await axios.post(
          `${serverLink}/testing/test/gold_rate.php`,
          {
            protectionId: 'Nav##$56',
          }
        );

        // console.log(response.data);
        setPriceData(response.data.record);
      } catch (error) {
        console.log(error);
      }
    };

    handlePrice();

    return () => {};
  }, [serverLink]);

  // console.log(priceData);

  return (
    <div>
      <Helmet>
        <title>Price List</title>
        <meta
          name="keywords"
          content="gold price, silver price, 1gram, MMTC, Navratna Jewellers, jewellery, gold, silver, gold coin, silver coin, Navratna Jewellers, coin, Jewellers"
        />
        <meta
          name="description"
          content="Navratna Jewellers in Ranchi Jharkhand is one of the leading businesses in the Gold Jewellery Showrooms, Diamond Jewellery Showrooms, Coin Dealers, Silver Jewellery Showrooms, Gold Coin Dealers, Silver Coin Dealers and much more. Find Address, Contact Number, Reviews & Ratings, Photos, Maps of Navratna Jewellers, Ranchi, Jharkhand."
        />
      </Helmet>
      <Affix className="fixed-header">
        <div className="header-container margin-t10">
          <Header />
        </div>
      </Affix>
      <div className="gold-price-container">
        <div>
          <h2 className="text-center gp-primary-text">
            From Everyday Elegance To Bridal Grace, Cherish Every Moment With
            Navratna&apos;s Auspicious Gold Jewellery
          </h2>
          <Text className="text-center gp-secondary-text">
            Navratna Jewellers offers a captivating collection of meticulously
            crafted gold pieces, each one whispering tales of tradition and
            heritage. Explore our diverse collection and discover pieces that
            resonate with your unique story as we believe that gold is a
            language for everyone. It&apos;s more than just an ornament; it is a
            conversation starter, a confidence booster, and a treasured
            companion that elevates your everyday moments. Visit Navratna
            Jewellers today and together, let&lsquo;s create a story that shines
            as brightly as you do.
          </Text>
        </div>
        <div className="margin-t50 margin-b50">
          {priceData === null ? (
            <div className="loader-default-container dis-flex">
              <Loader content="Loading..." vertical />
            </div>
          ) : (
            <div className="table-responsive">
              <table className="table text-center">
                <thead className="table-dark">
                  <tr>
                    <th>Gram</th>
                    <th>22 Carat Gold Today</th>
                    <th>24 Carat Gold Today</th>
                    <th>18 Carat Gold Today</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1 Gram</td>
                    <td>{priceData.price_1_gram_22K}</td>
                    <td>{priceData.price_1_gram_24K}</td>
                    <td>{priceData.price_1_gram_18K}</td>
                  </tr>
                  <tr>
                    <td>8 Gram</td>
                    <td>{priceData.price_1_gram_22K * 8}</td>
                    <td>{priceData.price_1_gram_24K * 8}</td>
                    <td>{priceData.price_1_gram_18K * 8}</td>
                  </tr>
                  <tr>
                    <td>10 Gram</td>
                    <td>{priceData.price_1_gram_22K * 10}</td>
                    <td>{priceData.price_1_gram_24K * 10}</td>
                    <td>{priceData.price_1_gram_18K * 10}</td>
                  </tr>
                  <tr>
                    <td>100 Gram</td>
                    <td>{priceData.price_1_gram_22K * 100}</td>
                    <td>{priceData.price_1_gram_24K * 100}</td>
                    <td>{priceData.price_1_gram_18K * 100}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default GoldRate;
