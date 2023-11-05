
import { Card } from 'components';
import React from 'react';
import { useOutletContext } from 'react-router-dom';
import classes from './RelatedProduct.module.css'

function RelatedProduct({product}) {
   const {loadProduct} = useOutletContext();
   // filter categories the like category
   const filterProduct = loadProduct.filter( (item) => item.category === product.category && item._id.$oid !== product._id.$oid);
   return <>
      <h3 className={classes['h3']}>RELATED PRODUCTS</h3>
      <div className={classes['related-product']}> 
         {filterProduct.map( (item,index) => <Card product={item} key={index} classes={classes} />)}
      </div>

   </>;
}

export default RelatedProduct;