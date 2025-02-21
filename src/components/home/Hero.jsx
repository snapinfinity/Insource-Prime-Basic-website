import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import img from "../../assets/hero_image.webp"

const Hero = () => {
  return (
    <div className="relative  bg-[#061D41] overflow-hidden h-full">
      <div className="container px-6 pt-20 mx-auto md:px-0 ">
        <div className="grid items-center gap-12 pt-20 lg:pt-0 lg:grid-cols-2">
          <div className="flex flex-col gap-10">
            <h1 className="text-4xl font-bold text-white xl:text-6xl md:text-5xl">
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
              <button className="bg-[#2874EB] hover:bg-[#1d5fc7] text-white md:px-8 px-4 md:py-4 py-2 rounded-[53px] flex items-center gap-2 transition-colors ">
                Contact Us
                <ArrowUpRight size={20} />
              </button>
            </div>
          </div>
          <div>
            <img src={img} alt="" className='h-full md:w-[80%] w-full' />
          </div>


        </div>

      </div>

      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-[#2874EB] blur-[150px] opacity-20" />
    </div>
  );
};

export default Hero;