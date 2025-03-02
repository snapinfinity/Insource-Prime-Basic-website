import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './shared/Navbar'
import Footer from './shared/Footer'
import Aboutus from './pages/Aboutus'
import Services from './pages/Services'
import Contact from './pages/Contact'
import CorporateBanking from './pages/CorporateBanking'

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
      </Routes>
      <Footer/>
    </>
  )
}

export default App
