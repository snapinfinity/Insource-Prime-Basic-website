import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './shared/Navbar'
import Footer from './shared/Footer'
import Aboutus from './pages/Aboutus'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<Aboutus/>} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
