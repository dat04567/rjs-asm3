import React from 'react';
import { ProductDescription, ProductDetail, RelatedProduct, ThumbsGallery } from 'components';
import classes from './SingleProduct.module.css'
function SingleProduct({product}) {
   return (
      <>
         <article className={classes['single-product']}>
            <ThumbsGallery product={product} />
            <ProductDetail product={product} />
         </article>
         <article className={classes.description}>
            <ProductDescription product={product} />
         </article>
         <article>
            <RelatedProduct product={product} />
         </article>
      </>
   );
}

export default SingleProduct;
