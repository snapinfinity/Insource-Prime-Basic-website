import React from 'react'
import Hero from '../components/home/Hero'
import Aboutus from '../components/home/Aboutus'
import ServiceSection from '../components/home/ServiceSection'
import WhyChooseUs from '../components/home/WhyChooseUs'
import WhyBanking from '../components/home/WhyBanking'
import ReviewSection from '../components/home/ReviewSection'
import BackgroundWrapper from '../shared/BackgroundWrapper'
import bg from "../assets/bg_overlay.png";

const Home = () => {
  return (
    <BackgroundWrapper bg={bg}>
      <div className='overflow-hidden'>
        <Hero />
        <WhyBanking />
        <div className="relative py-16 overflow-hidden text-white bg-gradient-to-r from-black to-[#061D41]" style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}>
          <ServiceSection />
          <WhyChooseUs />
        </div>
        <ReviewSection />

      </div>
    </BackgroundWrapper>
  )
}

export default Home
