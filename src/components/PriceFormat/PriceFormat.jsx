import React from 'react';


function PriceFormat({price,classes}) {
   const VND = new Intl.NumberFormat('vn', {
      style: 'currency',
      currency: 'VND',
   });
   return <span className={classes}>{VND.format(price).substring(1)} VND</span>;
}

export default PriceFormat;