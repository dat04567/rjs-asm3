import { redirect } from 'react-router-dom';

export function action() {
  localStorage.removeItem('nameAndToken');
  localStorage.removeItem('expiration');
  localStorage.removeItem('cart');
  return redirect('/');


}