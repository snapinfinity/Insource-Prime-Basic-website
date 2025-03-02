import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const MobileNavbar = ({ isOpen, closeMenu, links }) => {
  const menuRef = useRef(null);
  const location = useLocation();
  const [openDropdown, setOpenDropdown] = useState(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu();
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, closeMenu]);

  const handleDropdownToggle = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <div
      ref={menuRef}
      className={`fixed inset-y-0 right-0 bg-[#10153D] w-[250px] z-20 transform rounded-l-2xl shadow-2xl flex flex-col items-start px-4 py-6 transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="w-full pt-12">
        {links.map((link, index) => (
          <div key={index} className="w-full py-2">
            {link.dropdown ? (
              <div>
                <button
                  onClick={() => handleDropdownToggle(index)}
                  className="w-full py-2 text-left text-white"
                >
                  {link.label}
                </button>
                {openDropdown === index && (
                  <div className="ml-4">
                    {link.dropdown.map((item) => (
                      <Link key={item.href} to={item.href} onClick={closeMenu} className="block py-1 text-white">
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link to={link.href} onClick={closeMenu} className="block py-2 text-white">
                {link.label}
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobileNavbar;
