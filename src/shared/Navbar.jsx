import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import img from "../assets/insourcewhite-cropped.svg";

const NavbarLink = ({ href, label, isActive, dropdown, closeMenu }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleClick = (event) => {
    if (href.startsWith("#")) {
      event.preventDefault(); 
      const targetSection = document.querySelector(href);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
      }
      closeMenu();
    } else {
      closeMenu();
    }
  };

  const handleDropdownClick = () => {
    setIsDropdownOpen(false);
    closeMenu();
  };

  return (
    <div className="relative">
      {href ? (
        <a
          href={href}
          onClick={handleClick}
          className={`inline-flex items-center px-1 pt-1 xl:text-[18px] text-[15px] font-[300] cursor-pointer relative ${
            isActive
              ? "text-white hover:text-white after:absolute after:bottom-[-8px] after:left-0 after:w-full after:h-[2px] after:bg-white"
              : "text-white hover:text-gray-300"
          }`}
        >
          {label}
        </a>
      ) : (
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="inline-flex items-center px-1 pt-1 xl:text-[18px] text-[15px] font-[300] cursor-pointer relative text-white hover:text-gray-300"
        >
          {label}
          {dropdown && (
            <svg
              className={`w-4 h-4 ml-1 transition-transform ${
                isDropdownOpen ? "rotate-180" : ""
              }`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </button>
      )}

      {dropdown && isDropdownOpen && (
        <div className="absolute left-0 mt-2 w-48 bg-[#10153D] rounded-md shadow-lg">
          {dropdown.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              onClick={handleDropdownClick}
              className="block px-4 py-2 text-sm text-white hover:bg-blue-600"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const links = [
    { href: "/", label: "Home" }, 
    { href: "/about-us", label: "About Us" },
    {
      label: "Services",
      dropdown: [
        { href: "/services/corporate-banking", label: "Corporate Banking" },
        { href: "/services/offshore-banking", label: "Offshore Bank Account Opening" },
        { href: "/services/private-banking", label: "Private Banking" },
        { href: "/services/personal-banking", label: "Personal Banking" },
        { href: "/services/compliance-advisory", label: "Compliance Advisory" },
        
      ],
    },
    { href: "/contact-us", label: "Contact Us" },
  ];

  return (
    <div className={`sticky top-0 z-20 ${isScrolled ? "bg-[#10153D] shadow-md" : "lg:shadow-none shadow-md bg-[#10153D]"}`}>
      <div className="container px-6 mx-auto">
        <div className="flex items-center justify-between py-3 lg:py-5">
          <Link to="/">
            <img className="md:w-[200px] w-[140px] cursor-pointer" src={img} alt="Logo" />
          </Link>

          {/* Desktop Navbar */}
          <div className="items-center hidden gap-3 lg:flex">
            {links.map((link, index) => (
              <NavbarLink
                key={index}
                href={link.href}
                label={link.label}
                isActive={location.pathname === link.href}
                dropdown={link.dropdown}
                closeMenu={closeMenu}
              />
            ))}
          </div>

          <button onClick={toggleMenu} className="p-2 text-white rounded-md lg:hidden">
            <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-[#10153D] shadow-md py-3 h-[100vh] px-6">
          {links.map((link, index) => (
            <div key={index} className="mb-2">
              {link.href ? (
                <a href={link.href} onClick={closeMenu} className="block py-2 text-lg text-white">
                  {link.label}
                </a>
              ) : (
                <div>
                  <button onClick={() => setIsOpen(link.label)} className="block py-2 text-lg text-white">
                    {link.label}
                  </button>
                  {link.dropdown && (
                    <div className="pl-4">
                      {link.dropdown.map((item) => (
                        <Link key={item.href} to={item.href} onClick={closeMenu} className="block py-1 text-white">
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
