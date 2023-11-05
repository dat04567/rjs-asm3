import { json, redirect } from 'react-router-dom';

export function getTokenDuration() {
  const storedExpirationDate = localStorage.getItem('expiration');
  const expirationDate = new Date(storedExpirationDate);
  const now = new Date();
  const duration = expirationDate.getTime() - now.getTime();
  return duration;
}

export function getAuthToken() {
  const  token = JSON.parse(localStorage.getItem('nameAndToken')) || [];

  if (!token) {
    return null;
  }

  const tokenDuration = getTokenDuration();
  if (tokenDuration < 0) {
    return 'EXPIRED';
  }
  
  return token;
}

export function tokenLoader() {
  const token = getAuthToken();
  if(!token) return null;
  return token;
}

// check page have token 
export function checkAuthLoader() {
  const {token} = getAuthToken();
  if (!token) {
    return redirect('/login');
  }
  return json({token : true},{status : 200})
}

// check if user conver path is /login and register then redirect home page 
export function checkLoaderLoginAndRegister({request})
{
  const {token} = getAuthToken();
  const url = new URL(request.url);
  if(token && (url.pathname === '/login' || url.pathname === '/register')) return redirect('/')
  return json({token : false},{status : 200})
}
