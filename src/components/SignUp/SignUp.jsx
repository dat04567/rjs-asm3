import LayoutAccount from 'components/LayoutAccount/LayoutAccount';
import useInput from 'hook/use-input';
import React, { useCallback, useEffect, useState } from 'react';
import { useActionData } from 'react-router-dom';
const isEmpty = (value) => {
   return { empty: value.trim() !== '' };
};
const isInputPassword = (value) => ({ empty: value.trim() !== '', isPass: value.length < 8 });
// check number 
const isNumber = (value) => ({ empty: value.trim() !== '',  isNumber : !/^\d+$/.test(value)})

function SignUp() {
   const [isEmail, setEmail] = useState(false);
   const {
      value: valueFullname,
      valueChangeHandler: fullNameHandleChange,
      inputBlurHandler: fullnameHandleBlur,
      isEmpty: fullnameIsEmpty,
      isTouched: fullnameIsTouched,
   } = useInput(isEmpty);
   // save email 
   const checkInputEmail = useCallback((value) => ({ empty: value.trim() !== '', isEmail: isEmail }) ,[isEmail]);

   const {
      value: valueEmail,
      valueChangeHandler: EmailHandleChange,
      inputBlurHandler: EmailHandleBlur,
      isEmpty: emailIsEmpty,
      isTouched: emailIsTouched,
      reset: resetEmail,
      isValue : isValueEmail,
   } = useInput(checkInputEmail);
   const {
      value: valuePassword,
      valueChangeHandler: passwordHandleChange,
      inputBlurHandler: passwordHandleBlur,
      isEmpty: passwordIsEmpty,
      isTouched: passwordIsTouched,
      reset: resetPassword,
      isValue : isValuePassword
   } = useInput(isInputPassword);
   const {
      value: valuePhone,
      valueChangeHandler: PhoneHandleChange,
      inputBlurHandler: PhoneHandleBlur,
      isEmpty: phoneIsEmpty,
      isTouched: phoneIsTouched,
      isValue : isValuePhone
   } = useInput(isNumber);
   const hasError = fullnameIsEmpty || emailIsEmpty || passwordIsEmpty || phoneIsEmpty;
   const dataError = useActionData();
   // valide email
   // set effect password is error password and email 
   useEffect(() => {
      if (dataError) {
         if (dataError.isPasswordText) {
            resetPassword();
         }
         if (dataError.isEmail) {
            setEmail(dataError.isEmail);
            resetEmail();
         }
      }
   }, [dataError, resetEmail, resetPassword]);

   // check validate 
   const isEmptyPass = passwordIsEmpty && passwordIsTouched;
   const isInputPass = isValuePassword && passwordIsTouched && !passwordIsEmpty;
   const isInputEmail = emailIsEmpty && isValueEmail &&  !emailIsTouched;
   // console.log(isEmail);
   return (
      <>
         <LayoutAccount
            title="Sign Up"
            nameLinkPage="Click"
            linkPage="/login"
            titleFooter="Login?"
            nameSubmit="SIGN UP"
            hasError={hasError}>
            <label htmlFor="">
               <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  value={valueFullname}
                  onChange={fullNameHandleChange}
                  onBlur={fullnameHandleBlur}
               />
               {fullnameIsEmpty && fullnameIsTouched && (
                  <p style={{ color: 'red' }}>Please enter full name</p>
               )}
            </label>

            <label htmlFor="">
               <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  value={valueEmail}
                  onChange={EmailHandleChange}
                  onBlur={EmailHandleBlur}
               />
               {emailIsEmpty && emailIsTouched &&  (
                  <p style={{ color: 'red' }}>Please enter email </p>
               )}
               {isInputEmail && <p style={{ color: 'red' }}>Email has been used</p>}
            </label>
            <label htmlFor="">
               <input
                  type="text"
                  name="password"
                  placeholder="Password"
                  value={valuePassword}
                  onChange={passwordHandleChange}
                  onBlur={passwordHandleBlur}
               />
               {isEmptyPass && <p style={{ color: 'red' }}>Please enter password </p>}
               { (isInputPass)  && <p style={{ color: 'red' }}>The password must be at least 8 characters</p>}
            </label>
            <label htmlFor="">
               <input
                  type="text"
                  name="phone"
                  placeholder="Phone"
                  value={valuePhone}
                  onChange={PhoneHandleChange}
                  onBlur={PhoneHandleBlur}
               />
               {phoneIsEmpty && phoneIsTouched && (
                  <p style={{ color: 'red' }}>Please enter phone </p>
               )}
               {isValuePhone && !phoneIsEmpty && phoneIsTouched &&  <p style={{ color: 'red' }}>The phone must a number</p>}
            </label>
         </LayoutAccount>
      </>
   );
}

export default SignUp;
