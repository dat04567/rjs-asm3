import React from 'react';
import { Table } from 'react-bootstrap';
import { FaTrashCan } from 'react-icons/fa6';
import { useDispatch, useSelector } from 'react-redux';
import { updateQuanlity } from 'store';
import { PriceFormat, Quantity } from 'components';

function ShoppingCartTable({ classes }) {
   const dispatch = useDispatch();
   const cartItems = useSelector((state) => state.cart.items);

   const updateItem = function (item, type) {
      dispatch(updateQuanlity({ type: type, item: item }));
   };
   
   const handleDeleteItem = function (item, type) {
      dispatch(updateQuanlity({ type: type, item: item }));
   };

   // row item
   const ItemsComponents = cartItems.map((item) => {
      const total = <PriceFormat price={parseInt(item.price) * item.quantity} />;
      const price = <PriceFormat price={item.price} />;
      return (
         <tr key={item._id.$oid}>
            <td>
               <img src={item.img1} className={classes.img} alt="" />
            </td>
            <td className={classes.h1}>{item.name}</td>
            <td>{price}</td>
            <td>
               <Quantity
                  quantity={item.quantity}
                  decrement={updateItem.bind(this, item, 'DECREMENT')}
                  increment={updateItem.bind(this, item, 'INCREMENT')}
               />
            </td>
            <td>{total}</td>
            <td>
               <FaTrashCan
                  onClick={handleDeleteItem.bind(this, item, 'DELETE')}
                  className={classes.delete}
               />
            </td>
         </tr>
      );
   });
   return (
      <>
         <Table variant="light" className={classes.table}>
            <thead>
               <tr>
                  <th>IMAGE</th>
                  <th>PRODUCT</th>
                  <th>PRICE</th>
                  <th>QUANTITY</th>
                  <th>TOTAL</th>
                  <th>REMOVE</th>
               </tr>
            </thead>
            <tbody>{ItemsComponents}</tbody>
         </Table>
      </>
   );
}

export default ShoppingCartTable;
