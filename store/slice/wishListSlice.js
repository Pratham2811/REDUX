import { createSlice } from "@reduxjs/toolkit";
import { product } from "../../productApi";

export const WISHLSIT_ADD_ITEM = "wishList/addItem";
export const WISHLIST_REMOVE_ITEM = "wishList/removeItem";

export function addToWishList(productId) {
  return { type: WISHLSIT_ADD_ITEM, payload: { productId: productId } };
}
export function removeFromWishList(productId) {
  return { type: WISHLIST_REMOVE_ITEM, payload: { productId: productId } };
}
export function wishListReducer(state = [], action) {
  switch (action.type) {
    case WISHLSIT_ADD_ITEM:
      const exsistingWishListItem = state.find((item) => {
        return item.productId === action.payload.productId;
      });
      if (exsistingWishListItem) {
        return state.filter((item) => {
          return item.productId !== action.payload.productId;
        });
      }
      return [...state, action.payload];
    case WISHLIST_REMOVE_ITEM:
      return state.filter((wishListItem) => {
        return wishListItem.productId !== action.payload.productId;
      });
  }
  return state;
}
const findItem=(state,action)=>{
  return state.find((item)=>item.productId===action.payload.productId)
}
const whishListSlice=createSlice({
  name:"wishList",
  initialState:[],
  reducers:{
    addToWishList(state,action){
       const exsistItem=findItem(state,action)
       if(exsistItem){
        
       }
    },
    removeFromWishList(state,action){

    }
  }
})