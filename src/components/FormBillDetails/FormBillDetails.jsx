import React from 'react';
import classes from './FormBillDetails.module.css'
import { Form } from 'react-router-dom';
function FormBillDetails() {
   return (
      <Form className={classes.form}>
         <label htmlFor="fullname">
            <span> FULL NAME</span>
            <input
               type="text"
               name="fullName"
               id="fullname"
               placeholder="Enter Your Full Name Here!"
            />
         </label>
         <label htmlFor="email">
            <span> EMAIL:</span>
            <input type="text" name="email" id="email" placeholder="Enter Your Email Here!" />
         </label>
         <label htmlFor="phone">
            <span>PHONE NUMBER:</span>
            <input
               type="text"
               name="phoneNumber"
               id="phone"
               placeholder="Enter Your Phone Number Here!"
            />
         </label>
         <label htmlFor="fullname">
            <span> ADDRESS:</span>
            <input
               type="text"
               name="fullName"
               id="fullname"
               placeholder="Email Your Full Name Here!"
            />
         </label>
         <button>Place order</button>
      </Form>
   );
}

export default FormBillDetails;
