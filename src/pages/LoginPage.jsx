import { AutForm } from 'components';
import React from 'react';
import { json, redirect } from 'react-router-dom';
function LoginPage() {
   return (
      <>
         <AutForm />
      </>
   );
}

// token using random string
function makeid(length) {
   let result = '';
   const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   const charactersLength = characters.length;
   let counter = 0;
   while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
   }
   return result;
}
export default LoginPage;

export async function action({ request }) {
   const data = await request.formData();
   const authData = {
      email: data.get('email'),
      password: data.get('password'),
   };

   const arrData = JSON.parse(localStorage.getItem('arrAccount')) || [];

   const existAccount = arrData.find(
      (item) => item.email === authData.email && item.password === authData.password
   );
   // Login information is incorrect
   if (!existAccount) {
      return json( {message : "Login information is incorrect" },{ status : 401 });
   }
   const token = makeid(20);
   localStorage.setItem('nameAndToken', JSON.stringify({token : token , name : existAccount.fullName}));
   // set time  out 
   const expiration = new Date();
   expiration.setHours(expiration.getHours() + 1);
   localStorage.setItem('expiration', expiration.toISOString());
   alert('Successfully logged in');
   return redirect('/');
}

