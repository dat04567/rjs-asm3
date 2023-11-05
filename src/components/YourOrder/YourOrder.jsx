import React from 'react';
import { useSelector } from 'react-redux';
import classes from './YourOrder.module.css';
import { PriceFormat } from 'components';

function YourOrder() {
   const items = useSelector((state) => state.cart.items);
   const total = items.reduce(  (acc, obj) => acc + (obj.quantity*obj.price),0)
   return (
      <div className={classes.order}>
         <h2>YOUR ORDER</h2>
         {items.map((item) => (
            <p className={classes['order-item']} key={item._id.$oid}>
               {item.name} <PriceFormat price={item.price} /> <span>x {item.quantity}</span>
            </p>
         ))}
         <p className={classes.total}> <span>TOTAL</span>  <PriceFormat price={total} /></p>
      </div>
   );
}

export default YourOrder;
