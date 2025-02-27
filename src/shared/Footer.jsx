import React from 'react';
import img from "../assets/insourcewhite-cropped.svg";
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail, Globe } from "lucide-react";

const contactInfo = [
  { icon: <MapPin size={24} className="text-gray-300" />, text: "Office #3806A, Single Business Tower - Business Bay-Dubai - United Arab Emirates" },
  { icon: <Phone size={20} className="text-gray-300" />, text: "+971 50 859 0446" },
  { icon: <Mail size={20} className="text-gray-300" />, text: "md@insourceprime.com", link: "mailto:md@insourceprime.com" },
  { icon: <Globe size={20} className="text-gray-300" />, text: "www.insourceprime.com", link: "https://www.insourceprime.com" }
];

const quickLinks = [
  { name: "Home", link: "#" },
  { name: "About Us", link: "#" },
  { name: "Services", link: "#" },
  { name: "Contact Us", link: "#" }
];

const socialLinks = [
  { icon: <Facebook />, link: "#" },
  { icon: <Twitter />, link: "#" },
  { icon: <Instagram />, link: "#" },
  { icon: <Linkedin />, link: "#" }
];

const Footer = () => {
  return (
    <footer className="py-16 text-white bg-gradient-to-r from-black to-[#061D41]">
      <div className="container px-10 mx-auto">
        <div className="hidden grid-cols-1 gap-8 md:grid md:grid-cols-4 ">
          <div className="space-y-4">
            <img className="w-[150px] cursor-pointer" src={img} alt="Logo" />
            <p className="text-gray-300">
              Seamless Bank Account Opening in the UAE
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.link} className="hover:text-gray-300">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>


          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Contact Us</h3>
            {contactInfo.map((item, index) => (
              <p key={index} className="flex items-center gap-2 text-gray-300">
                {item.icon}
                {item.link ? (
                  <a href={item.link} target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                    {item.text}
                  </a>
                ) : (
                  item.text
                )}
              </p>
            ))}
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Follow Us</h3>
            <div className="flex pt-4 space-x-4">
              {socialLinks.map((social, index) => (
                <a key={index} href={social.link} className="text-2xl text-gray-300 hover:text-white">
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>



        <div className="flex flex-col gap-10 md:hidden">
          <div className="space-y-4">
            <img className="w-[150px] cursor-pointer" src={img} alt="Logo" />
            <p className="text-gray-300">
              Seamless Bank Account Opening in the UAE
            </p>
          </div>
          <div className='grid grid-cols-2 '>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Quick Links</h3>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.link} className="hover:text-gray-300">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4 ">
              <h3 className="text-xl font-semibold">Contact Us</h3>
              {contactInfo.map((item, index) => (
                <p key={index} className="flex items-center gap-2 text-gray-300 break-all">
                  {item.icon}
                  {item.link ? (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="break-all hover:text-gray-300"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <span className="break-all">{item.text}</span>
                  )}
                </p>

              ))}
            </div>
          </div>


          <div className="flex flex-col items-center justify-center">
         
            <div className="flex gap-8 pt-4">
              {socialLinks.map((social, index) => (
                <a key={index} href={social.link} className="text-2xl text-gray-300 hover:text-white">
                  {social.icon}
                </a>
              ))}
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
