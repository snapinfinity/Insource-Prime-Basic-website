import React from 'react';
import { KeyRound, Banknote, CheckCircle, Award } from 'lucide-react';
import img from "../../assets/test2.gif"
import img1 from "../../assets/gif.gif"
import img2 from "../../assets/new1.gif"
import img3 from "../../assets/gif12.gif"
import img4 from "../../assets/new2.gif"
import bg from "../../assets/slide-4.jpg"

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
            title: "Direct Access to UAE's Top Banks",
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
        <div className="relative pt-16 pb-24 overflow-hidden text-white"
            style={{
                background: "linear-gradient(rgba(10, 15, 54, 0.92), rgba(10, 15, 54, 0.96)), url(" + bg + ")",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
        >
            {/* Blue gradient overlays for depth */}
            <div className="absolute top-0 left-0 w-full h-64 bg-blue-600/20 blur-3xl mix-blend-soft-light"></div>
            <div className="absolute bottom-0 right-0 w-full h-64 bg-blue-600/20 blur-3xl mix-blend-soft-light"></div>
            
            {/* Blue accent lights */}
            <div className="absolute w-64 h-64 rounded-full top-1/4 left-1/4 bg-blue-500/30 blur-3xl mix-blend-overlay"></div>
            <div className="absolute w-64 h-64 rounded-full bottom-1/4 right-1/4 bg-blue-500/30 blur-3xl mix-blend-overlay"></div>
            
            <div className="container relative z-10 px-6 mx-auto">
                <div className="mb-16 text-center">
                    <h2 className="relative mb-6 text-4xl font-bold md:text-5xl">
                    The Insourse 360 Advantage
                       
                    </h2>
                    <p className="max-w-3xl mx-auto mt-8 text-gray-300">
                        We provide seamless bank account opening services with expertise and efficiency.
                    </p>
                </div>
                
                <div className="flex flex-wrap justify-center">
                    <div className="grid w-full max-w-6xl grid-cols-1 sm:grid-cols-2 gap-x-8 sm:gap-x-12 md:gap-x-16 lg:gap-x-20 gap-y-12 sm:gap-y-16 md:gap-y-20 lg:gap-y-24">
                        {features.map((feature, index) => (
                            <div key={index} className="flex flex-col items-center p-6 text-center transition-transform duration-300 sm:flex-row sm:items-start md:items-center sm:text-left rounded-xl hover:transform hover:scale-105" style={{
                                background: "linear-gradient(145deg, rgba(16, 21, 61, 0.5), rgba(16, 21, 61, 0.8))",
                                backdropFilter: "blur(10px)",
                                border: "1px solid rgba(255, 255, 255, 0.1)"
                            }}>
                                <div className="flex items-center justify-center p-3 mb-4 border rounded-full sm:mb-0 sm:mr-6 md:mr-8 bg-blue-600/30 border-blue-500/30">
                                    <img
                                        src={feature.image}
                                        alt={feature.title}
                                        className="object-cover w-20 h-20 rounded-full sm:w-16 sm:h-16 md:w-20 md:h-20 drop-shadow-lg"
                                    />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white sm:text-xl md:text-2xl">{feature.title}</h3>
                                    <p className="mt-2 text-sm text-gray-300 md:text-base">{feature.description}</p>
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