import { Breadcrumb, Divider, FlexboxGrid, Pagination } from 'rsuite';
import Header from '../../components/Header';
import { useProduct } from '../../context/product.context';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';
import { useState } from 'react';
import ShopItem from './ShopItem';

const ShopGrid = () => {
  const { productData } = useProduct();

  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  // const startIndex = (currentPage - 1) * pageSize;
  // const endIndex = startIndex * pageSize;
  // const currentData = productData.slice(startIndex, endIndex);

  console.log(productData);
  console.log('active page ', currentPage);

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
          <Breadcrumb.Item active>Shop</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div>
        <div className='className="show-grid"'>
          <FlexboxGrid justify="center">
            {productData?.map(data => (
              <ShopItem key={data.product_id} />
            ))}
          </FlexboxGrid>
        </div>
        <div>
          <Divider />
          <Pagination
            prev
            last
            next
            first
            size="md"
            total={productData?.length}
            limit={pageSize}
            activePage={currentPage}
            onChangePage={value => {
              setPageSize(value);
              setCurrentPage(1);
            }}
          />
          <Divider />
        </div>
      </div>
      <div className="margin-t50">
        <Footer />
      </div>
    </div>
  );
};

export default ShopGrid;
