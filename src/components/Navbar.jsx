import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { BsSun, BsMoon } from "react-icons/bs";

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
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "py-3 bg-cream-50/90 dark:bg-chocolate-900/90 backdrop-blur-xl shadow-lg shadow-strawberry-200/30 dark:shadow-chocolate-800/30 border-b border-strawberry-200/30 dark:border-grape-900/20"
          : "py-5 bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3 group">
          <img
            src={`${import.meta.env.BASE_URL}images/logo2.png`}
            alt="Sweet Cafe"
            className="h-[3.5rem] w-auto object-contain"
          />
          <span className="font-heading text-2xl font-semibold text-chocolate-800 dark:text-cream-100 group-hover:text-strawberry-500 dark:hover:text-strawberry-400 transition-colors">
            Sweet Cafe
          </span>
        </a>

        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="px-4 py-2 rounded-lg text-sm font-semibold text-chocolate-700/70 dark:text-cream-200/70 hover:text-strawberry-600 dark:hover:text-strawberry-400 hover:bg-strawberry-100/50 dark:hover:bg-grape-900/20 transition-all"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setDark(!dark)}
            className="p-2.5 rounded-xl bg-white dark:bg-chocolate-800 hover:bg-strawberry-50 dark:hover:bg-chocolate-700 transition-colors text-chocolate-700 dark:text-cream-200 border border-strawberry-200/60 dark:border-chocolate-700/50 shadow-sm"
            aria-label="Toggle dark mode"
          >
            {dark ? <BsSun className="text-base" /> : <BsMoon className="text-base" />}
          </button>

          <a
            href="#contact"
            className="hidden sm:inline-flex px-5 py-2.5 rounded-xl bg-strawberry-500 dark:bg-strawberry-600 text-white font-bold text-sm hover:bg-strawberry-600 dark:hover:bg-strawberry-700 transition-all shadow-md shadow-strawberry-300/40 hover:shadow-lg hover:-translate-y-0.5"
          >
            Order Now
          </a>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2.5 rounded-xl text-chocolate-700 dark:text-cream-200 hover:bg-strawberry-100/60 dark:hover:bg-grape-900/30 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <HiX className="text-xl" /> : <HiMenuAlt3 className="text-xl" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden overflow-hidden bg-cream-50/95 dark:bg-chocolate-900/95 backdrop-blur-xl border-t border-strawberry-200/30 dark:border-grape-900/20"
          >
            <ul className="flex flex-col items-center gap-2 py-6">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block px-6 py-3 rounded-xl text-base font-semibold text-chocolate-800 dark:text-cream-200 hover:bg-strawberry-100/60 dark:hover:bg-grape-900/20 transition-all"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  onClick={() => setMobileOpen(false)}
                  className="px-8 py-3 rounded-xl bg-strawberry-500 dark:bg-strawberry-600 text-white font-bold text-sm"
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
