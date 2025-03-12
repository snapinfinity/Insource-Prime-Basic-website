import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import bg from "../../assets/bg_overlay.png";
import img from "../../assets/offshore Banking.svg";
import img1 from "../../assets/Personal Banking.svg";
import img2 from "../../assets/private banking.svg";
import img3 from "../../assets/Corporate bank account.svg";
import complianceImg from "../../assets/private banking.svg"; 
import { ShieldCheck, AlertTriangle, FileCheck, Users, MessageSquare } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/pagination';

const ServiceSection = () => {
    const navigate = useNavigate();
    const location = useLocation();

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
        {
            icon: complianceImg,
            title: 'Compliance Advisory',
            description: 'End-to-end compliance solutions for financial institutions. Expert guidance on AML, KYC, and regulatory requirements.',
            link: "/services/compliance-advisory",
        },
    ];

    const handleNavigate = (link) => {
        navigate(link);
        setTimeout(() => {
            const heroSection = document.getElementById("hero");
            if (heroSection) {
                heroSection.scrollIntoView({ behavior: "smooth" });
            } else {
                window.scrollTo({ top: 0, behavior: "smooth" });
            }
        }, 100); 
    };

    return (
        <div className="py-20 text-white bg-[#10153D]" style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
        }}>
            <div className="container px-4 mx-auto text-center md:px-10">
                <h2 className="pb-12 lg:text-[53px] text-[30px] font-semibold">
                    What we can help you with
                </h2>

                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={20}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                        1280: { slidesPerView: 4 },
                    }}
                    className="pb-12"
                    style={{paddingBottom:"40px"}}
                >
                    {services.map((service, index) => (
                        <SwiperSlide key={index} >
                            <div className="flex flex-col justify-between p-6 border rounded-[20px] h-[350px] transform transition-transform duration-300 ">
                                <div>
                                    <div className="flex justify-center mb-4">
                                        <img src={service.icon} alt={service.title} className="w-12 h-12" />
                                    </div>
                                    <h3 className="mb-2 text-xl font-semibold">{service.title}</h3>
                                    <p className="mb-4 text-gray-300">{service.description}</p>
                                </div>
                                <div className="flex justify-center mt-auto">
                                    <button
                                        className="px-4 py-2 mt-4 font-semibold text-white bg-[#0E4DAA] rounded-[20px] hover:bg-opacity-80 w-[200px]"
                                        onClick={() => handleNavigate(service.link)}
                                    >
                                        Read More
                                    </button>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default ServiceSection;