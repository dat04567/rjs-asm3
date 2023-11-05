import React from 'react';
import classes from './ThumbsGallery.module.css';
function ThumbsGallery({ product }) {
   const image = [product.img1, product.img2, product.img3, product.img4 ]
   // random image
   const img_item = image[Math.floor(Math.random()*image.length)]
   return (
      <div className={classes.thumbsgallery}>
         <div className={classes['thumbsgallery-images']}> 
            <img src={product.img1} alt="" />
            <img src={product.img2} alt="" />
            <img src={product.img3} alt="" />
            <img src={product.img4} alt="" />
         </div>
         <img src={img_item} className={classes.img1} alt="" />
      </div>
   );
}

export default ThumbsGallery;
