import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Cart from "./pages/CartPage.jsx";
import Wishlist from "./pages/WishListPage.jsx";
import "./App.css"

const App = () => {
  return (
    <BrowserRouter>
      {/* GLOBAL WRAPPER: This kills the black side patch */}
      <div className="min-h-screen w-full bg-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;