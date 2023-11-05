import React from "react";
import classes from "./ProductsCategories.module.css";
import imgs from "../../images";
import { Link } from "react-router-dom";

function ProductsCategories() {
   return (
      <section className={classes["categories"]}>
         <p>Carefully created collections</p>
         <h2>BROWSE OUR CATEGORIES</h2>
         <div className={classes["img-container"]}>
            {/* get all imges and render img */}
            {imgs.map((img, index) => (
               <Link
                  to="/shop"
                  className={classes[`item-${index + 1}`]}
                  key={index}
               >
                  <img src={img} alt="" />
               </Link>
            ))}
         </div>
      </section>
   );
}

export default ProductsCategories;
