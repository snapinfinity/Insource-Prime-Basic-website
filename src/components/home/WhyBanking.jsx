import React from 'react';
import { FileText, Clock, Banknote, ShieldCheck, Briefcase, CheckCircle } from "lucide-react";
import bg1 from "../../assets/about.jpg"
const WhyBanking = () => {
    const features = [
        {
            icon: <FileText className="w-8 h-8 text-slate-700" />,
            title: "Expert Guidance on Banking Regulations",
            description: "UAE banks have strict KYC (Know Your Customer) and compliance policies. A consultancy ensures that all requirements are met, reducing the risk of application rejection.",
        },
        {
            icon: <Clock className="w-8 h-8 text-slate-700" />,
            title: "Time and Effort Savings",
            description: "The documentation and approval process can be time-consuming. A consultancy streamlines the process, handling paperwork and coordination with banks, saving you valuable time.",
        },
        {
            icon: <Banknote className="w-8 h-8 text-slate-700" />,
            title: "Access to the Right Banking Solutions",
            description: "With various banks offering different services, choosing the right one can be overwhelming. Consultants assess your needs and connect you with banks that align with your financial goals.",
        },
        // {
        //     icon: <CheckCircle className="w-8 h-8 text-slate-700" />,
        //     title: "Faster Approvals & Hassle-Free Process",
        //     description: "Through established relationships with banks, consultancies facilitate faster account approvals and smoother transactions, avoiding unnecessary delays.",
        // },
        // {
        //     icon: <Briefcase className="w-8 h-8 text-slate-700" />,
        //     title: "Tailored Solutions for Businesses & Individuals",
        //     description: "Whether you're an entrepreneur, a high-net-worth individual, or an expatriate, a consultancy provides customized banking solutions that fit your specific financial needs.",
        // },
        // {
        //     icon: <ShieldCheck className="w-8 h-8 text-slate-700" />,
        //     title: "Confidential & Secure Assistance",
        //     description: "Consultancies ensure your financial information is handled professionally, maintaining high levels of confidentiality and security.",
        // },
    ];
    

    return (
        <div   className='relative py-10 bg-center bg-no-repeat bg-cover'  
                style={{ backgroundImage: `url(${bg1})` }}>
            <div className="container px-10 py-20 mx-auto">
                <div className="grid grid-cols-2 gap-6">
                    <div className="text-[50px] flex justify-center items-center font-bold text-[#061D41]">
                        Why a Banking Consultancy?
                    </div>
                    <div className="text-lg leading-relaxed text-slate-600">
                        The UAE banking system is known for its robust financial regulations, diverse banking options, and strict compliance requirements. While this ensures a secure financial environment, it can also make opening and managing a bank account complex, especially for businesses, expatriates, and international investors. A banking consultancy acts as a bridge, simplifying the process and ensuring a smooth experience.
                    </div>
                </div>
                <div className="mt-20">
                    <div className="grid grid-cols-1 gap-8 mt-12 md:grid-cols-3">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center p-6 text-center transition-shadow duration-300 bg-white rounded-lg shadow-sm hover:shadow-md"
                            >
                                <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-slate-100">
                                    {feature.icon}
                                </div>
                                <h3 className="mb-3 text-xl font-semibold text-slate-800">
                                    {feature.title}
                                </h3>
                                <p className="text-slate-600">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyBanking;