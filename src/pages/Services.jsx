import React from 'react'
import ServiceHero from '../components/service/ServiceHero'
import ServiceDetails from '../components/service/ServiceDetails'
import servicesData from '../components/service/ServiceData'
import TrustedPartner from '../components/service/TrustedPartner'

const Services = () => {
  return (
    <>
    <ServiceHero/>
    <ServiceDetails services={servicesData} />
    <TrustedPartner/>
      
    </>
  )
}

export default Services
