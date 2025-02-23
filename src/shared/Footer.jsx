import React from 'react';
import img from "../assets/iplogo.png";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-16 text-white bg-gradient-to-r from-black to-[#061D41]">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
     
          <div className="space-y-4">
            <img className="w-[150px] cursor-pointer" src={img} alt="Logo" />
            <p className="text-gray-300">
              Seamless Bank Account Opening in the UAE
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-300">Home</a></li>
              <li><a href="#" className="hover:text-gray-300">About Us</a></li>
              <li><a href="#" className="hover:text-gray-300">Services</a></li>
              <li><a href="#" className="hover:text-gray-300">Contact Us</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Contact Us</h3>
            <p className="text-gray-300">📍 [Your Office Address]</p>
            <p className="text-gray-300">📞 +971 50 859 0446</p>
            <p className="text-gray-300">📧 <a href="mailto:md@insourceprime.com" className="hover:text-gray-300">md@insourceprime.com</a></p>
            <p className="text-gray-300">🌐<a href="https://www.insourceprime.com" target="_blank" className="hover:text-gray-300">www.insourceprime.com</a></p>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Follow Us</h3>
           

            <div className="flex pt-4 space-x-4">
              <a href="#" className="text-2xl text-gray-300 hover:text-white">
                <Facebook />
              </a>
              <a href="#" className="text-2xl text-gray-300 hover:text-white">
                <Twitter />
              </a>
              <a href="#" className="text-2xl text-gray-300 hover:text-white">
                <Instagram />
              </a>
              <a href="#" className="text-2xl text-gray-300 hover:text-white">
                <Linkedin />
              </a>
            </div>
          </div>
        </div>

       
        <div className="pt-8 mt-16 text-center border-t border-gray-700">
          <p className="text-gray-400">
          insourceprime © 2025 All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;