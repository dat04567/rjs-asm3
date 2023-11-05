import React from "react";
import classes from "./Footer.module.css";

// initialize footer array
const footer = [
   {
      titleFooter: "CUSTOMER SERVICES",
      infoFooter: [
         "Help & Contact Us",
         "Returns & Refunds",
         "Online Stores",
         "Terms & Conditions",
      ],
   },
   {
      titleFooter: "COMPANY",
      infoFooter: ["What We Do", "Avaiable Services", "Latest Posts", "FAQs"],
   },
   {
      titleFooter: "SOCIAL MEDIA",
      infoFooter: ["Twitter", "Instagram", "Facebook", "Pinterest"],
   },
];

function Footer() {
   return (
      <section className={classes['footer']}>
         {/* map object item */}
         {footer.map((item, index) => (
            <article key={index} className={classes['footer-info']}>
               <h2>{item.titleFooter}</h2>
               <ul>
                  {item.infoFooter.map((value, indexInfo) => (
                     <li key={indexInfo}>{value}</li>
                  ))}
               </ul>
            </article>
         ))}
      </section>
   );
}

export default Footer;
