import React from "react";
import Header from "../components/Header.jsx";
import CartList from "../components/CartList.jsx";
import { Link } from "react-router-dom"; 
import { useSelector } from "react-redux";
import { selectCartItemsDetailed } from "../selectors/cartSelectors.js";

const Cart = () => {
  const cartData = useSelector(selectCartItemsDetailed);


  // Calculate totals dynamically
  const subtotal = cartData.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const deliveryCharges = subtotal > 500 ? 0 : 40;
  const totalAmount = subtotal + deliveryCharges;

  return (
    <div className="min-h-screen bg-[#f1f3f6]">
      <Header />

      <main className="max-w-6xl mx-auto px-4 py-6">
        {cartData && cartData.length > 0 ? (
          <div className="flex flex-col lg:flex-row gap-4">
            
            {/* 1. LEFT COLUMN: Product List */}
            <div className="flex-1">
              <div className="bg-white shadow-sm rounded-sm overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center">
                  <h1 className="text-lg font-medium">My Cart ({cartData.length})</h1>
                </div>
                
                <div className="divide-y divide-gray-100">
                  <CartList items={cartData} />
                </div>

                {/* Bottom Action Bar (Flipkart Style) */}
                <div className="sticky bottom-0 bg-white p-4 flex justify-end shadow-[0_-2px_10px_0_rgba(0,0,0,0.1)]">
                  <button className="bg-[#fb641b] text-white px-12 py-3 rounded-sm font-medium uppercase text-sm hover:shadow-md transition-shadow">
                    Place Order
                  </button>
                </div>
              </div>
            </div>

            {/* 2. RIGHT COLUMN: Price Details */}
            <section className="lg:w-[380px]">
              <div className="bg-white shadow-sm rounded-sm sticky top-24">
                <h2 className="text-gray-500 uppercase font-medium px-6 py-3 border-b border-gray-100 text-sm">
                  Price Details
                </h2>
                
                <div className="p-6 space-y-5">
                  <div className="flex justify-between text-base">
                    <span>Price ({cartData.length} items)</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  
                  <div className="flex justify-between text-base">
                    <span>Delivery Charges</span>
                    <span className={deliveryCharges === 0 ? "text-green-600" : "text-gray-900"}>
                      {deliveryCharges === 0 ? "FREE" : `$${deliveryCharges}`}
                    </span>
                  </div>

                  <div className="border-t border-dashed border-gray-300 pt-5 flex justify-between text-lg font-bold text-gray-900">
                    <span>Total Amount</span>
                    <span>₹{totalAmount.toFixed(2)}</span>
                  </div>

                  {deliveryCharges === 0 && (
                    <p className="text-green-600 font-medium text-sm">
                      You will save ₹40 on this order
                    </p>
                  )}
                </div>
              </div>

              {/* Security Tagline */}
              <div className="mt-4 flex items-center gap-2 text-gray-500 font-medium text-sm px-2">
                <span className="text-lg">🛡️</span>
                <span>Safe and Secure Payments. Easy returns.</span>
              </div>
            </section>
          </div>
        ) : (
          /* 3. EMPTY STATE */
          <div className="bg-white py-12 px-4 shadow-sm rounded-sm text-center">
            <img 
              src="https://rukminim2.flixcart.com/www/800/800/promos/16/05/2019/d405a711-21dc-4f6b-97f3-18911f2533a9.png?q=90" 
              alt="Empty Cart" 
              className="w-64 mx-auto mb-4"
            />
            <h2 className="text-lg font-semibold">Your cart is empty!</h2>
            <p className="text-sm text-gray-500 mb-6">Add items to it now.</p>
            <Link
              to="/"
              className="bg-blue-600 text-white px-12 py-2 rounded-sm font-medium hover:bg-blue-700 transition-all inline-block"
            >
              Shop Now
            </Link>
          </div>
        )}
      </main>
    </div>
  );
};

export default Cart;