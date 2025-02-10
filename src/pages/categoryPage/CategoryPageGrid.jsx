import {
  Affix,
  Breadcrumb,
  Divider,
  FlexboxGrid,
  Loader,
  Pagination,
} from 'rsuite';
import Header from '../../components/Header';
import { Link, useParams } from 'react-router-dom';
import Footer from '../../components/Footer';
import { useEffect, useState } from 'react';
import axios from 'axios';
import CategoryPageItem from './CategoryPageItem';
import { useServerLink } from '../../context/server.context';
import { Helmet } from 'react-helmet-async';

const CategoryPageGrid = () => {
  // move to top of window when user on different section of other page
  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

  const { productCategory } = useParams();

  const { serverLink } = useServerLink();

  // console.log(productCategory);

  const [productData, setProductData] = useState(null);
  const [priceData, setPriceData] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);

  // page size used for the number of product display
  const [pageSize] = useState(9);

  useEffect(() => {
    //fetching product details from database using weight from gram quantity geting from page
    const fetchCategoryProduct = async () => {
      try {
        const response = await axios.post(
          `${serverLink}/testing/test/category_product.php`,
          {
            productCategory: productCategory,
            protectionId: 'Nav##$56',
          }
        );

        // console.log(response.data);

        if (response.data.status === 'success') {
          setProductData(response.data.productData);
        }

        //   if (response.data.status === 'error') {

        //   }
      } catch (error) {
        console.log(error);
      }
    };

    fetchCategoryProduct();

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
  }, [productCategory, serverLink]);

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
        <title>Product</title>
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
          <Breadcrumb.Item active>
            {productCategory.toUpperCase()}
          </Breadcrumb.Item>
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
                <CategoryPageItem
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

export default CategoryPageGrid;
