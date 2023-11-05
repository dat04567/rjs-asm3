import { SignUp } from 'components';
import React from 'react';
import { json, redirect } from 'react-router-dom';

function RegisterPage() {
   return (
      <>
         <SignUp />
      </>
   );
}

export default RegisterPage;

export async function action({ request }) {
   const data = await request.formData();
   const authData = {
      fullName: data.get('fullName'),
      email: data.get('email'),
      password: data.get('password'),
      phone: data.get('phone'),
   };

   const arrData = JSON.parse(localStorage.getItem('arrAccount')) || [];
   const found = arrData.some((item) => item.email === authData.email);
   const isPassword = authData.password.length < 8;
   const isNumber = !/^\d+$/.test(authData.phone); 
   // check email and password
   if (found || isPassword || isNumber) {
      const check = { isPassword: isPassword, isEmail: found, isNumber : isNumber };
      return json(check, { status: 401 });
   }
   // push data
   arrData.push(authData);
   localStorage.setItem('arrAccount', JSON.stringify(arrData));
   alert('Sign Up Success');
   return redirect('/login');
}
