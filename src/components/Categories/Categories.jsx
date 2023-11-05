import React, { useState } from 'react';
import NavigationCategories from './NavigationCategories';
import Card from 'components/Cart/Card';
import classes from './Categories.module.css';
import { Form,Pagination } from 'react-bootstrap';
function Categories({ products }) {
   const [data, setData] = useState(products);
   const handleGenre = function (value) {
      filteredData(value);
   };

   const filteredData = function (selected) {
      // if different categories all then check category with selected category filter data 
      if (selected) {
         if (!selected.includes('All')) {
            const filteredData = products.filter(({ category }) => category.toLowerCase() === selected.toLowerCase());
            setData(() => [...filteredData]);
         } else {
            setData(products);
         }
      }
   };

   return (
      <section className={classes['categories']}>
         <NavigationCategories handleGenre={handleGenre} />
         <div className={classes['categories-product-list']}>
            <div className={classes['search-sort']}>
               <Form.Control placeholder="Enter Search Here!" className={classes['form-control']} />
               <Form.Select aria-label="Default select example">
                  <option>Default sorting</option>
                  <option value="desc">Low to high</option>
                  <option value="asc">High to low</option>
               </Form.Select>
            </div>
            {data.map((product, index) => (
               <Card key={index} product={product} classes={classes} />
            ))}
         </div>
         <div className={classes.pagination}>
            <Pagination>
               <Pagination.First />
               <Pagination.Item className={classes['item']}>{1}</Pagination.Item>
               <Pagination.Last />
            </Pagination>
            <p>Showing 1-9 of 9 result</p>
         </div>
      </section>
   );
}

export default Categories;
