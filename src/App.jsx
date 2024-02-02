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

// nice to haves in future:
// fix save button in the work day scheduler - after the first time it doesn't go hide after 2 secs
// change urls in project gallery so just the name instead?
// improve CSS of hyperlinks in contacts page being blue and underlined

// in readme mention i used code from prior portfolio projects
// in readme mention react bootstrap https://react-bootstrap.netlify.app
// in readme mention form creator https://getform.io/
