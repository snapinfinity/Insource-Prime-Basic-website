import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './shared/Navbar'
import Footer from './shared/Footer'
import Aboutus from './pages/Aboutus'
import Contact from './pages/Contact'
import CorporateBanking from './pages/CorporateBanking'
import OffshoreBanking from './pages/OffshoreBanking'
import PersonalBanking from './pages/PersonalBanking'
import PrivateBanking from './pages/PrivateBanking'
import ComplianceAdvisory from './pages/ComplianceAdvisory'


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<Aboutus/>} />
        {/* <Route path="/services" element={<Services/>} /> */}
        <Route path="/contact-us" element={<Contact/>} />
        <Route path="/services/corporate-banking" element={<CorporateBanking/>} />
        <Route path="/services/offshore-banking" element={<OffshoreBanking/>} />
        <Route path="/services/private-banking" element={<PrivateBanking/>} />
        <Route path="/services/personal-banking" element={<PersonalBanking/>} />
        <Route path="/services/compliance-advisory" element={<ComplianceAdvisory/>} />
        
      </Routes>
      <Footer/>
    </>
  )
}

export default App
