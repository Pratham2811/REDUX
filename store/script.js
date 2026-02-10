import { createStore, combineReducers, compose } from "redux";
import { productReducer } from "./slice/productListSlice";
import { cartReducer } from "./slice/cartSlice";
import { wishListReducer } from "./slice/wishListSlice";
import { addToWishList, removeFromWishList } from "./slice/wishListSlice";
import {
  addItemToCart,
  removeItemFromCart,
  increaseItemQuantity,
  decreaseItemQuantity,
} from "./slice/cartSlice";

const reducer = combineReducers({
  products: productReducer,
  cartItems: cartReducer,
  wishListItems: wishListReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers());

store.subscribe(() => {});

export default store;
