import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './shared/Navbar'
import Footer from './shared/Footer'
import Aboutus from './pages/Aboutus'
import Services from './pages/Services'
import Contact from './pages/Contact'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<Aboutus/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/contact-us" element={<Contact/>} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
