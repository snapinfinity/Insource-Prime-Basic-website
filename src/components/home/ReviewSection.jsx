import React, { useEffect, useState } from 'react';

const ReviewSection = () => {
  const [scrollPosition1, setScrollPosition1] = useState(0);
  const [scrollPosition2, setScrollPosition2] = useState(0);

  // Sample review data
  const reviews1 = [
    {
      name: "Reynolds Anthony",
      date: "May 14, @TrustPilot",
      text: "For years, I've trusted Finto Insurance. Their attentive team consistently finds me the perfect coverage. I'm confident in their protection of assets.",
      image: "/api/placeholder/48/48"
    },
    {
      name: "Sarah Johnson",
      date: "May 15, @TrustPilot",
      text: "For years, I've trusted Finto Insurance. Their attentive team consistently finds me the perfect coverage. I'm confident in their protection of assets.",
      image: "/api/placeholder/48/48"
    }
  ];

  const reviews2 = [
    {
      name: "Tomasz Adam",
      date: "May 14, @TrustPilot",
      text: "For years, I've trusted Finto Insurance. Their attentive team consistently finds me the perfect coverage. I'm confident in their protection of assets.",
      image: "/api/placeholder/48/48"
    },
    {
      name: "Emily Chen",
      date: "May 13, @TrustPilot",
      text: "For years, I've trusted Finto Insurance. Their attentive team consistently finds me the perfect coverage. I'm confident in their protection of assets.",
      image: "/api/placeholder/48/48"
    }
  ];

  useEffect(() => {
    const animateScroll = () => {
      setScrollPosition1(prev => (prev + 1) % 200);
      setScrollPosition2(prev => (prev - 1) % 200);
    };

    const interval = setInterval(animateScroll, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="py-16 bg-gray-50">
      <div className="container px-4 mx-auto">
        {/* Header Section */}
        <div className="mb-12 text-center">
          <div className="inline-block px-4 py-1 mb-4 text-sm font-medium text-green-800 bg-green-100 rounded-full">
            OUR CLIENT FEEDBACK
          </div>
          <h2 className="mb-4 text-5xl font-bold text-green-900">
            Highly rated 4.9 out of 5 by 1200+ entrepreneurs just like synox
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Join the ranks of over 1200 entrepreneurs who have entrusted us with their insurance needs and our exceptional service firsthand.
          </p>
        </div>

        {/* Reviews Sections */}
        <div className="space-y-8 overflow-hidden">
          {/* First row - moving right */}
          <div className="relative">
            <div 
              className="flex gap-6 transition-transform duration-1000 ease-linear"
              style={{ transform: `translateX(-${scrollPosition1}px)` }}
            >
              {[...reviews1, ...reviews1].map((review, index) => (
                <div 
                  key={index}
                  className="flex-none p-6 bg-white rounded-lg shadow-sm w-96"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={review.image}
                      alt={review.name}
                      className="w-12 h-12 rounded-full"
                    />
                    <div>
                      <h3 className="font-semibold text-gray-900">{review.name}</h3>
                      <p className="text-sm text-gray-500">{review.date}</p>
                    </div>
                  </div>
                  <p className="text-green-800">{review.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Second row - moving left */}
          <div className="relative">
            <div 
              className="flex gap-6 transition-transform duration-1000 ease-linear"
              style={{ transform: `translateX(${scrollPosition2}px)` }}
            >
              {[...reviews2, ...reviews2].map((review, index) => (
                <div 
                  key={index}
                  className="flex-none p-6 bg-white rounded-lg shadow-sm w-96"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={review.image}
                      alt={review.name}
                      className="w-12 h-12 rounded-full"
                    />
                    <div>
                      <h3 className="font-semibold text-gray-900">{review.name}</h3>
                      <p className="text-sm text-gray-500">{review.date}</p>
                    </div>
                  </div>
                  <p className="text-green-800">{review.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Rating Platforms */}
          <div className="flex items-center justify-center gap-16 mt-12">
            <div className="text-center">
              <div className="mb-2">
                <img src="/api/placeholder/48/48" alt="Clutch" className="w-12 h-12 mx-auto" />
              </div>
              <div className="flex items-center justify-center mb-1 text-yellow-400">
                ★★★★★
              </div>
              <div className="text-2xl font-bold">5.0</div>
              <div className="text-gray-600">26 REVIEWS</div>
            </div>
            <div className="text-center">
              <div className="mb-2">
                <img src="/api/placeholder/48/48" alt="Finto" className="w-12 h-12 mx-auto" />
              </div>
              <div className="flex items-center justify-center mb-1 text-yellow-400">
                ★★★★★
              </div>
              <div className="text-2xl font-bold">4.8</div>
              <div className="text-gray-600">26 REVIEWS</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewSection;