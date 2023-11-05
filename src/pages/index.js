import { lazy } from 'react';

export {default as ErrorPage} from './Erro'
export {default as ShopPage} from './ShopPage'
export {default as HomePage} from './HomePage'
export {default as DetailPage} from './DetailPage'
export {default as CheckoutPage} from './CheckoutPage'

// lazy loading 
const CartPage = lazy(() => import('./CartPage'));
const LoginPage = lazy(() => import('./LoginPage'));
const RegisterPage= lazy(() => import('./RegisterPage'));
const RootLayout = lazy(() => import('./RootLayout'));


export {CartPage,RootLayout,LoginPage,RegisterPage};

