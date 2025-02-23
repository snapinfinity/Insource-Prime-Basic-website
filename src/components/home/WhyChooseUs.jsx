import React from 'react';
import { KeyRound, Banknote, CheckCircle, Award } from 'lucide-react'; // Import icons

const WhyChooseUs = () => {
    const services = [
        {
            title: "Easy Account Opening",
            description: "Hassle-free process for all nationalities and businesses.",
            image: "/assets/easy-account.png",
            icon: KeyRound 
        },
        {
            title: "Direct Access to UAE’s Top Banks",
            description: "Exclusive banking network for faster approvals.",
            image: "/assets/top-banks.png",
            icon: Banknote // Use Banknote icon
        },
        {
            title: "Fast Processing & Full Compliance",
            description: "Navigating regulations for smooth onboarding.",
            image: "/assets/fast-processing.png",
            icon: CheckCircle // Use CheckCircle icon
        },
        {
            title: "20+ Years of Expertise",
            description: "Banking specialists guiding you at every step.",
            // image: "/assets/expertise.png",
            icon: Award // Use Award icon
        }
    ];

    return (
        <div className="bg-[#061D41] relative overflow-hidden py-16 text-white">
            <div className="container px-6 mx-auto lg:px-0">
                <div className="mb-16 text-left md:text-center">
                    <h2 className="mb-6 text-4xl font-bold md:text-5xl">
                        Why Choose Us?
                    </h2>
                    <p className="max-w-3xl mx-auto text-gray-300">
                        We provide seamless bank account opening services with expertise and efficiency.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 md:gap-y-24 gap-y-18 gap-x-48 xl:py-14">
                    {services?.map((item, index) => (
                        <div key={index} className={`flex items-center gap-5 md:${index % 2 === 0 ? 'flex-row-reverse' : 'flex-row'}`}>
                            <div className="flex items-center ">
                                <item.icon className="w-8 h-8 mr-2 text-[#0E4DAA]" /> 
                                {/* <img
                                    className="w-[86px] h-[86px] rounded-[15px] mx-2"
                                    src={item.image}
                                    alt={item.title}
                                /> */}
                            </div>
                            <p className={`mt-2 xl:text-2xl md:text-xl text-lg md:${index % 2 === 0 ? 'text-right' : 'text-left'} text-white font-outfit xl:max-w-[50%] md:max-w-[70%] max-w-[60%]`}>
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;