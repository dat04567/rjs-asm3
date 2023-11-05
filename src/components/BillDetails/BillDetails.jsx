import React from 'react';
import classes from './BillDetails.module.css';
import { FormBillDetails, YourOrder } from 'components';
function BillDetails() {
   return (
      <>
         <h2 className={classes.h2}>BILLING DETAILS</h2>
         <div className={classes.bill}>
            <FormBillDetails />
            <YourOrder />
         </div>
      </>
   );
}

export default BillDetails;
