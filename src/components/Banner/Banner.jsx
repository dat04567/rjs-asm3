import React from "react";
import classes from "./Banner.module.css";
import { useNavigate } from "react-router-dom";
function Banner() {
   const navigate = useNavigate();


   return (
      <section className={classes["banner"]}>
         <div>
            <p>New Inspiration 2020</p>
            <h1>20% OFF ON NEW SEASON</h1>
            <button onClick={() => navigate('/shop')}>Browse collections</button>
         </div>
      </section>
   );
}

export default Banner;
