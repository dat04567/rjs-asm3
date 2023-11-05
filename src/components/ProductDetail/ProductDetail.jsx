import React, { useState } from 'react';
import classes from './ProductDetail.module.css';
import { Form, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addItemToCart } from 'store';
import { PriceFormat, Quantity } from 'components';
import { tokenLoader } from 'util/auth';

function ProductDetail({ product }) {
   const [quantity, setQuantity] = useState(1);
   const {token} =  tokenLoader();
   const navigate = useNavigate();
   const dispatch = useDispatch();

   const price = <PriceFormat price={product.price}/>;
   // handle quanlity  change

   const addItem = function () {
      setQuantity(() => quantity + 1);
   };
   const decrementQuanlity = function () {
      if (quantity - 1 > 0) {
         setQuantity(() => quantity - 1);
      }
   };

   const addItemHandler = async (event) => {
      event.preventDefault();
      if(!token)
         navigate('/login');
      else 
         dispatch(addItemToCart({ ...product, quantity }));
   };

   return (
      <div className={classes['product-detail']}>
         <h1>{product.name}</h1>
         <p>{price}</p>
         <p>{product.short_desc}</p>
         <h5>
            CATEGORY: <span>{product.category} </span>
         </h5>
         <Form className={classes.form}>
            <div className={classes.quanlity}>
               <div className={classes.text}>QUANTITY</div>
               <Quantity  decrement={decrementQuanlity} increment={addItem} quantity={quantity}/>
            </div>
            <Button variant="dark" className={classes['btn']} type="submit" onClick={addItemHandler}>
               Add to cart
            </Button>
         </Form>
      </div>
   );
}

export default ProductDetail;
