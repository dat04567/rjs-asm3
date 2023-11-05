import React from 'react';
import classes from './Categories.module.css';

// default menu items 
const menuItems = {
   'IPHONE & MAC': ['Iphone', 'Ipad', 'Macbook'],
   "WIRELESS": ['Airpod', 'Watch'],
   "OTHER": ['Mouse', 'Keyboard', 'Other'],
};

function NavigationCategories({handleGenre}) {
   return (
      <div className={classes['nav-container']}>
         <h2>CATEGORIES</h2>
         <h3>APPLE</h3>
         <nav className={classes['nav-categories']}>
            <ul>
               <li onClick={handleGenre.bind(this, 'All')}>All</li>
               {/* print menu  */}
               {Object.keys(menuItems).map((item, index) => (
                  <li key={index} className={classes['menu-items']}>
                     <span> {item}</span>
                     <ul >
                        {menuItems[item].map((value, index) => (
                           <li key={index} onClick={handleGenre.bind(this, value)}>
                              {value}
                           </li>
                        ))}
                     </ul>
                  </li>
               ))}
            </ul>
         </nav>
      </div>
   );
}

export default NavigationCategories;
