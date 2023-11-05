import React from "react";
import ModalProduct from "./ModalProduct";
import classes from "./TrendingProducts.module.css";

function TrendingProducts({ products }) {
   return (
      <section className={classes["modal-product-container"]}>
         <div className={classes["product-title"]}>
            <p>MAKE THE HARD WAY</p>
            <h2>TOP TRENDING PRODUCTS</h2>
         </div>   
         {products?.map((product, index) => (
            <ModalProduct key={index} product={product} />
         ))}
      </section>
   );
}

export default TrendingProducts;
