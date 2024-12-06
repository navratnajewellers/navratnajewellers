import axios from 'axios';
import { createContext, useContext, useEffect, useState } from 'react';

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [productData, setProductData] = useState(null);

  useEffect(() => {
    const getAllProductData = async () => {
      try {
        const response = await axios.get(
          'http://127.0.0.1/testing/test/all-product.php'
        );

        // console.log(response.data);
        setProductData(response.data.productData);
      } catch (error) {
        console.log(error);
      }
    };

    getAllProductData();
  }, []);

  return (
    <ProductContext.Provider value={{ productData, setProductData }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => useContext(ProductContext);
