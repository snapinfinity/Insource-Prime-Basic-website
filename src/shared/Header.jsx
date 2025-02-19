import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import img from "../assets/INSOURCE.svg";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
    const [selectedItem, setSelectedItem] = useState('home');
    const [scrolled, setScrolled] = useState(0);
    const location = useLocation();
    const navigate = useNavigate();

    const menuItems = [
        { title: 'Home', path: '/' },
        { title: 'About Us', path: '/about' },
        { title: 'Services', path: '/services' },
        { title: 'Contact', path: '/#contact' }
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const handleOutsideClick = (e) => {
            if (showDropdown && !e.target.closest('.dropdown-container')) {
                setShowDropdown(false);
            }
        };
        document.addEventListener('click', handleOutsideClick);
        return () => document.removeEventListener('click', handleOutsideClick);
    }, [showDropdown]);

    const handleNavigation = (path, itemTitle) => {
        navigate(path);
        setSelectedItem(itemTitle.toLowerCase());
        if (path === '/') {
            window.scrollTo(0, 0);
        }
        setIsMenuOpen(false);
    };

    return (
        <header
            className={`fixed w-full transition-all duration-500 ease-in-out ${scrolled > 10 ? 'bg-white shadow-lg backdrop-blur-md' : 'bg-transparent'
                } z-50`}
        >

            <div className="container px-4 py-4 mx-auto">
                <div className="flex items-center justify-between">
                    <div className="flex-shrink-0 cursor-pointer" onClick={() => handleNavigation('/', 'home')}>
                        <img
                            src={img}
                            alt="Logo"
                            className={`w-auto h-14 transition-all duration-500 ease-in-out ${scrolled > 10 ? '' : 'brightness-0 invert'
                                }`}
                        />

                    </div>
                    <nav className="items-center hidden space-x-8 md:flex">
                        {menuItems.map((item) => (
                            <div key={item.title} className={`relative group ${item.isDropdown ? 'dropdown-container' : ''
                                }`}>
                                <button
                                    className={`flex items-center space-x-1 ${scrolled > 10
                                            ? `text-gray-700 hover:text-blue-900 ${selectedItem === item.title.toLowerCase() ? 'text-blue-900 font-medium' : ''
                                            }`
                                            : 'text-white hover:text-gray-200'
                                        }`}
                                    onClick={() => item.isDropdown ? setShowDropdown(!showDropdown) : handleNavigation(item.path, item.title)}
                                >
                                    <span className="text-sm font-medium">{item.title}</span>
                                    {item.isDropdown && <ChevronDown className="w-4 h-4 ml-1" />}
                                </button>

                                {item.isDropdown && showDropdown && (
                                    <div className="absolute left-0 w-48 py-2 mt-2 bg-white rounded-md shadow-lg">
                                        {item.dropdownItems.map((dropItem) => (
                                            <button
                                                key={dropItem.title}
                                                className="block w-full px-4 py-2 text-[18px] text-left text-gray-700 hover:bg-gray-100"
                                                onClick={() => handleNavigation(dropItem.path, dropItem.title)}
                                            >
                                                {dropItem.title}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </nav>

                    <div className="hidden md:block">
                        <button
                            onClick={() => handleNavigation('/#contact', 'contact')}
                            className={`px-6 py-2 rounded-md transition-colors ${scrolled > 10
                                    ? 'text-white bg-blue-900 hover:bg-blue-800'
                                    : 'text-blue-900 bg-white hover:bg-gray-100'
                                }`}
                        >
                            Connect Us
                        </button>
                    </div>

                    <button
                        className={`md:hidden ${scrolled > 10 ? 'text-gray-700' : 'text-white'}`}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? (
                            <X className="w-6 h-6" />
                        ) : (
                            <Menu className="w-6 h-6" />
                        )}
                    </button>
                </div>

                {isMenuOpen && (
                    <div className={`pb-4 mt-4 md:hidden ${scrolled > 10 ? 'border-t border-gray-200' : 'border-t border-gray-200 border-opacity-20'
                        }`}>
                        <nav className="flex flex-col mt-4 space-y-4">
                            {menuItems.map((item) => (
                                <div key={item.title}>
                                    <button
                                        className={`flex items-center justify-between w-full px-4 py-2 ${scrolled > 10
                                                ? 'text-gray-700 hover:text-blue-900'
                                                : 'text-white hover:text-gray-200'
                                            }`}
                                        onClick={() => {
                                            if (item.isDropdown) {
                                                setShowDropdown(!showDropdown);
                                            } else {
                                                handleNavigation(item.path, item.title);
                                            }
                                        }}
                                    >
                                        <span className="text-sm font-medium">{item.title}</span>
                                        {item.isDropdown && <ChevronDown className="w-4 h-4" />}
                                    </button>
                                </div>
                            ))}
                            <button
                                onClick={() => handleNavigation('/#contact', 'contact')}
                                className={`px-6 py-2 mx-4 rounded-md transition-colors ${scrolled > 10
                                        ? 'text-white bg-blue-900 hover:bg-blue-800'
                                        : 'text-blue-900 bg-white hover:bg-gray-100'
                                    }`}
                            >
                                Connect Us
                            </button>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;