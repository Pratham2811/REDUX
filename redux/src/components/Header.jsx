import { ShoppingBag, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectWishlistItemsDetailed } from "../selectors/wishlistSelectors";
import { selectCartItemsDetailed } from "../selectors/cartSelectors";

const Header = () => {
  const wishlistItems = useSelector(selectWishlistItemsDetailed);

  const cartItems = useSelector(selectCartItemsDetailed);
  const allQuant = cartItems.reduce(
    (total, cartItem) => total + cartItem.quantity,
    0,
  );

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        <Link to="/" className="text-2xl font-black tracking-tighter uppercase">
          STORE<span className="text-gray-300">.</span>
        </Link>

        <nav className="flex items-center gap-10">
          <Link to="/wishlist" className="relative group">
            <Heart className="h-5 w-5 stroke-[1.5px] group-hover:text-red-500 transition-colors" />
            {wishlistItems.length > 0 && (
              <span className="absolute -top-2 -right-2 text-[10px] font-bold bg-black text-white rounded-full h-4 w-4 flex items-center justify-center">
                {wishlistItems.length || 0}
              </span>
            )}
          </Link>

          <Link to="/cart" className="relative group">
            <ShoppingBag className="h-5 w-5 stroke-[1.5px]" />
            <span className="absolute -top-2 -right-2 text-[10px] font-bold bg-black text-white rounded-full h-4 w-4 flex items-center justify-center">
              {allQuant || 0}
            </span>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
