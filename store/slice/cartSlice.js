import { createSlice } from "@reduxjs/toolkit";

const findItemIndex = (state, action) => {
  return state.findIndex((item) => item.productId === action.payload.productId);
};

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addItemToCart(state, action) {
      const exsistItemIndex = findItemIndex(state, action);

      if (exsistItemIndex !== -1) {
        state[exsistItemIndex].quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },

    removeItemFromCart(state, action) {
      return state.filter((item) => {
        return item.productId !== action.payload.productId;
      });
    },
    increaseItemQuantity(state, action) {
      const exsistItemIndex = findItemIndex(state, action);
      console.log(exsistItemIndex);

      state[exsistItemIndex].quantity += 1;
    },
    decreaseItemQuantity(state, action) {
      const exsistItemIndex = findItemIndex(state, action);
      state[exsistItemIndex].quantity -= 1;
      if(state[exsistItemIndex].quantity===0){
        state.splice(exsistItemIndex,1)

      }
    },
  },
});
export const {
  addItemToCart,
  removeItemFromCart,
  increaseItemQuantity,
  decreaseItemQuantity,
} = cartSlice.actions;
const cartReducer= cartSlice.reducer
export default  cartReducer;
