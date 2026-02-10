import { Minus, Plus } from "lucide-react";
import { useDispatch } from "react-redux";
import {
  decreaseItemQuantity,
  increaseItemQuantity,
  removeItemFromCart,
} from "../../../store/slice/cartSlice";

const CartList = ({ items }) => {
  const dispatch = useDispatch();


  // Handlers for Redux actions
  const updateQty = (id, currentQty, delta) => {
    const newQty = currentQty + delta;
    if (newQty > 0) {
      dispatch({ type: "UPDATE_CART_QTY", payload: { id, quantity: newQty } });
    }
  };

  const removeItem = (id) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: id });
  };

  return (
    <div className="bg-white">
      {items.map((item) => (
        <div
          key={item.id}
          className="p-6 flex flex-col sm:flex-row gap-6 border-b border-gray-100 last:border-0"
        >
          {/* Product Image & Quantity Toggle */}
          <div className="flex flex-col items-center gap-4">
            <div className="w-28 h-28 flex items-center justify-center">
              <img
                src={item.image}
                className="max-h-full max-w-full object-contain"
                alt={item.title}
              />
            </div>

            {/* Quantity Controller */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  dispatch(decreaseItemQuantity({productId:item.id}));
                }}
                className="w-7 h-7 flex items-center justify-center border border-gray-300 rounded-full hover:bg-gray-50"
              >
                <Minus className="h-3 w-3" />
              </button>
              <input
                type="text"
                readOnly
                value={item.quantity || 1}
                className="w-9 text-center border border-gray-200 text-sm py-0.5 focus:outline-none"
              />
              <button
                onClick={() => dispatch(increaseItemQuantity({productId:item.id}))}
                className="w-7 h-7 flex items-center justify-center border border-gray-300 rounded-full hover:bg-gray-50"
              >
                <Plus className="h-3 w-3" />
              </button>
            </div>
          </div>

          {/* Product Details */}
          <div className="flex-grow space-y-2">
            <h3 className="text-base font-normal text-gray-900 hover:text-blue-600 cursor-pointer line-clamp-1">
              {item.title}
            </h3>
            <p className="text-sm text-gray-500">Seller: YourBrand Retail</p>

            <div className="flex items-center gap-3 mt-4">
              <span className="text-xl font-bold text-gray-900">
                ₹{item.price}
              </span>
              <span className="text-sm text-gray-400 line-through">
                ₹{item.price * 1.5}
              </span>
              <span className="text-sm font-medium text-green-600">
                33% Off
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-6 pt-4">
              <button className="text-sm font-bold uppercase hover:text-blue-600 transition-colors">
                Save for later
              </button>
              <button
                onClick={() => dispatch(removeItemFromCart({productId:item.id}))}
                className="text-sm font-bold uppercase hover:text-blue-600 transition-colors"
              >
                Remove
              </button>
            </div>
          </div>

          {/* Delivery Info */}
          <div className="text-sm text-gray-800 sm:w-48">
            Delivery by Sat Oct 22 |{" "}
            <span className="text-green-600 font-medium">Free</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartList;
