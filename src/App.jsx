import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header'
import Home from './pages/Home'
import Footer from './components/Footer'
import ProjectGallery from './pages/ProjectGallery'
import Contact from './pages/Contact'

function App() {

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projectgallery" element={<ProjectGallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
