import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import img1 from "../../assets/IMG.jpg";
import img2 from "../../assets/slide-3.jpg";
import img3 from "../../assets/slider-2.jpg";
import { useNavigate } from "react-router-dom";
// import img4 from "../../assets/slider5.jpg";

const images = [img1, img2, img3];

const Hero = () => {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="relative flex items-center justify-center min-h-screen overflow-hidden bg-[#0a0f36]" >
      <div className="absolute inset-0 w-full h-full">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentImageIndex}
            src={images[currentImageIndex]}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 object-cover w-full h-full"
          />
        </AnimatePresence>
      </div>

      
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f36]/70 via-[#0a0f36]/50 to-[#000000]/80"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 to-blue-900/10 mix-blend-overlay"></div>
      </div>

  
      <div className="container relative z-10 px-6 mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className="flex flex-col items-center gap-8"
        >
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.8 }}
            className="text-4xl font-bold leading-tight text-white xl:text-6xl"
          >
            Seamless Bank Account
            <br />
            <span className="text-[#2874EB] inline-block mt-2">
              Opening in the UAE
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.3 }}
            className="max-w-2xl text-lg text-gray-300"
          >
            Fast, Secure & Hassle-Free Solutions for Individuals & Businesses
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.5 }}
          >
            <button className="bg-[#2874EB] hover:bg-[#1d5fc7] text-white md:px-8 px-5 lg:py-4 py-3 rounded-full flex items-center gap-2 transition-all shadow-lg shadow-blue-500/20"       onClick={() => navigate('/contact-us')}>
              Contact Us
              <ArrowUpRight size={20} />
            </button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
