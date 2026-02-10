import { createSlice } from "@reduxjs/toolkit";
const findItem = (state, action) => {
  return state.find((item) => item.productId === action.payload.productId);
};
const whishListSlice = createSlice({
  name: "wishList",
  initialState: [],
  reducers: {
    addToWishList(state, action) {
      const exsistItem = findItem(state, action);
      if (exsistItem) {
        console.log(exsistItem);

        return state.filter(
          (item) => item.productId !== action.payload.productId,
        );
      } else {
        state.push(action.payload);
      }
    },
    removeFromWishList(state, action) {
      return state.filter(
        (item) => item.productId !== action.payload.productId,
      );
    },
  },
});
export const { addToWishList, removeFromWishList } = whishListSlice.actions;
const wishListReducer = whishListSlice.reducer;
export default wishListReducer;
