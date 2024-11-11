import { ScrollText } from "lucide-react";
import React, { useState } from "react";

interface NavbarProps {
  isScrolled: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className={`fixed w-full z-50 ${
        isScrolled ? "bg-black/95 backdrop-blur-md" : "bg-transparent"
      } transition-colors duration-300`}
    >
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <ScrollText className="w-8 h-8 text-white" />
          <span className="text-2xl font-bold text-white">PlainLegal</span>
        </div>
        <div className="hidden md:flex space-x-8">
          <a
            href="#story"
            className="text-white/70 hover:text-white transition-colors"
          >
            Story
          </a>
          <a
            href="#demo"
            className="text-white/70 hover:text-white transition-colors"
          >
            Demo
          </a>
          <a
            href="#features"
            className="text-white/70 hover:text-white transition-colors"
          >
            Features
          </a>
        </div>
        <button className="bg-white text-black px-6 py-2 rounded-full font-medium hover:bg-white/90 transition-colors hidden md:block">
          Add to Chrome
        </button>
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-md">
          <div className="flex flex-col items-center space-y-4 py-4">
            <a
              href="#story"
              className="text-white/70 hover:text-white transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Story
            </a>
            <a
              href="#demo"
              className="text-white/70 hover:text-white transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Demo
            </a>
            <a
              href="#features"
              className="text-white/70 hover:text-white transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Features
            </a>
            <button className="bg-white text-black px-6 py-2 rounded-full font-medium hover:bg-white/90 transition-colors">
              Add to Chrome
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
