import React from "react";
import bg from "../../assets/get_started.jpg"; // Ensure the correct path

const GetStarted = () => {
    return (
        <div
            className="relative flex flex-col items-center justify-center py-12 text-center text-white lg:py-32"
            style={{
                backgroundImage: `url(${bg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundColor: "rgba(10, 22, 43, 0.89)",
                backgroundBlendMode: "overlay",
            }}
        >
            <div className="container px-10 mx-auto ">
                <h2 className="mb-4 text-4xl font-bold text-left md:text-5xl md:text-center ">Our Vision</h2>
                <p className="xl:w-[50%] md:w-[70%] w-full mx-auto mb-8 text-lg text-left md:text-center ">
                    Our vision is to be the <span className="font-semibold">leading financial consultancy</span> that empowers businesses and individuals with <span className="font-semibold">seamless access</span> to UAE banking services.  
                    We are committed to <span className="font-semibold">efficiency, transparency, and professionalism</span>, ensuring our clients navigate financial landscapes with ease and confidence.  
                    By providing innovative solutions and expert guidance, we strive to open doors to <span className="font-semibold">new financial possibilities</span> in the UAE.
                </p>
            </div>
        </div>
    );
};

export default GetStarted;
