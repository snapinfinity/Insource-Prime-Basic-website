import React from 'react'
import Hero from '../components/home/Hero'
import Aboutus from '../components/home/Aboutus'
import ServiceSection from '../components/home/ServiceSection'
import WhyChooseUs from '../components/home/WhyChooseUs'
import WhyBanking from '../components/home/WhyBanking'
import ReviewSection from '../components/home/ReviewSection'

const Home = () => {
  return (
    <div className='overflow-hidden'>
      <Hero />
      <WhyBanking />
      {/* <Aboutus/> */}
      <ServiceSection />
      <WhyChooseUs />
      <ReviewSection/>
    </div>
  )
}

export default Home
