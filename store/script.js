import { createStore, combineReducers, compose } from "redux";
import { productReducer } from "./slice/productListSlice";
import cartReducer from "./slice/cartSlice";
import { wishListReducer } from "./slice/wishListSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    products: productReducer,
    cartItems: cartReducer,
    wishListItems: wishListReducer,
  },
});

export default store;
