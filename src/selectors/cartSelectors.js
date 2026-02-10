export const selectCartItemsDetailed = (state) => {
  return state.cartItems.map((cartItem) => {

    const product = state.products[cartItem.productId - 1];
    return {
      ...product,
      quantity: cartItem.quantity,
    };
  });
};
