import { BannerShop, ShoppingCart } from 'components';
import React from 'react';

function CartPage() {
   return (
      <>
         <BannerShop name="Cart" />
         <ShoppingCart />
      </>
   );
}

export default CartPage;
