import React, { useState } from 'react';
import classes from './ModalProduct.module.css';
import { Modal, Button } from 'react-bootstrap';
import { FaCartShopping, FaXmark } from 'react-icons/fa6';
import { PriceFormat } from 'components';


function ModalProduct({ product }) {
   const [show, setShow] = useState(false);
   // handle modal
   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);
   const price = <PriceFormat price={product.price} />;
   return (
      <>
         <article className={`${classes.article}`} onClick={handleShow}>
            <div className={classes['product-info']}>
               <img src={product.img1} className={classes.img} alt="" />
               <h3>{product.name}</h3>
               <p>{price}</p>
            </div>
         </article>
         <Modal show={show} onHide={handleClose} centered dialogClassName={classes['modal-90w']}>
            <Modal.Body className={classes['modal-body']}>
               <FaXmark className={classes['x-mark']} onClick={handleClose} />
               <img src={product.img1} alt="" />
               <div className={classes['modal-body-info']}>
                  <h3>{product.name}</h3>
                  <h4>{price}</h4>
                  <p>{product.short_desc}</p>
                  <Button variant="dark" className={classes['btn']}>
                     <FaCartShopping />
                     <h2> View Detail</h2>
                  </Button>
               </div>
            </Modal.Body>
         </Modal>
      </>
   );
}

export default ModalProduct;
