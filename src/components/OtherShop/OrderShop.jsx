import React from "react";
import classes from "./OrderShop.module.css";
import {Button } from "react-bootstrap";
function OtherShop() {
   return (
      <aside className={classes["aside-shop"]}>
         <div className={classes["orther-free-ship"]}>
            <p>
               FREE SHIPPING <span>Free shipping worlwide</span>
            </p>
            <p>
               24 X 7 SERVICE <span>Free shipping worlwide</span>
            </p>
            <p>
               FESTIVAL OFFER <span>Free shipping worlwide</span>
            </p>
         </div>
         <div className={classes["contact"]}>
            <h2>
               LET'S BE FRIENDS!{" "}
               <span>Nisi nisi tempor consequat laboris nisi</span>{" "}
            </h2>
            <form action="" className={classes['subscribe']}>
                  <input type="text" placeholder="Enter your email address" />
                  <Button variant="dark" className={classes['btn']}>Subscribe</Button>
            </form>
         </div>
      </aside>
   );
}

export default OtherShop;
