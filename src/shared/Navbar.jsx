import React, { useState, useRef, useEffect } from "react";
import img from "../assets/insourceblack.png";
// import img from "../assets/insourceicon.svg";

const NavbarLink = ({ href, label, isActive }) => {
  return (
    <a
      href={href}
      className={`inline-flex items-center px-1 pt-1 xl:text-[18px] text-[15px] font-[300] cursor-pointer relative ${
        isActive
          ? "text-white hover:text-white after:absolute after:bottom-[-8px] after:left-0 after:w-full after:h-[2px] after:bg-white"
          : "text-white hover:text-gray-300"
      }`}
    >
      {label}
    </a>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const mobileMenuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const links = [
    { href: "/", label: "Home" },
    { href: "/about-us", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/contact-us", label: "Contact Us" },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target) &&
        !event.target.closest(".mobile-menu-button")
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="sticky top-0 z-20 bg-[#061D41] shadow-md">
      <div className="container px-10 mx-auto">
        <div className="flex items-center justify-between py-3 lg:py-5">
          <a href="/">
            <img className="w-[200px] cursor-pointer" src={img} alt="Logo" />
          </a>

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

          <div className="items-center hidden gap-1 lg:flex xl:gap-3">
            {links.map((link) => (
              <NavbarLink
                key={link.href}
                href={link.href}
                label={link.label}
                isActive={window.location.pathname === link.href}
              />
            ))}
          </div>

          <div
            className={`fixed inset-y-0 right-0 bg-[#061D41] opacity-[0.9] w-[200px] z-[1] transform rounded-l-2xl shadow-2xl container mx-auto transition-transform duration-300 ease-in-out lg:hidden flex flex-col items-start px-4 py-6 space-y-4 ${
              isOpen ? "translate-x-0" : "translate-x-full"
            }`}
            ref={mobileMenuRef}
          >
            {links.map((link) => (
              <NavbarLink
                key={link.href}
                href={link.href}
                label={link.label}
                isActive={window.location.pathname === link.href}
              />
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
