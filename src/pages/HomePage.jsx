import React from 'react';
import { ProductsCategories, Banner, TrendingProducts, OrderShop, CustomerSupport } from 'components';
import { useOutletContext } from 'react-router-dom';

function HomePage() {
   const { loadProduct } = useOutletContext();
   return ( <>
         <Banner />
         <ProductsCategories />
         <CustomerSupport />
         <TrendingProducts products={loadProduct} />
         <OrderShop />
      </>
   );
}

export default HomePage;
