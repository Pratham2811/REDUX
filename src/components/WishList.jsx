import { Heart, Trash2 } from "lucide-react";
import { useDispatch } from "react-redux";
import { removeFromWishList } from "../store/slice/wishListSlice"

const WishlistList = ({ items, onRemove }) => {

  const dispatch=useDispatch();
  if (!items || items.length === 0) {
    return (
      <div className="max-w-5xl mx-auto px-6 py-20 text-center">
        <Heart className="mx-auto h-10 w-10 text-gray-300 mb-4" />
        <h2 className="text-xl font-medium">Wishlist is empty</h2>
        <p className="text-gray-500 mt-2">Save items you like.</p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-2xl font-semibold mb-8">Wishlist</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {items.map((product) => (
          <div
            key={product.id}
            className="border rounded-xl p-4 bg-white"
          >
            <div className="h-40 bg-gray-100 rounded flex items-center justify-center mb-4">
              <img
                src={product.image}
                alt={product.title}
                className="h-full object-contain p-4"
              />
            </div>

            <h2 className="text-sm font-medium mb-3 line-clamp-2">
              {product.title}
            </h2>

            <div className="flex justify-between items-center">
              <span className="font-semibold">₹{product.price}</span>

              <button
                onClick={() =>dispatch(removeFromWishList({productId:product.id}))}
                className="p-2 hover:bg-red-50 rounded"
              >
                <Trash2 className="h-4 w-4 text-red-500" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WishlistList;
