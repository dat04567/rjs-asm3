import React from 'react';
import classes from './LayoutAccount.module.css';
import { Form, Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const LayoutAccount = (props) =>{
   return (
      <div className={classes.account}>
         <Form method="post" className={classes['form-control']}>
            <h2>{props.title}</h2>
            {props.children}
            <Button variant='dark'  className={classes.btn} type="submit" disabled={props.hasError}>
               {props.nameSubmit}
            </Button>
            {props.error && <p style={{ color: 'red' }}>{props.error.message}</p>}
            <p className={classes.footer}>{props.titleFooter} <Link  to={props.linkPage}>{props.nameLinkPage}</Link> </p>
         </Form>
        
      </div>
   );
};

export default LayoutAccount;
