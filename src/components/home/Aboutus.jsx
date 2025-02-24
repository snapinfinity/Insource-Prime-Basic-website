import React from 'react'
import img from "../../assets/macimage.png"
import bg1 from "../../assets/about.jpg"
const Aboutus = () => {
    return (
        <div  className='relative py-10 bg-center bg-no-repeat bg-cover'  
        style={{ backgroundImage: `url(${bg1})` }}>
            <div className='container flex flex-col px-10 pt-10 mx-auto lg:items-center md:flex-row lg:pt-0'>
                <div className="flex flex-col gap-10 md:w-1/2">
                    <h1 className="text-4xl font-bold text-[#061D41] xl:text-6xl ">
                        Simplifying UAE Banking
                    </h1>
                    <p className="max-w-xl text-lg text-gray-900">
                    Navigating the UAE’s banking system can be complex, but with our expert consultancy services, we make it straightforward and hassle-free. Whether you're an entrepreneur, an international business, a high-net-worth individual, or someone looking to open a personal account, we provide specialized guidance to ensure your banking experience is smooth and efficient.
                    </p>
                </div>
                <div className='flex items-center justify-center md:w-1/2'>
                    <img src={img} alt="" className='h-full md:w-[90%] w-full' />
                </div>
            </div>
            <div className="absolute bottom-0 right-0 w-full h-full bg-[#061D41] blur-[150px] opacity-20" />
        </div>
    )
}

export default Aboutus
