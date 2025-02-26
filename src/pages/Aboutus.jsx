import React from 'react'
import AboutHero from '../components/aboutus/AboutHero'
import AboutUsPage from '../components/aboutus/AboutusPage'
import PageContent from '../components/aboutus/PageContent'
import PageContent2 from '../components/aboutus/PageContent2'
import OurVision from '../components/aboutus/OurVision'

const Aboutus = () => {
    return (
        <>
            <AboutHero />
            <PageContent />
            <PageContent2 />
            <AboutUsPage />
            <OurVision />
        </>
    )
}

export default Aboutus