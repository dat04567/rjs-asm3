import { PriceFormat } from 'components';
import React from 'react';
import { Link } from 'react-router-dom';
 
function Card({ product, classes }) {
   const price = <PriceFormat price= {product.price} />;
   return (
      <>
         <Link to={`/detail/${product._id.$oid}`} className={`${classes.article} `}  >
            <div className={classes['product-info']}>
               <img src={product.img1} className={classes.img} alt="" />
               <h3>{product.name}</h3>
               <p>{price}</p>
            </div>
         </Link>
      </>
   );
}

export default Card;
