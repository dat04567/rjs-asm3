import React, { useEffect } from 'react';
import {
   RouterProvider,
   createBrowserRouter,
   Route,
   createRoutesFromElements,
} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
   RootLayout,
   ErrorPage,
   RegisterPage,
   LoginPage,
   ShopPage,
   CheckoutPage,
   DetailPage,
   CartPage,
   HomePage,
} from 'pages';

const routes = createRoutesFromElements(
   <>
      <Route
         path="/"
         element={<RootLayout />}
         loader={() => import('./pages/RootLayout').then((module) => module.loader())}
         errorElement={<ErrorPage />}
         id="root">
         <Route index element={<HomePage />} />
         <Route path="shop" element={<ShopPage />} />
         <Route path="detail/:productId" element={<DetailPage />} />
         <Route
            path="cart"
            element={<CartPage />}
            loader={() => import('./util/auth').then((module) => module.checkAuthLoader())}
         />
         <Route
            path="/checkout"
            element={<CheckoutPage />}
            loader={() => import('./util/auth').then((module) => module.checkAuthLoader())}
         />
         <Route
            path="/login"
            element={<LoginPage />}
            action={({ request }) =>
               import('./pages/LoginPage').then((module) => module.action({ request }))
            }
            loader={({ request }) =>
               import('./util/auth').then((module) =>
                  module.checkLoaderLoginAndRegister({ request })
               )
            }
         />
         <Route
            path="/register"
            element={<RegisterPage />}
            action={({ request }) =>
               import('./pages/RegisterPage').then((module) => module.action({ request }))
            }
            loader={({ request }) =>
               import('./util/auth').then((module) =>
                  module.checkLoaderLoginAndRegister({ request })
               )
            }
         />
      </Route>
      <Route
         path="logout"
         action={() => import('./pages/Logout').then((module) => module.action())}></Route>
   </>
);

const router = createBrowserRouter(routes);

function App() {
   const dispatch = useDispatch();
   useEffect(() => {
      async function updateData() {
         const localStorageData = localStorage.getItem('cart');
         if (localStorageData) {
            const parsedData = JSON.parse(localStorageData);
            const updateCart = await import('./store/cart-slice').then((module) =>
               module.updateCart(parsedData)
            );
            dispatch(updateCart);
         }
      }
      updateData();
   }, [dispatch]);
   return <RouterProvider router={router} />;
}
export default App;
