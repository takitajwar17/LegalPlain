"use client";

import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-gray-900/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              PlainLegal
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="#features"
              className="text-sm font-medium text-white hover:text-blue-300"
            >
              Features
            </Link>
            <Link
              href="#how-it-works"
              className="text-sm font-medium text-white hover:text-blue-300"
            >
              How It Works
            </Link>
            <Link
              href="#testimonials"
              className="text-sm font-medium text-white hover:text-blue-300"
            >
              Testimonials
            </Link>
            <Link
              href="#faq"
              className="text-sm font-medium text-white hover:text-blue-300"
            >
              FAQ
            </Link>
            <Button
              variant="default"
              size="sm"
              className="bg-white text-black hover:bg-white/90 rounded-full"
            >
              Add to Chrome
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-white" />
            ) : (
              <Menu className="h-6 w-6 text-white" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden py-4 space-y-4 bg-gray-800 rounded-md">
            <Link
              href="#features"
              className="block px-4 py-2 text-sm text-white hover:bg-blue-600 rounded-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              href="#how-it-works"
              className="block px-4 py-2 text-sm text-white hover:bg-blue-600 rounded-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              How It Works
            </Link>
            <Link
              href="#testimonials"
              className="block px-4 py-2 text-sm text-white hover:bg-blue-600 rounded-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Testimonials
            </Link>
            <Link
              href="#faq"
              className="block px-4 py-2 text-sm text-white hover:bg-blue-600 rounded-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              FAQ
            </Link>
            <div className="px-4 py-2">
              <Button
                variant="default"
                size="sm"
                className="w-full bg-white text-black hover:bg-white/90 rounded-full"
              >
                Add to Chrome
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
