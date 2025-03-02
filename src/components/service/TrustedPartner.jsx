import React from "react";
import bg1 from "../../assets/bg1.png";
import person from "../../assets/hero.png";
import logo1 from "../../assets/logo123.png"
import logo2 from "../../assets/logo1234.png"
import logo3 from "../../assets/logo12345.png"

const TrustedPartner = () => {
    const logos = [logo1, logo2, logo3, logo3];
    return (
        <div className="py-20 bg-gray-900" style={{
            backgroundImage: `linear-gradient(135deg, rgba(6, 29, 65, 0.9), rgba(6, 29, 65, 0.6)),url(${bg1})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
        }} >
            <div className="container px-10 mx-auto">
                <div className="grid w-full h-full grid-cols-1 gap-16 lg:grid-cols-2 ">
                    <div className="flex flex-col gap-3 md:gap-6">
                        <div className="relative box-gradient transition-all duration-300 ease-in-out rounded-b-[30px] shadow-lg">
                            <div className="flex justify-center">
                                <img src={person} alt="" className="z-10 sm:w-[330px] w-[250px] h-[250px]  sm:h-[330px]" />
                            </div>
                        </div>


                        <div className="grid grid-cols-2 gap-2 mt-4 md:gap-12">
                            <div className="sm:p-6 p-2 text-center text-white sm:rounded-[30px] rounded-[12px] service-gradient ">
                                <h3 className="md:text-5xl text-[26px]  font-bold ">500+</h3>
                                <p className="text-sm">Trusted Advisors</p>
                            </div>
                            <div className="sm:p-6 p-2 text-center text-white sm:rounded-[30px] rounded-[12px]  service-gradient ">
                                <h3 className="text-[26px] font-bold md:text-5xl ">5K+</h3>
                                <p className="text-sm"> Clients Empowered</p>
                            </div>
                        </div>
                    </div>
                    <div className="text-white ">
                        <h2 className="md:text-[40px] text-[28px] font-bold leading-tight">
                            More than 20k People Have Proven Our Service
                        </h2>
                        <p className="mt-4 text-lg">
                            Join a growing community of satisfied customers who have transformed their experiences with our trusted services. We prioritize quality, reliability, and customer satisfaction in everything we do.
                        </p>

                        <h3 className="mt-6 text-xl font-semibold">Meet Our Trusted Partners</h3>
                        <p className="mt-2 text-lg">
                            We collaborate with industry-leading companies to ensure you get the best possible solutions. Our partners share our commitment to excellence and innovation.
                        </p>

                        <ul className="mt-4 text-lg list-disc list-inside">
                            <li>Global leaders in technology and innovation</li>
                            <li>Top-rated service providers with proven success</li>

                        </ul>

                        <div className="flex flex-wrap gap-4 mt-6">
                            {/* {logos.map((logo, index) => (
                                <img key={index} src={logo} alt={`logo-${index}`} className="object-contain w-20 h-20" />
                            ))} */}
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default TrustedPartner;
