import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import img from "../../assets/hero.png"

const Hero = () => {
  return (
    <div className='bg-[#061D41] relative '>
      <div className='container flex flex-col px-10 pt-10 mx-auto lg:items-center md:flex-row lg:pt-0'>
        <div className="flex flex-col gap-10 md:w-1/2">
          <h1 className="text-4xl font-bold text-white xl:text-6xl ">
            Seamless Bank Account
            <br />
            <span className="text-[#2874EB] pt-2 rounded-[23px] ">
              Opening in the UAE
            </span>
          </h1>

          <p className="max-w-xl text-lg text-gray-300">
            Fast, Secure & Hassle-Free Solutions for Individuals & Businesses
          </p>

          <div className="">
            <button className="bg-[#2874EB] hover:bg-[#1d5fc7] text-white md:px-8 px-4 lg:py-4 py-2 rounded-[53px] flex items-center gap-2 transition-colors ">
              Contact Us
              <ArrowUpRight size={20} />
            </button>
          </div>
        </div>
        <div className='flex items-center justify-center md:w-1/2'>
          <img src={img} alt="" className='h-full md:w-[90%] w-full' />
        </div>

        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-[#2874EB] blur-[150px] opacity-20" />
      </div>
    </div>
  );
};

export default Hero;