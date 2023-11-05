import React from 'react';
import classes from './ShoppingCart.module.css';
import CartTotal from './CartTotal';
import ShoppingCartTable from './ShoppingCartTable';
import { FaLeftLong, FaRightLong } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';

function ShoppingCart() {
   const navigate = useNavigate();
   const handleContinue = function () {
      navigate('/shop');
   };
   const handleCheckout = function () {
      navigate('/checkout');
   };

   return (
      <>
         <div>
            <h2 className={classes.h2}>SHOPPING CART</h2>
            <div className={classes.shopping}>
               <ShoppingCartTable classes={classes} />
               <CartTotal />
            </div>
            <div className={classes.link}>
               <button onClick={handleContinue}>
                  <FaLeftLong /> Continue shopping
               </button>
               <button onClick={handleCheckout}>
                  Proceed to checkout <FaRightLong />
               </button>
            </div>
         </div>
      </>
   );
}

export default ShoppingCart;
