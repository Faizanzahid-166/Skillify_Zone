// src/components/Navbar.jsx
import { useState } from "react";
import { Menu, X } from "lucide-react"; // You can also use Heroicons or SVGs

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = ["Home", "TV Shows", "Movies", "My List"];

  return (
    <nav className="bg-black text-white px-6 py-4 flex items-center justify-between">
      {/* Logo */}
      <div className="text-2xl font-bold">Netflix Clone</div>

      {/* Desktop menu */}
      <ul className="hidden md:flex gap-6">
        {navLinks.map((link) => (
          <li key={link} className="hover:text-red-500 cursor-pointer">
            {link}
          </li>
        ))}
      </ul>

      {/* Hamburger menu icon (mobile only) */}
      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu dropdown */}
      {menuOpen && (
        <ul className="absolute top-16 left-0 w-full bg-black flex flex-col items-center gap-4 py-4 md:hidden z-50">
          {navLinks.map((link) => (
            <li
              key={link}
              onClick={() => setMenuOpen(false)}
              className="hover:text-red-500 cursor-pointer"
            >
              {link}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
