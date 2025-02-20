import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import img from "../../assets/hero_image.webp"

const Hero = () => {
  return (
    <div className="relative  bg-[#061D41] overflow-hidden h-full">
      <div className="container px-4 pt-20 mx-auto ">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <h1 className="text-4xl font-bold text-white lg:text-[54px] leading-[53px]">
            Swift & Secure Bank Account Opening in the UAE
              <br />
              <span className="text-[#2874EB] mt-2 rounded-[23px] text-[20px] ">
              Tailored Solutions for Individuals & Businesses, Hassle-Free & Efficient
              </span>
            </h1>

            <p className="max-w-xl text-lg text-gray-300">
            We provide expert banking consultancy services for corporate, offshore, private, and personal bank accounts in the UAE. Whether you’re an entrepreneur, an investor, or a business owner, we simplify the account opening process with direct access to top banks, full compliance support, and expert advisory services.
            </p>

            <div className="space-y-4">
              <button className="bg-[#2874EB] hover:bg-[#1d5fc7] text-white px-8 py-4 rounded-[53px] flex items-center gap-2 transition-colors ">
                Contact Us
                <ArrowUpRight size={20} />
              </button>
            </div>
          </div>
          <div>
            <img src={img} alt="" className='h-full w-[80%]' />
          </div>


        </div>

      </div>

      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-[#2874EB] blur-[150px] opacity-20" />
    </div>
  );
};

export default Hero;