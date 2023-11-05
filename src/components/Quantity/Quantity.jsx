import React from 'react';
import { FaCaretLeft, FaCaretRight } from 'react-icons/fa6';
import classes from './Quantity.module.css'
function Quantity({decrement, increment,quantity}) {
   return (
      <div className={classes['number-quanlity']}>
         <FaCaretLeft onClick={decrement} values={quantity} className={classes.icon} />
         <span>{quantity}</span>
         <FaCaretRight onClick={increment} values={quantity} className={classes.icon} />
      </div>
   );
}

export default Quantity;
