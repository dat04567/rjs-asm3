import React, { Suspense } from 'react';
import { Await, Form, NavLink, useRouteLoaderData } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import classes from './MainNavigation.module.css';
import { FaCaretDown, FaCartFlatbed, FaUser } from 'react-icons/fa6';
function MainNavigation() {
   // get token to check 
   const { token } = useRouteLoaderData('root');

   return (
      <header className={classes.header}>
         <Container>
            <nav className={classes['nav']}>
               <ul className={classes.list}>
                  <div className={classes['nav-item-left']}>
                     <li>
                        <NavLink
                           to="/"
                           className={({ isActive }) => (isActive ? classes.active : undefined)}
                           end>
                           Home
                        </NavLink>
                     </li>
                     <li>
                        <NavLink
                           to="/shop"
                           className={({ isActive }) => (isActive ? classes.active : undefined)}
                           end>
                           Shop
                        </NavLink>
                     </li>
                  </div>
                  <li className={classes['title']}>BOUTIQUE</li>
                  <div className={classes['nav-item-right']}>
                     <li>
                        <NavLink
                           to="/cart"
                           className={({ isActive }) => (isActive ? classes.active : undefined)}
                           end>
                           <FaCartFlatbed className={classes['icon-cart']} />
                           Cart
                        </NavLink>
                     </li>
                     <li className={classes.user}>
                        <Suspense>
                           <Await resolve={token}>
                              {(token) =>
                                 token.token ? (
                                    <>
                                       <FaUser className={classes['icon-user']} />
                                       <span className={classes.name}>
                                          {token.name}
                                          <FaCaretDown />
                                       </span>
                                       <Form action="/logout" method="post">
                                          <button className={classes.btn}>(Logout)</button>
                                       </Form>
                                    </>
                                 ) : (
                                    <NavLink
                                       to="/login"
                                       className={({ isActive }) =>
                                          isActive ? classes.active : undefined
                                       }
                                       end>
                                       <FaUser className={classes['icon-user']} />
                                       Login
                                    </NavLink>
                                 )
                              }
                           </Await>
                        </Suspense>
                     </li>
                  </div>
               </ul>
            </nav>
         </Container>
      </header>
   );
}

export default MainNavigation;
