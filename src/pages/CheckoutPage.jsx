import { BannerShop, BillDetails } from 'components';
import React from 'react';

function CheckoutPage() {
   const checkout = <span style={{ color: 'black', wordSpacing: '0.3rem' }}>HOME / CART /</span>;
   const name = <span style={{ wordSpacing: '0.3rem' }}> CHECKOUT</span>;

   return (
      <>
         <BannerShop checkout={checkout} name={name} />
         <BillDetails />
      </>
   );
}

export default CheckoutPage;
