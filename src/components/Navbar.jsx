import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import logoText from "../assets/logo-text.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    {
      name: "Home",
      href: "#home",
    },
    {
      name: "Technologies",
      href: "#technologies",
    },
    {
      name: "Projects",
      href: "#projects",
    },
    {
      name: "About",
      href: "#about",
    },
    {
      name: "Contact",
      href: "#contact",
    },
  ];

  const handleMenuToggle = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <nav className="relative flex h-[72px] items-center justify-between">
          {/* ==========================================
              MOBILE MENU BUTTON
          ========================================== */}
          <button
            type="button"
            onClick={handleMenuToggle}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-700 transition-colors hover:bg-slate-100 md:hidden"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <FiX className="text-xl" />
            ) : (
              <FiMenu className="text-xl" />
            )}
          </button>

          {/* ==========================================
              BRAND LOGO
          ========================================== */}
          <a
            href="#home"
            onClick={handleLinkClick}
            className="absolute left-1/2 flex -translate-x-1/2 items-center md:static md:translate-x-0"
          >
            <img
              src={logoText}
              alt="Dev Stack"
              className="h-auto w-[118px] object-contain sm:w-[125px] md:w-[128px]"
            />
          </a>

          {/* ==========================================
              DESKTOP NAVIGATION
          ========================================== */}
          <div className="hidden items-center gap-7 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  link.name === "Home"
                    ? "text-pink-600"
                    : "text-slate-600 hover:text-pink-600"
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* ==========================================
              DESKTOP AUTH BUTTONS
          ========================================== */}
          <div className="hidden items-center gap-4 md:flex">
            <button
              type="button"
              className="text-sm font-medium text-slate-600 transition-colors hover:text-pink-600"
            >
              Sign In
            </button>

            <button
              type="button"
              className="rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
            >
              Sign Up
            </button>
          </div>

          {/* ==========================================
              MOBILE AUTH BUTTONS
          ========================================== */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              type="button"
              className="px-1 text-xs font-medium text-slate-600 transition-colors hover:text-pink-600 sm:text-sm"
            >
              Sign In
            </button>

            <button
              type="button"
              className="rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500 px-3 py-1.5 text-xs font-semibold text-white shadow-sm transition-all duration-200 hover:shadow-md sm:px-4 sm:py-2 sm:text-sm"
            >
              Sign Up
            </button>
          </div>
        </nav>

        {/* ==========================================
            MOBILE NAVIGATION MENU
        ========================================== */}
        <div
          className={`overflow-hidden transition-all duration-300 md:hidden ${
            isMenuOpen ? "max-h-96 pb-5 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="border-t border-slate-100 pt-3">
            <div className="flex flex-col">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={handleLinkClick}
                  className={`rounded-lg px-3 py-3 text-sm font-medium transition-colors ${
                    link.name === "Home"
                      ? "bg-pink-50 text-pink-600"
                      : "text-slate-600 hover:bg-slate-50 hover:text-pink-600"
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
