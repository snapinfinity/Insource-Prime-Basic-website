import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './shared/Navbar'
import Footer from './shared/Footer'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
