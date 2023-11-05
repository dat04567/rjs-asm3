import React from 'react';
import {useOutletContext} from 'react-router-dom';
import { BannerShop,Categories } from 'components';



// const 
function ShopPage() {
   const {loadProduct} = useOutletContext();
   return <>
      <BannerShop name = "SHOP"/>  
      <Categories  products = {loadProduct} />
   </>;
}

export default ShopPage;