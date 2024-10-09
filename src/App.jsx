import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Classmates from './components/Classmates/Classmates';
import NavratriNav from './components/Navbar/NavratriNav';
import HumanFacesGrid from './components/HumanFacesGrid/HumanFacesGrid';
import Footer from './components/Footer/Footer';




const App = () => {
  return (
    <BrowserRouter>
      <NavratriNav />
      <Routes>
        <Route path="/Navratri-2024" element={<Home />} />
        <Route path="/classmates" element={<HumanFacesGrid />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
