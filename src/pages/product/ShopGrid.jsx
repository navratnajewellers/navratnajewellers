import {
  Affix,
  Breadcrumb,
  Divider,
  FlexboxGrid,
  Loader,
  Pagination,
} from 'rsuite';
import Header from '../../components/Header';
import { useProduct } from '../../context/product.context';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';
import { useEffect, useState } from 'react';
import ShopItem from './ShopItem';
import axios from 'axios';
import { useServerLink } from '../../context/server.context';
import { useWebStatus } from '../../context/status.context';
import { Helmet } from 'react-helmet-async';

const ShopGrid = () => {
  // check the website update status
  const { isWebsiteOnUpdate } = useWebStatus();

  if (isWebsiteOnUpdate) {
    window.location.replace('/');
  }

  // move to top of window wgen user on different section of other page
  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

  const { productData } = useProduct();
  const [priceData, setPriceData] = useState(null);

  const { serverLink } = useServerLink();

  const [currentPage, setCurrentPage] = useState(1);

  // page size used for the number of product display
  const [pageSize] = useState(9);

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
  }, [serverLink]);

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  const currentData = productData?.slice(startIndex, endIndex);

  // console.log(currentData);

  // console.log(productData);
  // console.log({
  //   currentPage: currentPage,
  //   startIndex: startIndex,
  //   endIndex: endIndex,
  //   pageSize: pageSize,
  //   currentDataLength: currentData?.length,
  // });

  return (
    <div>
      <Helmet>
        <title>Shop</title>
      </Helmet>
      <Affix className="fixed-header">
        <div className="header-container margin-t10">
          <Header />
        </div>
      </Affix>
      <div className="breadcrumb-container">
        <Breadcrumb>
          <Breadcrumb.Item>
            <Link to="/">Home</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item active>Shop</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      {!productData && !priceData ? (
        <div className="loader-default-container dis-flex">
          <Loader content="Loading..." vertical />
        </div>
      ) : (
        <div>
          <div className='className="show-grid"'>
            <FlexboxGrid justify="center">
              {currentData?.map(data => (
                <ShopItem
                  key={data.product_id}
                  productDetail={data}
                  priceData={priceData}
                />
              ))}
            </FlexboxGrid>
          </div>
          <div>
            <Divider />
            <div className="dis-flex">
              <Pagination
                prev
                last
                next
                first
                size="md"
                total={productData?.length}
                limit={pageSize}
                activePage={currentPage}
                onChangePage={setCurrentPage}
              />
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

export default ShopGrid;
