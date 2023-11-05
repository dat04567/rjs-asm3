import React from "react";
import classes from './BannerShop.module.css'

function BannerShop({name,checkout}) {
   return (
      <div className={classes['banner-shop']}>
         <h1>{name}</h1>
         <button className={classes.btn} disabled>{checkout}{name}</button>
      </div>
   );
}
export default BannerShop;
