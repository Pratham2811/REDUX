import { product } from "../../productApi";

export const CART_ADD_ITEM = "cart/addItem";
export const CART_REMOVE_ITEM = "cart/removeItem";
export const CART_ITEM_INCREASE_QUANTITY = "cart/increaseQuantity";
export const CART_ITEM_DECREASE_QUANTITY = "cart/decreaseQuantity";

export function addItemToCart(productId, quantity = 1) {
  return {
    type: CART_ADD_ITEM,
    payload: {
      productId: productId,
      quantity: quantity,
    },
  };
}

export function removeItemFromCart(productId) {
  return {
    type: CART_REMOVE_ITEM,
    payload: { productId },
  };
}
export function increaseItemQuantity(productId) {
  return {
    type: CART_ITEM_INCREASE_QUANTITY,
    payload: { productId },
  };
}
export function decreaseItemQuantity(productId) {
  return {
    type: CART_ITEM_DECREASE_QUANTITY,
    payload: { productId },
  };
}

export function cartReducer(state = [], action) {
  switch (action.type) {
    case CART_ADD_ITEM:
      const findExistingItem = state.find(
        (cartItem) => cartItem.productId === action.payload.productId,
      );
      if (findExistingItem) {
        return state.map((cartItem) => {
          if (cartItem.productId === action.payload.productId) {
            return { ...cartItem, quantity: cartItem.quantity + 1 };
          }
          return cartItem;
        });
      } else {
        return [...state, action.payload];
      }

    case CART_REMOVE_ITEM:
      return state.filter(
        (item) => item.productId !== action.payload.productId,
      );

    case CART_ITEM_INCREASE_QUANTITY:
      return state.map((item) =>
        item.productId === action.payload.productId
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      );

    case CART_ITEM_DECREASE_QUANTITY: {
      return state
        .map((item) => {
          if (item.productId === action.payload.productId) {
            return { ...item, quantity: item.quantity - 1 };
          }
          return item;
        })
        .filter((item) => item.quantity > 0);
    }

    default:
      return state;
  }
}
