import { useContext } from "react";
import { Link } from "react-router-dom";
import { SearchContext } from "../Searchcontext";

const Navbar = () => {
    const {search,setSearch}=useContext(SearchContext)
  return (
    <nav className="bg-slate-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <ul className="flex items-center justify-center gap-8">
          <li>
            <Link to="/" className="hover:text-cyan-400 transition">
              Home
            </Link>
          </li>

          <li>
            <Link to="/shop" className="hover:text-cyan-400 transition">
              Shop
            </Link>
          </li>

          <li>
            <Link to="/services" className="hover:text-cyan-400 transition">
              Services
            </Link>
          </li>
          <input onChange={(e)=>setSearch(e.target.value)} value={search} className="border" type="search" placeholder="search....." />

          <li>
            <Link to="/login" className="hover:text-cyan-400 transition">
              Login
            </Link>
          </li>

          <li>
            <Link
              to="/register"
              className="bg-cyan-500 hover:bg-cyan-600 px-4 py-2 rounded-md transition"
            >
              Register
            </Link>
             <Link
              to="/cart"
              className="bg-cyan-500 hover:bg-cyan-600 px-4 py-2 rounded-md transition"
            >
              Cart
            </Link>
          </li>
          <li>Logout</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;