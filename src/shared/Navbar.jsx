import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import img from "../assets/insourcewhite-cropped.svg";

const NavbarLink = ({ href, label, isActive }) => {
  return (
    <Link
      to={href}
      className={`inline-flex items-center px-1 pt-1 xl:text-[18px] text-[15px] font-[300] cursor-pointer relative ${
        isActive
          ? "text-white hover:text-white after:absolute after:bottom-[-8px] after:left-0 after:w-full after:h-[2px] after:bg-white"
          : "text-white hover:text-gray-300"
      }`}
    >
      {label}
    </Link>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const mobileMenuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleClickOutside = (event) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target) &&
        !event.target.closest(".mobile-menu-button")
      ) {
        setIsOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const links = [
    { href: "/", label: "Home" },
    { href: "/about-us", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/contact-us", label: "Contact Us" },
  ];

  return (
    <div
      className={`sticky top-0 z-20 ${
        isScrolled ? "bg-[#10153D] shadow-md" : "lg:shadow-none shadow-md bg-[#10153D]"
      }`}
    >
      <div className="container px-10 mx-auto">
        <div className="flex items-center justify-between py-3 lg:py-5">
          {/* Logo */}
          <Link to="/">
            <img className="md:w-[200px] w-[140px] cursor-pointer" src={img} alt="Logo" />
          </Link>

          {/* Mobile Menu Button */}
          <div className="flex items-center -mr-2 lg:hidden">
            <button
              onClick={toggleMenu}
              className="relative z-30 inline-flex items-center justify-center p-2 text-white rounded-md mobile-menu-button"
            >
              <svg
                className="w-8 h-8 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="items-center hidden gap-1 lg:flex xl:gap-3">
            {links.map((link) => (
              <NavbarLink key={link.href} href={link.href} label={link.label} isActive={location.pathname === link.href} />
            ))}
          </div>
        </div>

        {/* Mobile Menu - Always in DOM but transformed based on state */}
        <div
          ref={mobileMenuRef}
          className={`fixed inset-y-0 right-0 bg-[#10153D] opacity-90 w-[200px] z-20 transform rounded-l-2xl shadow-2xl flex flex-col items-start px-4 py-6 space-y-4 lg:hidden transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="pt-12">
            {links.map((link) => (
              <div className="py-2" key={link.href}>
                <NavbarLink
                  href={link.href}
                  label={link.label}
                  isActive={location.pathname === link.href}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Overlay when menu is open */}
        <div 
          className={`fixed inset-0 bg-black lg:hidden transition-opacity duration-300 ease-in-out z-10 ${
            isOpen ? "opacity-50" : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setIsOpen(false)}
        ></div>
      </div>
    </div>
  );
};

export default Navbar;