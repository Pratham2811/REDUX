export const selectWishlistItemsDetailed = (state) => {
  console.log(state);
  
  const wishlist = state.wishListItems ?? [];
  const products = state.products ?? [];
  const wishListwithProducts=wishlist.map((item)=>products[item.productId-1]);

  return wishListwithProducts
 
};
