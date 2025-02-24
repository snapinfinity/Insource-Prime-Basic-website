import React, { useEffect, useState } from 'react';
import img1 from "../../assets/person1 (1).jpg"
import img2 from "../../assets/person1 (2).jpg"
import img3 from "../../assets/person1 (3).jpg"
import img4 from "../../assets/person1 (4).jpg"
import img5 from "../../assets/person1 (5).jpg"

const EnhancedVerticalReviews = () => {
  const [scrollPosition1, setScrollPosition1] = useState(0);
  const [scrollPosition2, setScrollPosition2] = useState(0);

  const reviews1 = [
    { name: "Ahmed Khan", date: "Jan 10, @TrustPilot", text: "Opening a bank account in the UAE was seamless with their service. The team guided me through every step, making the process stress-free! Their expertise was invaluable.", image: img1 },
    { name: "Fatima Ali", date: "Jan 12, @TrustPilot", text: "I never thought opening a business account in the UAE could be so easy. Highly recommended! They simplified everything.", image: img2 },
    { name: "John Smith", date: "Jan 15, @TrustPilot", text: "The fastest and most reliable service for setting up a UAE bank account. I was operational in no time! Truly efficient.", image: img3 }
  ];

  const reviews2 = [
    { name: "Sara Ibrahim", date: "Jan 14, @TrustPilot", text: "Professional and efficient! My UAE bank account was ready in just a few days. Highly recommend their service! The speed was impressive.", image: img4 },
    { name: "David Wong", date: "Jan 16, @TrustPilot", text: "Amazing support team! They handled all my queries and made my UAE banking setup super easy. Their communication was top-notch.", image: img1 },
    { name: "Emily Carter", date: "Jan 18, @TrustPilot", text: "Great experience! The team handled all the paperwork, and I got my account set up without hassle. Every detail was taken care of.", image: img5 }
  ];

  useEffect(() => {
    const animateScroll = () => {
      setScrollPosition1(prev => (prev > 1000 ? 0 : prev + 0.5));
      setScrollPosition2(prev => (prev < 0 ? 1000 : prev - 0.5));
    };
    const interval = setInterval(animateScroll, 20);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="py-20 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container grid grid-cols-1 gap-12 px-10 mx-auto xl:grid-cols-2">
        <div className="flex items-center justify-center order-2 xl:order-1">
          <div className="relative flex gap-8">
            <div className="relative overflow-hidden h-96 w-72">
              <div className="flex flex-col gap-6 transition-transform duration-1000 ease-linear" style={{ transform: `translateY(-${scrollPosition1}px)` }}>
                {[...reviews1, ...reviews1, ...reviews1, ...reviews1].map((review, index) => (
                  <div key={`col1-${index}`} className="flex-none p-6 transition-transform bg-white border-l-4 border-blue-500 shadow-lg rounded-xl w-72 hover:translate-x-1">
                    <div className="flex items-center gap-4 mb-4">
                      <img src={review.image} alt={review.name} className="object-fill w-12 h-12 border-2 border-blue-100 rounded-full " />
                      <div>
                        <h3 className="font-semibold text-gray-900">{review.name}</h3>
                        <p className="text-sm text-blue-400">{review.date}</p>
                      </div>
                    </div>
                    <p className="text-[#061D41] leading-relaxed">{review.text}</p>
                    <div className="flex mt-4 text-yellow-400">★★★★★</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative hidden overflow-hidden h-96 w-72 sm:block">
              <div className="flex flex-col gap-6 transition-transform duration-1000 ease-linear" style={{ transform: `translateY(-${scrollPosition2}px)` }}>
                {[...reviews2, ...reviews2, ...reviews2, ...reviews2].map((review, index) => (
                  <div key={`col2-${index}`} className="flex-none p-6 transition-transform bg-white border-r-4 border-blue-500 shadow-lg rounded-xl w-72 hover:translate-x-1">
                    <div className="flex items-center gap-4 mb-4">
                      <img src={review.image} alt={review.name} className="w-12 h-12 border-2 border-blue-100 rounded-full" />
                      <div>
                        <h3 className="font-semibold text-gray-900">{review.name}</h3>
                        <p className="text-sm text-blue-400">{review.date}</p>
                      </div>
                    </div>
                    <p className="text-[#061D41] leading-relaxed">{review.text}</p>
                    <div className="flex mt-4 text-yellow-400">★★★★★</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center order-1 px-4 lg:px-8 xl:order-2">
          <div className="inline-block px-4 py-2 mb-6 text-sm font-medium text-[#061D41] bg-blue-100 rounded-full shadow-sm self-start">
            SEAMLESS BANKING IN THE UAE
          </div>
          <h2 className="mb-6 text-4xl lg:text-5xl font-bold text-[#061D41] leading-tight">
            Effortless <span className="text-blue-600">Bank Account Opening</span> in the UAE
          </h2>
          <p className="mb-8 text-lg text-[#061D41] opacity-80 leading-relaxed">
            Join thousands who have successfully opened their bank accounts in the UAE with our expert assistance. A fast, smooth, and stress-free experience awaits you.
          </p>
          <p className='mb-4 text-lg text-[#061D41] opacity-80 leading-relaxed'>
            Navigating the UAE's banking landscape can be complex, but we simplify the process. Whether you're a resident, investor, or business owner, our tailored solutions ensure a hassle-free experience. From document preparation to bank liaison, we handle it all. We understand the nuances of UAE banking regulations, ensuring compliance and efficiency for our clients.
          </p>
          <p className='text-lg text-[#061D41] opacity-80 leading-relaxed'>
            Experience the ease of banking in the UAE with our dedicated support. We go beyond basic account opening, offering ongoing assistance to meet your evolving financial needs. 
          </p>
        </div>
      </div>
    </div>
  );
};

export default EnhancedVerticalReviews;