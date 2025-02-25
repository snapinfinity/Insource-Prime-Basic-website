import React from 'react';
import { KeyRound, Banknote, CheckCircle, Award } from 'lucide-react';
import img from "../../assets/test2.gif"
import img1 from "../../assets/gif.gif"
import img2 from "../../assets/new1.gif"
import img3 from "../../assets/new3.gif"
import img4 from "../../assets/new2.gif"
import bg from "../../assets/wave.png"
const WhyChooseUs = () => {
    const features = [
        {
            title: "Easy Account Opening",
            description: "Hassle-free process for all nationalities and businesses.",
            image: img2,
            icon: KeyRound,
            width: "50%"
        },
        {
            title: "Direct Access to UAE’s Top Banks",
            description: "Exclusive banking network for faster approvals.",
            image: img3,
            icon: Banknote,
            width: "70%"
        },
        {
            title: "Fast Processing & Full Compliance",
            description: "Navigating regulations for smooth onboarding.",
            image: img4,
            icon: CheckCircle,
            width: "65%"
        },
        {
            title: "20+ Years of Expertise",
            description: "Banking specialists guiding you at every step.",
            image: img1,
            icon: Award,
            width: "70%"
        }
    ];


    return (
        <div className="relative pt-10 pb-20 overflow-hidden text-white " 
        // style={{
        //     backgroundImage: `url(${bg})`,
        //     backgroundSize: 'cover',
        //     backgroundPosition: 'center',
        //     backgroundRepeat: 'no-repeat'
        // }}
        >
            <div className="container px-10 mx-auto ">
            <div className="mb-16 text-center">
                    <h2 className="mb-6 text-4xl font-bold md:text-5xl">
                        Why Choose Us?
                    </h2>
                    <p className="max-w-3xl mx-auto text-gray-300">
                        We provide seamless bank account opening services with expertise and efficiency.
                    </p>
                </div>
                <div className="flex flex-wrap justify-center">
                    <div className="grid w-full max-w-6xl grid-cols-1 sm:grid-cols-2 gap-x-8 sm:gap-x-12 md:gap-x-16 lg:gap-x-20 gap-y-10 sm:gap-y-12 md:gap-y-16 lg:gap-y-20">
                        {features.map((feature, index) => (
                            <div key={index} className="flex flex-col items-center text-center sm:flex-row sm:items-start md:items-center sm:text-left">
                                <div className="mb-4 sm:mb-0 sm:mr-4 md:mr-6">
                                    <img 
                                    
                                        src={feature.image} 
                                        alt={feature.title}
                                        className="object-cover w-20 h-20 sm:w-20 sm:h-20 md:w-24 md:h-24"
                                    />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold sm:text-1xl md:text-2xl">{feature.title}</h3>
                                    <p className="mt-2 text-sm md:text-base">{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default WhyChooseUs;