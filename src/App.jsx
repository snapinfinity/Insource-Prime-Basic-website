import { Routes, Route } from 'react-router-dom'
import Header from './shared/Header'
import Home from './pages/Home'
import Navbar from './shared/Navbar'

function App() {
  return (
    <>
      {/* <Header /> */}
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  )
}

export default App
