import React from 'react';
import classes from './ProductDescription.module.css';
import { Button } from 'react-bootstrap';
function ProductDescription({ product }) {
   return (
      <>
         <Button className={classes['btn']} variant="dark">
            DESCRIPTION
         </Button>
         <h3 className={classes['h3']}>PRODUCT DESCRIPTION</h3>
         <pre className={classes['pre']}>{product.long_desc}</pre>
      </>
   );
}

export default ProductDescription;
