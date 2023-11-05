import { createSlice } from '@reduxjs/toolkit';


const updateCartToLocalStorage = function (items, totalQuantity) {
   localStorage.setItem('cart', JSON.stringify({ items: items, totalQuantity: totalQuantity }));
};

const cartSlice = createSlice({
   name: 'cart',
   initialState: {
      items: [],
      totalQuantity: 0,
   },
   reducers: {
      updateQuanlity(state, action) {
         const { type, item } = action.payload;
         const targetItem = state.items.find((obj) => obj._id.$oid === item._id.$oid);
         // delete item
         const deleteItem = function () {
            state.items = state.items.filter((obj) => obj._id.$oid !== item._id.$oid);
            updateCartToLocalStorage(state.items, state.totalQuantity);
         };
         switch (type) {
            case 'INCREMENT': {
               targetItem.quantity += 1;
               state.totalQuantity += 1;
               updateCartToLocalStorage(state.items, state.totalQuantity);
               break;
            }
            case 'DECREMENT': {
               targetItem.quantity -= 1;
               state.totalQuantity -= 1;
               // if decreitem 0 delete item
               if (targetItem.quantity === 0) {
                  deleteItem();
               }
               updateCartToLocalStorage(state.items, state.totalQuantity);
               break;
            }
            case 'DELETE': {
               deleteItem();
               break;
            }
            default:
               break;
         }
      },
      addItemToCart(state, action) {
         const newItem = action.payload;
         if (newItem.quantity > 0) {
            // find item if exit then quantity increase else push new item
            const existingItem = state.items.find((item) => item._id.$oid === newItem._id.$oid);
            // sum quantity
            state.totalQuantity += newItem.quantity;
            if (!existingItem) {
               state.items.push(newItem);
            } else {
               existingItem.quantity += newItem.quantity;
            }
            localStorage.setItem('cart', JSON.stringify({ items: state.items, totalQuantity: state.totalQuantity }));
            alert('You success add to cart');
         } else {
            alert('Quantity it not valid');
         }
      },

      //  update state localStorage
      updateCart(state, action) {
         const { items, totalQuantity } = action.payload;
         state.items = items;
         state.totalQuantity = totalQuantity;
      },
   },
});

export const { updateCart, addItemToCart, updateQuanlity } = cartSlice.actions;

export default cartSlice;
