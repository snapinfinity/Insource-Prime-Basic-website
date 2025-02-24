import React from 'react';
import { Search, BarChart3, Wallet, Users } from 'lucide-react';
import { fadeIn, fadeOut } from '../../shared/animation/Motion';
import { motion } from "framer-motion";

const ServiceSection = () => {
    const services = [
        {
            icon: Wallet,
            title: 'Corporate Bank Account Opening',
            description: 'Business bank accounts for Freezone & Mainland companies. Expertise in dealing with all major UAE banks.',
            details: [
                'Business bank accounts for Freezone & Mainland companies',
                'Enhanced Due Diligence & Compliance Advisory',
                'Expertise in all major UAE banks',
                'Tailored solutions for different business structures',
            ],
        },
        {
            icon: BarChart3,
            title: 'Offshore Bank Account Opening',
            description: 'Offshore banking solutions for BVI companies and international businesses. Secure, tax-efficient banking options.',
            details: [
                'Offshore banking solutions for BVI companies and international businesses',
                'Assistance with company structuring & relocation',
                'Secure, tax-efficient banking options',
            ],
        },
        {
            icon: Users,
            title: 'Private Banking',
            description: 'Exclusive Private Banking onboarding in DIFC & Local Banks. Personalized financial solutions with dedicated wealth advisors.',
            details: [
                'Exclusive Private Banking onboarding in DIFC & Local Banks',
                'Personalized financial solutions with dedicated wealth advisors',
                'High-net-worth financial planning and asset management',
            ],
        },
        {
            icon: Search,
            title: 'Personal Bank Account Opening',
            description: 'Hassle-free account opening for all nationalities. Fast processing with minimal documentation.',
            details: [
                'Hassle-free account opening for all nationalities',
                'Assistance in selecting the best banking options',
                'Fast processing with minimal documentation',
            ],
        },
    ];

    return (
        <div
            className="py-20 text-white bg-[#061D41]">
            <motion.div
                variants={fadeIn("right", 0.1)}
                initial="hidden"
                whileInView={"show"}
                className="container px-10 mx-auto text-left md:text-center">
                <h2 className="pb-12 lg:text-[53px] text-[30px] font-semibold">What we can help you with</h2>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">
                    {services.map((service, index) => (
                        <motion.div
                            variants={fadeOut("right", "spring", index * 0.5, 0.75)}
                            initial="hidden"
                            whileInView={"show"}
                            key={index}
                            className="flex flex-col justify-between p-6 border rounded-[20px] transform transition-transform duration-300 scale-100 hover:scale-105"
                        >
                            <div>
                                <div className="flex justify-center mb-4">
                                    <service.icon className="w-8 h-8 text-[#0E4DAA]" />
                                </div>
                                <h3 className="mb-2 text-xl font-semibold">{service.title}</h3>
                                <p className="mb-4 text-gray-300">{service.description}</p>
                                <ul className="mb-4 text-sm text-gray-400">
                                    {service.details.map((detail, detailIndex) => (
                                        <li key={detailIndex} className="list-disc list-inside">
                                            {detail}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className='flex justify-center'>
                                <button className="px-4 py-2 mt-4 font-semibold text-white bg-[#0E4DAA] rounded-[20px] hover:bg-[#0E4DAA] w-[200px]">
                                    Read More
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default ServiceSection;
