import {
   Outlet,
   useLoaderData,
   Await,
   json,
   defer,
   useLocation,
   useSubmit,   
} from 'react-router-dom';
import React, { Suspense, useEffect } from 'react';
import { MainNavigation, Footer } from 'components';
import { Container } from 'react-bootstrap';
import { getTokenDuration } from '../util/auth';

function RootLayout() {
   const { products } = useLoaderData();
   const location = useLocation();
   const {token} = useLoaderData();
   const submit = useSubmit();

   useEffect(() => {
     if (!token) {
       return;
     }
 
     if (token === 'EXPIRED') {
       submit(null, { action: '/logout', method: 'post' });
       return;
     }

     const tokenDuration = getTokenDuration();
     setTimeout(() => {
       submit(null, { action: '/logout', method: 'post' });
     }, tokenDuration);
   }, [token, submit]);
 
   // set background image when localtion login and sign up
   const isLoginSignUp = location.pathname === '/login' || location.pathname === '/register';
   return (
      <>
         <MainNavigation />
         <Container fluid={isLoginSignUp}>
            <main>
               <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
                  <Await resolve={products}>
                     {(loadProduct) => <Outlet context={{ loadProduct }} />}
                  </Await>
               </Suspense>
            </main>
         </Container>
         <Footer />
      </>
   );
}

export default RootLayout;

//  fetch infomation using loader
async function loadProducts() {
   const response = await fetch(
      'https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74'
   );
   if (!response.ok) {
      throw json(
         { message: 'Fail to fetch' },
         {
            status: 500,
         }
      );
   }
   const resData = await response.json();
   return resData;
}

// get token

async function getToken() {
   const tokenAndName = await import('../util/auth');
   const {token,name} = tokenAndName.tokenLoader();
   return {token,name};
}




// defer loader
export function loader() {
   return defer({
      products: loadProducts(),
      token: getToken(),
   });
}
