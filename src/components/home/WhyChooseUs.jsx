import React from 'react';
import { KeyRound, Banknote, CheckCircle, Award } from 'lucide-react'; // Import icons
import img from "../../assets/test2.gif"
const WhyChooseUs = () => {
    const services = [
        {
            title: "Easy Account Opening",
            description: "Hassle-free process for all nationalities and businesses.",
            image: img,
            icon: KeyRound
        },
        {
            title: "Direct Access to UAE’s Top Banks",
            description: "Exclusive banking network for faster approvals.",
            image:img,
            icon: Banknote // Use Banknote icon
        },
        {
            title: "Fast Processing & Full Compliance",
            description: "Navigating regulations for smooth onboarding.",
            image:img,
            icon: CheckCircle // Use CheckCircle icon
        },
        {
            title: "20+ Years of Expertise",
            description: "Banking specialists guiding you at every step.",
            image: img,
            icon: Award
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
                <div className='flex justify-center w-full '>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8 xl:py-14 w-[70%]">
                        {services?.map((item, index) => (
                            <div
                                key={index}
                                className={`flex items-center gap-5 md:${index % 2 === 0 ? "flex-row-reverse" : "flex-row"
                                    }`}
                            >
                                <div className={` flex items-center `}>
                                    {/* <item.icon className="w-14 h-14 mr-2 text-[#0E4DAA]" /> */}
                                    <img
                                        className="w-[80%] rounded-[15px] mx-2"
                                        src={item.image}
                                        alt={item.title}
                                    />
                                </div>
                                <p
                                    className={`mt-2 xl:text-2xl md:text-xl text-lg md:${index % 2 === 0 ? "text-rig" : "text-left"
                                        } text-white font-outfit`}
                                >
                                    {item.description}
                                </p>

                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default WhyChooseUs;