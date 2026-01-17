"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Moon, Sun } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useThemeToggle } from "@/app/hooks/useThemeToggle";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "About", href: "#about" },
  { name: "Why Us", href: "#why-us" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { toggleTheme, mounted, isDark } = useThemeToggle();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 overflow-x-hidden ${
        isScrolled
          ? "bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="#home" className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            <div className="relative w-8 h-8 sm:w-10 sm:h-10">
              <Image
                src="/Fireprologo.jpeg"
                alt="FirePro"
                fill
                className="object-contain"
              />
            </div>
            <div className="hidden sm:block">
              <span className="text-xl sm:text-2xl font-bold">
                <span className="text-fire-red">Fire</span>
                <span className={isScrolled ? "text-navy-dark" : "text-white"}>Pro</span>
              </span>
              <p className={`text-xs ${isScrolled ? "text-gray-600" : "text-gray-200"}`}>
                Fire Safety
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`relative font-medium text-sm lg:text-base transition-colors hover:text-fire-red ${
                  isScrolled ? "text-gray-700" : "text-white"
                } group`}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-fire-red transition-all group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden md:flex items-center gap-3 lg:gap-4">
            {mounted && (
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-lg transition-colors ${
                  isScrolled 
                    ? "bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200" 
                    : "bg-white/10 text-white"
                }`}
                aria-label="Toggle theme"
              >
                {isDark ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </button>
            )}
            <a
              href="tel:+1234567890"
              className={`flex items-center gap-2 text-sm lg:text-base font-medium transition-colors ${
                isScrolled ? "text-gray-700 dark:text-gray-300" : "text-white"
              }`}
            >
              <Phone className="w-4 h-4 text-fire-red flex-shrink-0" />
              <span className="hidden lg:inline">Emergency: 24/7</span>
            </a>
            <Link
              href="#contact"
              className="bg-gradient-to-r from-fire-red to-fire-orange text-white px-4 lg:px-6 py-2 lg:py-2.5 rounded-full font-semibold text-sm lg:text-base hover:shadow-lg hover:shadow-fire-red/30 transition-all hover:scale-105 whitespace-nowrap"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile Menu Button & Theme Toggle */}
          <div className="md:hidden flex items-center gap-2">
            {mounted && (
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-lg transition-colors ${
                  isScrolled 
                    ? "bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200" 
                    : "bg-white/10 text-white"
                }`}
                aria-label="Toggle theme"
              >
                {isDark ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </button>
            )}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className={isScrolled ? "text-gray-800 dark:text-gray-200" : "text-white"} size={24} />
              ) : (
                <Menu className={isScrolled ? "text-gray-800 dark:text-gray-200" : "text-white"} size={24} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Full Width */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-slate-900 border-t border-gray-200 dark:border-gray-700 w-full"
          >
            <div className="px-4 sm:px-6 lg:px-8 py-4 space-y-3 max-h-[calc(100vh-70px)] overflow-y-auto">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-gray-700 dark:text-gray-300 font-medium hover:text-fire-red transition-colors py-2"
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="tel:09063488617"
                className="flex items-center gap-2 text-gray-700 font-medium hover:text-fire-red transition-colors py-2"
              >
                <Phone className="w-4 h-4 text-fire-red" />
                09063488617
              </a>
              <Link
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block bg-gradient-to-r from-fire-red to-fire-orange text-white px-6 py-3 rounded-full font-semibold text-center mt-2"
              >
                Get Free Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
