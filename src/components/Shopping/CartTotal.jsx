import { PriceFormat } from 'components';
import React from 'react';
import { useSelector } from 'react-redux';
import classes from './CartTotal.module.css'
import { Button } from 'react-bootstrap';
import { FaGift } from 'react-icons/fa6';

function CartTotal() {
   const cartItems = useSelector((state) => state.cart.items);
   // sum price 
   const total = cartItems.map( (item) => {return {quantity: item.quantity , price : item.price } })
   const sum = total.reduce( (acc, obj) => acc + (obj.quantity*obj.price),0 );
   const sumPrice = <PriceFormat  price={sum}/>
   return <div className={classes['cart-total']}>
      <h3>CART TOTAL</h3>
      <p>SUBTOTAL {sumPrice}</p>
      <p>TOTAL {sumPrice}</p>
      <input type="text" className={classes.input} placeholder='Enter you coupou' />
      <Button variant='dark' className={classes.btn}><FaGift /> <span>Apply coupon</span> </Button>
   </div>;
}

export default CartTotal;