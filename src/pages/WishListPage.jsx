import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Header from "../components/Header.jsx";
import WishlistList from "../components/WishList.jsx";
import { selectWishlistItemsDetailed } from "../selectors/wishlistSelectors.js";

const Wishlist = () => {
  // Assuming a similar selector pattern to your previous components
const wishListData=useSelector(selectWishlistItemsDetailed)

console.log(wishListData);

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* 1. EMOTIONAL HEADER */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10 border-b border-slate-200 pb-6">
          <div>
            <h1 className="text-4xl font-bold text-slate-900">My Favorites</h1>
            <p className="mt-2 text-slate-600">
              {wishListData 
                ? `You have ${wishListData.length} items saved for later.` 
                : "Keep track of the things you love."}
            </p>
          </div>
          
          {wishListData && (
            <button className="mt-4 md:mt-0 text-sm font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-2">
              <span>Move all to cart</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          )}
        </div>

        {/* 2. CONTENT AREA */}
        {wishListData ? (
          <div className="grid grid-cols-1 gap-y-8">
            <WishlistList items={wishListData} />
          </div>
        ) : (
          /* 3. THE "GENTLE NUDGE" EMPTY STATE */
          <div className="max-w-md mx-auto text-center py-20">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-blue-50 text-blue-600 mb-6">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-slate-900">Your wishlist is lonely</h2>
            <p className="mt-3 text-slate-600">
              Add items you’re interested in so you can find them easily later and stay updated on price drops.
            </p>
            <Link
              to="/products"
              className="mt-8 inline-block bg-slate-900 text-white px-8 py-3 rounded-full font-medium hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl"
            >
              Start Exploring
            </Link>
          </div>
        )}
      </main>
    </div>
  );
};

export default Wishlist;