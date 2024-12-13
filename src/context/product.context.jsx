import axios from 'axios';
import { createContext, useContext, useEffect, useState } from 'react';
import { useServerLink } from './server.context';

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [productData, setProductData] = useState(null);

  const { serverLink } = useServerLink();

  useEffect(() => {
    const getAllProductData = async () => {
      try {
        const response = await axios.get(
          `${serverLink}/testing/test/all-product.php`
        );

        // console.log(response.data);
        setProductData(response.data.productData);
      } catch (error) {
        console.log(error);
      }
    };

    getAllProductData();
  }, [serverLink]);

  return (
    <ProductContext.Provider value={{ productData, setProductData }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => useContext(ProductContext);
