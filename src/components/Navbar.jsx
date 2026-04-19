import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoSunnyOutline, IoMoonOutline, IoMenuOutline, IoCloseOutline } from "react-icons/io5";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Reviews", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar({ dark, setDark }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "py-3 bg-white/80 dark:bg-dark-900/80 backdrop-blur-lg shadow-lg shadow-pink-200/20 dark:shadow-pink-900/10"
          : "py-5 bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between" aria-label="Main navigation">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 group">
          <img 
            src={`${import.meta.env.BASE_URL}images/Logo.png`} 
            alt="Logo" 
            className="h-10 w-auto object-contain drop-shadow-sm" 
          />
          <span className="font-heading text-xl font-bold text-pink-700 dark:text-pink-300 group-hover:text-pink-500 transition-colors">
            Sweet Sprinkles
          </span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-body text-sm font-semibold tracking-wide text-pink-800/70 dark:text-pink-200/70 hover:text-pink-600 dark:hover:text-pink-400 transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-pink-500 after:transition-all hover:after:w-full"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="flex items-center gap-3">
          {/* Dark mode toggle */}
          <button
            onClick={() => setDark(!dark)}
            className="p-2 rounded-full bg-pink-100 dark:bg-pink-900/40 hover:bg-pink-200 dark:hover:bg-pink-800/60 transition-colors"
            aria-label="Toggle dark mode"
            id="dark-mode-toggle"
          >
            {dark ? (
              <IoSunnyOutline className="text-yellow-400 text-lg" />
            ) : (
              <IoMoonOutline className="text-pink-600 text-lg" />
            )}
          </button>

          {/* Order CTA */}
          <a
            href="#contact"
            className="hidden sm:inline-flex px-5 py-2 rounded-full bg-gradient-to-r from-pink-500 to-pink-600 text-white font-semibold text-sm hover:from-pink-600 hover:to-pink-700 transition-all shadow-md shadow-pink-300/40 hover:shadow-lg hover:shadow-pink-400/40 hover:-translate-y-0.5"
          >
            Order Now
          </a>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-lg text-pink-700 dark:text-pink-300"
            aria-label="Toggle menu"
            id="mobile-menu-toggle"
          >
            {mobileOpen ? <IoCloseOutline className="text-2xl" /> : <IoMenuOutline className="text-2xl" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden bg-white/95 dark:bg-dark-900/95 backdrop-blur-xl border-t border-pink-200/30 dark:border-pink-800/30"
          >
            <ul className="flex flex-col items-center gap-4 py-6">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="font-body text-base font-semibold text-pink-800 dark:text-pink-200 hover:text-pink-600 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  onClick={() => setMobileOpen(false)}
                  className="px-6 py-2.5 rounded-full bg-gradient-to-r from-pink-500 to-pink-600 text-white font-semibold text-sm"
                >
                  Order Now
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
