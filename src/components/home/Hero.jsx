import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import img from "../../assets/hero.png";

const Hero = () => {
  return (
    <div className='bg-[#061D41] relative overflow-hidden'
    //  style={{
    //             backgroundImage: `linear-gradient(rgba(6, 29, 65, 0.9), rgba(6, 29, 65, 0.9)), url(${bg})`,
    //             backgroundSize: 'cover',
    //             backgroundPosition: 'center',
    //             backgroundRepeat: 'no-repeat'
    //         }}
            >
      <div className='container flex flex-col px-10 pt-10 mx-auto lg:items-center md:flex-row lg:pt-0'>
        <motion.div 
          initial={{ opacity: 0, x: -50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-10 md:w-1/2"
        >
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl font-bold text-white xl:text-6xl "
          >
            Seamless Bank Account
            <br />
            <span className="text-[#2874EB] pt-2 rounded-[23px] ">
              Opening in the UAE
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1, delay: 0.2 }}
            className="max-w-xl text-lg text-gray-300"
          >
            Fast, Secure & Hassle-Free Solutions for Individuals & Businesses
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <button className="bg-[#2874EB] hover:bg-[#1d5fc7] text-white md:px-8 px-4 lg:py-4 py-2 rounded-[53px] flex items-center gap-2 transition-colors ">
              Contact Us
              <ArrowUpRight size={20} />
            </button>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className='flex items-center justify-center md:w-1/2'
        >
          <img src={img} alt="" className='h-full md:w-[90%] w-full' />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-[#2874EB] blur-[150px]"
        />
      </div>
    </div>
  );
};

export default Hero;