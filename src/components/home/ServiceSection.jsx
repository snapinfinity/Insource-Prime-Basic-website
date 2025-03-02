import React, { useEffect } from 'react';
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';
import bg from "../../assets/bg_overlay.png";
import img from "../../assets/offshore Banking.svg";
import img1 from "../../assets/Personal Banking.svg";
import img2 from "../../assets/private banking.svg";
import img3 from "../../assets/Corporate bank account.svg";
import { fadeIn, fadeOut } from '../../shared/animation/Motion';

const ServiceSection = () => {
    const navigate = useNavigate();
 
    useEffect(() => {
        if (location.hash === "#hero") {
            const heroSection = document.getElementById("hero");
            if (heroSection) {
                heroSection.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, [location]);

    const services = [
        {
            icon: img3,
            title: 'Corporate Bank Account Opening',
            description: 'Business bank accounts for Freezone & Mainland companies. Expertise in dealing with all major UAE banks.',
            link: "/services/corporate-banking", 
        },
        {
            icon: img,
            title: 'Offshore Bank Account Opening',
            description: 'Offshore banking solutions for BVI companies and international businesses. Secure, tax-efficient banking options.',
            link: "/services/offshore-banking",
        },
        {
            icon: img2,
            title: 'Private Banking',
            description: 'Exclusive Private Banking onboarding in DIFC & Local Banks. Personalized financial solutions with dedicated wealth advisors.',
            link: "/services/private-banking",
        },
        {
            icon: img1,
            title: 'Personal Bank Account Opening',
            description: 'Hassle-free account opening for all nationalities. Fast processing with minimal documentation.',
            link: "/services/personal-banking",
        },
    ];

    const handleNavigate = (link) => {
        navigate(link);
        
        setTimeout(() => {
            window.location.href = `${link}`;
        }, 500);
    };
    
    

    return (
        <div className="py-20 text-white bg-[#10153D]" style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
        }}>
            <div className="container px-10 mx-auto text-center">
                <h2 className="pb-12 lg:text-[53px] text-[30px] font-semibold">
                    What we can help you with
                </h2>

                {/* Desktop View with Animation */}
                <motion.div
                    variants={fadeIn("right", 0.1)}
                    initial="hidden"
                    whileInView={"show"}
                    className="hidden md:block"
                >
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                variants={fadeOut("right", "spring", index * 0.5, 0.75)}
                                initial="hidden"
                                whileInView={"show"}
                                className="flex flex-col justify-between p-6 border rounded-[20px] transform transition-transform duration-300 hover:scale-105"
                            >
                                <div>
                                    <div className="flex justify-center mb-4">
                                        <img src={service.icon} alt={service.title} className="w-12 h-12" />
                                    </div>
                                    <h3 className="mb-2 text-xl font-semibold">{service.title}</h3>
                                    <p className="mb-4 text-gray-300">{service.description}</p>
                                </div>
                                <div className="flex justify-center">
                                    <button
                                        className="px-4 py-2 mt-4 font-semibold text-white bg-[#0E4DAA] rounded-[20px] hover:bg-[#0E4DAA] w-[200px]"
                                        onClick={() => handleNavigate(service.link)}
                                    >
                                        Read More
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Mobile View Without Animation */}
                <div className="md:hidden">
                    <div className="grid grid-cols-1 gap-8">
                        {services.map((service, index) => (
                            <div key={index} className="flex flex-col justify-between p-6 border rounded-[20px] hover:scale-105">
                                <div>
                                    <div className="flex justify-center mb-4">
                                        <img src={service.icon} alt={service.title} className="w-12 h-12" />
                                    </div>
                                    <h3 className="mb-2 text-xl font-semibold text-center">{service.title}</h3>
                                    <p className="mb-4 text-center text-gray-300">{service.description}</p>
                                </div>
                                <div className="flex justify-center">
                                    <button
                                        className="px-4 py-2 mt-4 font-semibold text-white bg-[#0E4DAA] rounded-[20px] hover:bg-[#0E4DAA] w-[200px]"
                                        onClick={() => handleNavigate(service.link)}
                                    >
                                        Read More
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceSection;
