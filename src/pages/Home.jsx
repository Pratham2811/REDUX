import React from "react";
import { useSelector } from "react-redux";
import Header from "../components/Header.jsx";
import ProductList from "../components/ProductList.jsx";
import { selectProductListDetailed } from "../selectors/productSelector.js";

const Home = () => {
  const products = useSelector(selectProductListDetailed);
  const isLoading = !products;

  return (
    /* FIX: w-full and bg-white here ensures the whole screen is covered, no gaps */
    <div className="min-h-screen w-full bg-white flex flex-col">
      <Header />

      {/* Removing 'max-w-7xl' from the main tag if you want content to breathe more, 
          or keeping it inside a full-width wrapper to center it properly */}
      <main className="flex-grow w-full">
        <div className="max-w-[1440px] mx-auto px-6 py-12">

          {/* DYNAMIC CONTENT */}
          {isLoading ? (
            <div className="flex items-center justify-center h-96">
              {/* Clean Minimal Loader */}
              <div className="h-12 w-12 border-4 border-black border-t-transparent animate-spin rounded-full"></div>
            </div>
          ) : products.length > 0 ? (
            <ProductList products={products} />
          ) : (
            <div className="text-center py-40 border-4 border-black">
              <h3 className="text-2xl font-black uppercase italic">Inventory Empty</h3>
              <p className="text-gray-500 mt-2 uppercase tracking-widest text-[10px]">Check back soon</p>
            </div>
          )}
        </div>
      </main>
      
      {/* Footer Placeholder to push content up if needed */}
      <footer className="py-10 border-t border-gray-100 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 text-[10px] font-bold uppercase tracking-widest">
          © 2024 Store. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
};

export default Home;