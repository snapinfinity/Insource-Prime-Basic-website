import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import img from "../assets/insourcewhite-cropped.svg";

const NavbarLink = ({ to, label, isActive }) => {
  return (
    <Link
      to={to}
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
    { to: "/", label: "Home" },
    { to: "/about-us", label: "About Us" },
    { to: "/services", label: "Services" },
    { to: "/contact-us", label: "Contact Us" },
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
              className="inline-flex items-center justify-center p-2 text-white rounded-md relative z-[2] mobile-menu-button"
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
              <NavbarLink
                key={link.to}
                to={link.to}
                label={link.label}
                isActive={location.pathname === link.to}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
