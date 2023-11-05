import useInput from 'hook/use-input';
import React, { useEffect } from 'react';
import { useActionData } from 'react-router-dom';
import LayoutAccount from 'components/LayoutAccount/LayoutAccount';
// check emtpy 
const isEmpty = (value) => {
   return { empty: value.trim() !== '' };
};

function AuthForm() {
   const {
      value: passwordValue,
      isEmpty: isEmptyPassword,
      valueChangeHandler: passwordChangeHandler,
      inputBlurHandler: passwordBlurHandler,
      isTouched: isTouchedPassword,
      reset: resetPassword,
   } = useInput(isEmpty);

   const {
      value: enteredEmail,
      isEmpty: isEmptyEmail,
      isTouched: isTouchedEmail,
      valueChangeHandler: emailChangeHandler,
      inputBlurHandler: emailBlurHandler,
   } = useInput(isEmpty);
   const hasErro = isEmptyEmail || isEmptyPassword;
   const dataError = useActionData();
   // reset password if have error message 
   useEffect(() =>{
         if(dataError && dataError.message)
         {
            resetPassword();
         }
        
   },[dataError,resetPassword])

   return (
      <LayoutAccount
         title="Sign In"
         hasError={hasErro}
         error={dataError}
         linkPage="/register"
         titleFooter="Create an account?"
         nameLinkPage="Sign up"
         nameSubmit="SIGN IN">
        
         <label htmlFor="">
            <input
               type="text"
               name="email"
               placeholder="Email"
               value={enteredEmail}
               onChange={emailChangeHandler}
               onBlur={emailBlurHandler}
            />
            {isEmptyEmail && isTouchedEmail && <p style={{ color: 'red' }}>Please enter a email</p>}
         </label>
         <label htmlFor="">
            <input
               type="password"
               name="password"
               placeholder="Password"
               value={passwordValue}
               onBlur={passwordBlurHandler}
               onChange={passwordChangeHandler}
            />
            {isEmptyPassword && isTouchedPassword && (
               <p style={{ color: 'red' }}>Please enter a password</p>
            )}
         </label>
      </LayoutAccount>
   );
}

export default AuthForm;
