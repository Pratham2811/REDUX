import { ShoppingBag, Heart } from "lucide-react";
import { addItemToCart } from "../../../store/slice/cartSlice";
import { useDispatch } from "react-redux";
import { addToWishList } from "../../../store/slice/wishListSlice";

const ProductList = ({ products, onAddToCart, onAddToWishlist }) => {
  const dispatch = useDispatch();
  return (
    /* 1. THE WHOLE SCREEN FIX: min-h-screen and w-full bg-white covers the void */
    <div className="min-h-screen w-full bg-white text-black font-sans selection:bg-black selection:text-white">
      <div className="max-w-[1440px] mx-auto px-6 py-16">
        {/* HEADER: Massive & Clean */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4 border-b-4 border-black pb-8">
          <h1 className="text-7xl font-black uppercase tracking-tighter leading-[0.8]">
            Shop
            <br />
            All
          </h1>
          <div className="flex flex-col items-end">
            <span className="text-[10px] font-black tracking-[0.5em] uppercase text-gray-400">
              Inventory
            </span>
            <span className="text-2xl font-black">{products.length}</span>
          </div>
        </div>

        {/* THE GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-20">
          {products.map((p) => (
            <div key={p.id} className="group flex flex-col">
              {/* IMAGE AREA */}
              <div className="relative aspect-[3/4] bg-[#f9f9f9] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="h-full w-full object-contain p-8 mix-blend-multiply transition-transform duration-700 group-hover:scale-110"
                />

                {/* THE ICON FIX: PURE WHITE HEART WITH SHADOW */}
                <button
                  onClick={() => dispatch(addToWishList(p.id))}
                  className="absolute top-5 right-5 z-20 transition-transform active:scale-75 hover:scale-110"
                >
                  <Heart
                    className="h-8 w-8 text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]"
                    strokeWidth={2}
                    fill="none"
                  />
                </button>
              </div>

              {/* INFO AREA */}
              <div className="mt-8 flex flex-col gap-4">
                <div className="space-y-1">
                  <h2 className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500 line-clamp-1">
                    {p.title}
                  </h2>
                  <p className="text-2xl font-black italic">₹{p.price}</p>
                </div>

                {/* THE BUTTON: Thick, Solid, Edge-to-Edge */}
                <button
                  onClick={() => dispatch(addItemToCart({productId:p.id}))}
                  className="group relative w-full bg-black text-white py-5 overflow-hidden transition-all active:scale-[0.98]"
                >
                  <div className="relative z-10 flex items-center justify-center gap-3 text-[11px] font-black uppercase tracking-[0.3em]">
                    <ShoppingBag className="h-4 w-4" />
                    Add To Bag
                  </div>
                  {/* Subtle hover effect */}
                  <div className="absolute inset-0 bg-zinc-800 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
