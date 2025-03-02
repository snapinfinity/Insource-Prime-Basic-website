import React from 'react';
import img from "../assets/insourcewhite-cropped.svg";
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail, Globe } from "lucide-react";

const contactInfo = [
  {
    icon: <MapPin size={20} className="flex-shrink-0 text-white min-w-5" />,
    text: "Office #3806A, Single Business Tower - Business Bay-Dubai - United Arab Emirates"
  },
  {
    icon: <Phone size={20} className="flex-shrink-0 text-white min-w-5" />,
    text: "+971 50 859 0446"
  },
  {
    icon: <Mail size={20} className="flex-shrink-0 text-white min-w-5" />,
    text: "md@insourceprime.com",
    link: "mailto:md@insourceprime.com"
  },
  {
    icon: <Globe size={20} className="flex-shrink-0 text-white min-w-5" />,
    text: "www.insourceprime.com",
    link: "https://www.insourceprime.com"
  }
];

const quickLinks = [
  { name: "Home", link: "/" },
  { name: "About Us", link: "/about-us" },
  { name: "Services", link: "/services" },
  { name: "Contact Us", link: "/contact-us" }
];

const socialLinks = [
  { icon: <Facebook size={24} />, link: "#", ariaLabel: "Facebook" },
  { icon: <Twitter size={24} />, link: "#", ariaLabel: "Twitter" },
  { icon: <Instagram size={24} />, link: "#", ariaLabel: "Instagram" },
  { icon: <Linkedin size={24} />, link: "#", ariaLabel: "LinkedIn" }
];

const Footer = () => {
  return (
    <footer className="py-16 text-white bg-[#00051B]">
      <div className="container px-10 mx-auto">
        <div className="hidden grid-cols-1 gap-8 md:grid md:grid-cols-4">

          <div className="space-y-4">
            <img className="w-[150px] cursor-pointer" src={img} alt="Insource 360" />
            <p className="text-white">
              Seamless Bank Account Opening in the UAE
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.link} className="text-white hover:text-gray-300">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="mt-1">{contactInfo[0].icon}</span>
                <span className="text-white">{contactInfo[0].text}</span>
              </div>
              <div className="flex items-center gap-3 whitespace-nowrap">
  <span>{contactInfo[1].icon}</span>
  <span className="text-white break-keep">{contactInfo[1].text}</span>
</div>

              <div className="flex items-center gap-3 whitespace-nowrap">
                <span>{contactInfo[2].icon}</span>
                {contactInfo[2].link ? (
                  <a href={contactInfo[2].link} className="text-white hover:text-gray-300">
                    {contactInfo[2].text}
                  </a>
                ) : (
                  <span className="text-white">{contactInfo[2].text}</span>
                )}
              </div>

              <div className="flex items-center gap-3 whitespace-nowrap">
                <span>{contactInfo[3].icon}</span>
                {contactInfo[3].link ? (
                  <a href={contactInfo[3].link} target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
                    {contactInfo[3].text}
                  </a>
                ) : (
                  <span className="text-white">{contactInfo[3].text}</span>
                )}
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Follow Us</h3>
            <div className="flex pt-2 space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  aria-label={social.ariaLabel}
                  className="text-white hover:text-gray-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-10 md:hidden">
          <div className="space-y-4">
            <img className="w-[150px] cursor-pointer" src={img} alt="Insource 360" />
            <p className="text-white">
              Seamless Bank Account Opening in the UAE
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Quick Links</h3>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.link} className="text-white hover:text-gray-300">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Contact Us</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-2">
                  <span className="mt-1">{contactInfo[0].icon}</span>
                  <span className="text-white break-words">{contactInfo[0].text}</span>
                </div>

                <div className="flex items-center max-w-full gap-3 truncate whitespace-nowrap">
  <span>{contactInfo[1].icon}</span>
  <span className="text-white">{contactInfo[1].text}</span>
</div>


                <div className="flex items-center gap-2">
                  <span>{contactInfo[2].icon}</span>
                  {contactInfo[2].link ? (
                    <a
                      href={contactInfo[2].link}
                      className="overflow-hidden text-white hover:text-gray-300 whitespace-nowrap text-ellipsis"
                      style={{ maxWidth: '100%' }}
                    >
                      {contactInfo[2].text}
                    </a>
                  ) : (
                    <span className="overflow-hidden text-white whitespace-nowrap text-ellipsis">{contactInfo[2].text}</span>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  <span>{contactInfo[3].icon}</span>
                  {contactInfo[3].link ? (
                    <a
                      href={contactInfo[3].link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="overflow-hidden text-white hover:text-gray-300 whitespace-nowrap text-ellipsis "
                      style={{ maxWidth: '100%' }}
                    >
                      {contactInfo[3].text}
                    </a>
                  ) : (
                    <span className="overflow-hidden text-white break-words whitespace-nowrap text-ellipsis">{contactInfo[3].text}</span>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center">
            <h3 className="text-xl font-semibold">Follow Us</h3>
            <div className="flex gap-6 pt-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  aria-label={social.ariaLabel}
                  className="text-white hover:text-gray-300"
                >
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